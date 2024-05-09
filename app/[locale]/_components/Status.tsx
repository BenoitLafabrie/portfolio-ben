import { Card } from "@/components/ui/card";
import { Building2, Popcorn, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  const t = useTranslations("Home.Status");
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">
            {t("SideProjectsTitle")}
          </p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject
                key={index}
                Logo={project.Logo}
                title={project.title}
                description={t(project.description)}
                url={project.url}
                bootcamp={project.bootcamp}
              />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">{t("WorkTitle")}</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work
                key={index}
                image={work.image}
                title={work.title}
                role={t(work.role)}
                date={work.date}
                url={work.url}
              />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">{t("ContactMeTitle")}</p>
          <ContactCard
            url="mailto:benoit_lafabrie_pro@fastmail.com"
            name={t("MailContactName")}
            image="https://i.imgur.com/Us0eknf.png"
            mediumImage="https://purepng.com/public/uploads/medium/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075c48i3.png"
            description={t("MailContactDescription")}
          />
          <ContactCard
            url="https://www.linkedin.com/in/benoit-lafabrie/"
            name={t("LinkedInContactName")}
            image="https://i.imgur.com/Us0eknf.png"
            mediumImage="https://logospng.org/download/linkedin/logo-linkedin-icon-2048.png"
            description={t("LinkedInContactDescription")}
          />
        </Card>
      </div>
    </Section>
  );
};

const SIDE_PROJECTS: SideProjectProps[] = [
  {
    Logo: Zap,
    title: "Habitful",
    description: "SideProject1Description",
    url: "/",
    bootcamp: true,
  },
  {
    Logo: Building2,
    title: "Make_Sense",
    description: "SideProject2Description",
    url: "/",
    bootcamp: true,
  },
  {
    Logo: Popcorn,
    title: "FetchAnime",
    description: "SideProject3Description",
    url: "/",
    bootcamp: true,
  },
];

const WORKS: WorkProps[] = [
  {
    image: "https://i.imgur.com/dHxLbyc.png",
    title: "MyGunplaList",
    role: "Work1Role",
    date: "2024",
    url: "https://mygunplalist.com",
  },
];
