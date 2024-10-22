import { notFound } from "next/navigation";
import getAllTranslations from "../_services/getTranslations";

const useTranslation = async (lang = "en") => {
  const translations = await getAllTranslations();

  if (!(lang in translations)) {
    return { success: false, t: () => null };
  }

  const getTranslation = (key: string) => {
    return translations?.[lang]?.[key] || key;
  };

  return { success: true, t: getTranslation };
};

export default useTranslation;
