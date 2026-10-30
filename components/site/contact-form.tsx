"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { CircleCheck, LoaderCircle, Send, TriangleAlert } from "lucide-react";
import { useId, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { site } from "@/content/site";
import { cn } from "@/lib/utils";

const topics = ["سؤال", "مشكلة في التطبيق", "اقتراح"] as const;

const schema = z.object({
  name: z.string().trim().min(2, "اكتب اسمك (حرفان على الأقل).").max(80, "الاسم طويل جدًا."),
  contact: z
    .string()
    .trim()
    .min(1, "اكتب رقم واتساب أو بريدًا إلكترونيًا لنرد عليك.")
    .refine(
      (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v) || /^\+?[0-9\s-]{7,16}$/.test(v),
      "اكتب رقمًا صحيحًا (مثل 967700000000) أو بريدًا إلكترونيًا صحيحًا.",
    ),
  topic: z.enum(topics),
  message: z.string().trim().min(10, "اكتب رسالتك (10 أحرف على الأقل).").max(2000, "الرسالة أطول من 2000 حرف."),
  // Honeypot: real people never see or fill it.
  _gotcha: z.string().max(0).optional(),
});

type Values = z.infer<typeof schema>;
type Status = "idle" | "sent" | "error";

export function ContactForm() {
  const uid = useId();
  const [status, setStatus] = useState<Status>("idle");
  const [errorText, setErrorText] = useState("");
  const {
    register,
    handleSubmit,
    reset,
    watch,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm<Values>({
    resolver: zodResolver(schema),
    defaultValues: { name: "", contact: "", topic: "سؤال", message: "", _gotcha: "" },
  });
  const topic = watch("topic");

  async function onSubmit(values: Values) {
    setStatus("idle");
    if (!site.formEndpoint) {
      setErrorText("النموذج غير مفعّل بعد. راسلنا على واتساب أو البريد حتى يُفعّل.");
      setStatus("error");
      return;
    }
    try {
      const res = await fetch(site.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({ ...values, _subject: `تسيير: ${values.topic}` }),
      });
      if (!res.ok) throw new Error(String(res.status));
      setStatus("sent");
      toast.success("وصلت رسالتك، وسنرد عليك قريبًا.");
      reset();
    } catch {
      setErrorText("لم تُرسل الرسالة. تحقق من اتصالك بالإنترنت وحاول مرة أخرى، أو راسلنا على واتساب.");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 rounded-xl border bg-card p-6 md:p-8">
        <CircleCheck className="size-10 text-success" aria-hidden />
        <div>
          <h3 className="text-xl font-bold">شكرًا، وصلت رسالتك</h3>
          <p className="mt-1 text-muted-foreground">سنرد عليك على الرقم أو البريد الذي كتبته.</p>
        </div>
        <Button variant="outline" onClick={() => setStatus("idle")}>
          إرسال رسالة أخرى
        </Button>
      </div>
    );
  }

  const field = (name: keyof Values) => ({
    id: `${uid}-${name}`,
    "aria-invalid": errors[name] ? true : undefined,
    "aria-describedby": errors[name] ? `${uid}-${name}-error` : undefined,
  });
  const fieldClass = "h-12 bg-background text-base md:text-base";

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5 rounded-xl border bg-card p-6 md:p-8">
      <div className="grid gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor={`${uid}-name`}>الاسم</Label>
          <Input {...field("name")} {...register("name")} autoComplete="name" className={fieldClass} />
          <FieldError id={`${uid}-name-error`} message={errors.name?.message} />
        </div>
        <div className="space-y-2">
          <Label htmlFor={`${uid}-contact`}>رقم واتساب أو البريد</Label>
          <Input
            {...field("contact")}
            {...register("contact")}
            dir="ltr"
            spellCheck={false}
            autoComplete="email"
            placeholder="967700000000"
            className={cn(fieldClass, "text-end placeholder:text-end")}
          />
          <FieldError id={`${uid}-contact-error`} message={errors.contact?.message} />
        </div>
      </div>

      <fieldset className="space-y-2">
        <legend className="mb-2 text-sm font-medium">نوع الرسالة</legend>
        <div className="flex flex-wrap gap-2">
          {topics.map((t) => (
            <label
              key={t}
              className={cn(
                "inline-flex min-h-11 cursor-pointer items-center rounded-full border px-4 text-[0.95rem] transition-colors has-[:focus-visible]:outline-2 has-[:focus-visible]:outline-offset-2 has-[:focus-visible]:outline-ring",
                topic === t ? "border-primary bg-secondary-container text-primary" : "bg-background hover:border-primary/40",
              )}
            >
              <input
                type="radio"
                value={t}
                checked={topic === t}
                onChange={() => setValue("topic", t)}
                name="topic"
                className="sr-only"
              />
              {t}
            </label>
          ))}
        </div>
      </fieldset>

      <div className="space-y-2">
        <Label htmlFor={`${uid}-message`}>رسالتك</Label>
        <Textarea
          {...field("message")}
          {...register("message")}
          rows={5}
          className="min-h-32 bg-background text-base md:text-base"
          placeholder="مثلًا: حاولت مشاركة الفاتورة فظهرت رسالة…"
          autoComplete="off"
        />
        <FieldError id={`${uid}-message-error`} message={errors.message?.message} />
      </div>

      <div aria-hidden className="sr-only">
        <label>
          اترك هذا الحقل فارغًا
          <input tabIndex={-1} autoComplete="off" {...register("_gotcha")} />
        </label>
      </div>

      {status === "error" && (
        <p role="alert" className="flex gap-2 rounded-lg border border-error/40 bg-error/10 p-3 text-foreground">
          <TriangleAlert className="mt-1 size-4 shrink-0 text-error" aria-hidden />
          {errorText}
        </p>
      )}

      <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <p className="text-sm text-muted-foreground">
          تُرسل رسالتك عبر Formspree إلى بريد الدعم. لا تكتب رموز PIN أو بيانات زبائنك.
        </p>
        <Button type="submit" size="lg" disabled={isSubmitting} className="shrink-0">
          {isSubmitting ? (
            <LoaderCircle className="animate-spin" data-icon="inline-start" aria-hidden />
          ) : (
            <Send className="-scale-x-100" data-icon="inline-start" aria-hidden />
          )}
          {isSubmitting ? "جارٍ الإرسال…" : "أرسل الرسالة"}
        </Button>
      </div>
    </form>
  );
}

function FieldError({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return (
    <p id={id} aria-live="polite" className="text-sm text-error">
      {message}
    </p>
  );
}
