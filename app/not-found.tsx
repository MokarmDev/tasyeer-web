import { ArrowLeft } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Tag } from "@/components/site/tag";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "الصفحة غير موجودة",
};

export default function NotFound() {
  return (
    <section className="relative overflow-hidden">
      <div aria-hidden className="bg-dots absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]" />
      <div className="container-page relative flex min-h-[60vh] flex-col items-center justify-center py-20 text-center">
        <Tag>
          <span className="ltr-iso">404</span>
        </Tag>
        <h1 className="mt-6 text-[clamp(2rem,5vw,3rem)] font-bold">هذه القطعة ليست على أي رف</h1>
        <p className="mt-3 max-w-md text-lg text-muted-foreground">
          بحثنا في كل الرفوف والأكياس، ولم نجد الصفحة التي تطلبها. ربما تغيّر الرابط.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button asChild size="lg">
            <Link href="/">
              العودة إلى الرئيسية
              <ArrowLeft data-icon="inline-end" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="bg-transparent">
            <Link href="/support/">الدعم</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
