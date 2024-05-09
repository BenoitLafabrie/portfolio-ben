import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  const t = useTranslations("Home.Contact");
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="text-3xl" variant="secondary">
        {t("Title")}
      </Badge>
      <h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        {t("ContactCatchphrase")}
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="mailto:benoit_lafabrie_pro@fastmail.com"
          name={t("MailContactName")}
          image="https://i.imgur.com/Us0eknf.png"
          mediumImage="https://purepng.com/public/uploads/medium/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075c48i3.png"
          description={t("MailContactDescription")}
        />
        <ContactCard
          className="flex-1"
          url="https://www.linkedin.com/in/benoit-lafabrie/"
          name={t("LinkedInContactName")}
          image="https://i.imgur.com/Us0eknf.png"
          mediumImage="https://logospng.org/download/linkedin/logo-linkedin-icon-2048.png"
          description={t("LinkedInContactDescription")}
        />
      </div>
    </Section>
  );
};
