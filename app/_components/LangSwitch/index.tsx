import useTranslation from "@/app/_hooks/useTranslation";
import Select from "./select";

const LangSwitch = async ({ locale }: { locale: string }) => {
  // get languages from server
  // const langs = await fetch("api url")
  const { t } = await useTranslation(locale);

  const langs = ["az", "en", "ru"];

  return (
    <div>
      <span>{t("lang")}</span>
      <Select selected={locale} langs={langs} />{" "}
    </div>
  );
};

export default LangSwitch;
