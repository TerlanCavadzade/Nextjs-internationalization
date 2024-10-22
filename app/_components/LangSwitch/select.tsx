"use client";

import { usePathname, useRouter } from "next/navigation";
import {
  ChangeEvent,
  memo,
  useEffect,
  useMemo,
  useRef,
  useState,
  useTransition,
} from "react";

const Select = ({ langs, selected }: { langs: string[]; selected: string }) => {
  const [selectedLang, setSelectedLang] = useState(selected);
  const [ispending, startTransition] = useTransition();

  const router = useRouter();
  const pathName = usePathname();
  const slicedPathName = useMemo(() => {
    return pathName.split("/").slice(1);
  }, [pathName]);

  const selectChangeHandler = (e: ChangeEvent<HTMLSelectElement>) => {
    setSelectedLang(e.target.value);
  };

  useEffect(() => {
    if (selectedLang !== selected) {
      const newPathSliced = slicedPathName.map((url, index) => {
        if (index === 0) {
          return selectedLang;
        }
        return url;
      });

      const newPath = "/" + newPathSliced.join("/");

      startTransition(() => {
        router.push(newPath);
      });
    }
  }, [selectedLang, selected, router]);

  return (
    <select
      value={selectedLang}
      disabled={ispending}
      onChange={selectChangeHandler}
    >
      <option value="def">non existing</option>
      {langs.map((lang, id) => (
        <option key={id} value={lang}>
          {lang}
        </option>
      ))}
    </select>
  );
};

export default memo(Select);
