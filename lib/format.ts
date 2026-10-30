/** "30 أكتوبر 2026", with Western digits like the app. */
export const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("ar", { day: "numeric", month: "long", year: "numeric", numberingSystem: "latn" }).format(
    new Date(`${iso}T00:00:00Z`),
  );
