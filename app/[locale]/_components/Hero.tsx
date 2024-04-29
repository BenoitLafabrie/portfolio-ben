/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

import { useTranslations } from "next-intl";
import Link from "next/link";
import { Code } from "./Code";
import { Section } from "./Section";
import { MyGunplaListIcon } from "./icons/MyGunplaListIcon";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

export const Hero = () => {
  const t = useTranslations("Home.Hero");
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full flex flex-col gap-2">
        <h2 className="font-caption font-bold text-5xl text-primary">
          Benoît Lafabrie
        </h2>
        <h3 className="text-3xl font-caption">{t("Role")}</h3>
        <>
          <p className="text-base">
            {t("Summary")}
            <Code className="inline-flex items-center gap-1">
              <ReactIcon size={16} className="inline" />
              {t("Tech1")}
            </Code>
            ,{" "}
            <Code className="inline-flex items-center gap-1">
              <TypeScriptIcon size={16} className="inline" />
              {t("Tech2")}
            </Code>
            , {t("And")}{" "}
            <Code className="inline-flex items-center gap-1">
              <TailwindIcon size={16} className="inline" />
              {t("Tech3")}
            </Code>
            .
          </p>
          <p className="text-base">
            {t("Situation1")}{" "}
            <Link href="https://en.wikipedia.org/wiki/France">
              <Code className="inline-flex items-center gap-1">
                <img
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Flag_of_France.svg/510px-Flag_of_France.svg.png"
                  alt="France flag"
                  style={{ width: "16px", height: "auto" }}
                />
                {t("Country")}
              </Code>{" "}
            </Link>
            {t("Situation2")}{" "}
            <Link href="https://mygunplalist.com">
              <Code className="inline-flex items-center gap-1">
                <MyGunplaListIcon size={16} className="inline" />
                {t("FlagshipProject")}
              </Code>{" "}
            </Link>
            .
          </p>
        </>
      </div>
      <div className="flex-[2] max-md:m-auto ml-auto">
        <img
          src="https://i.imgur.com/ZiUHp3A.jpg"
          className="w-full h-auto max-w-xs max-md:w-56 rounded-full"
          alt="Ben's picture"
        />
      </div>
    </Section>
  );
};
