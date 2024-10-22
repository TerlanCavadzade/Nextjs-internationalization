import { cache } from "react";

const getAllTranslations = async () => {
  // fetch automatically cache so it will not request again and again
  const res = await fetch("https://fp5486-3000.csb.app/api/localtest", {
    cache: "force-cache",
    next: { tags: ["locale"] },
  });
  const data = await res.json();

  return data;
};

export default cache(getAllTranslations);
