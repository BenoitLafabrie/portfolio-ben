import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Code } from "./Code";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

export const Skills = () => {
  const t = useTranslations("Home.Skills");
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="text-3xl" variant="outline">
        {t("Title")}
      </Badge>
      <h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        {t("SkillsCatchphrase")}
      </h2>
      <div className="flex max-md:flex-col gap-4 text-balance">
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <ReactIcon
              className="animate-spin"
              size={42}
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {t("Skill1Title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("Skill1Description1")} <Code>{t("Skill1Tech1")}</Code>{" "}
            {t("Skill1Description2")} <Code>{t("Skill1Tech2")}</Code>{" "}
            {t("Skill1Description3")}
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <TypeScriptIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {t("Skill2Title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("Skill2Description1")}
            <Code>{t("Skill2Tech1")}</Code>
            {t("Skill2Description2")}
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <TailwindIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">
            {t("Skill3Title")}
          </h3>
          <p className="text-sm text-muted-foreground">
            {t("Skill3Description1")}
            <Code>{t("Skill3Tech1")}</Code>
            {t("Skill3Description2")}
          </p>
        </div>
      </div>
    </Section>
  );
};
