import { notFound } from "next/navigation";
import useTranslation from "../_hooks/useTranslation";
import Link from "next/link";

export default async function Home({
  params: { locale },
}: {
  params: { locale: string };
}) {
  const { success, t } = await useTranslation(locale);

  if (!success) {
    notFound();
  }

  return (
    <div>
      <h2>{t("title")}</h2>

      <Link href={`${locale}/otherLink`}>Test</Link>
    </div>
  );
}
