import { Card } from "@/components/ui/card";
import { Building2, Popcorn, Zap } from "lucide-react";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";
import { SideProject, SideProjectProps } from "./SideProject";
import { Work, WorkProps } from "./Work";

export const Status = () => {
  return (
    <Section className="flex max-md:flex-col items-start gap-4">
      <div className="flex-[3] w-full">
        <Card className=" w-full p-4 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Side projects</p>
          <div className="flex flex-col gap-4">
            {SIDE_PROJECTS.map((project, index) => (
              <SideProject key={index} {...project} />
            ))}
          </div>
        </Card>
      </div>
      <div className="flex-[2] w-full flex flex-col gap-4">
        <Card className="p-4 flex-1">
          <p className="text-lg text-muted-foreground">Work</p>
          <div className="flex flex-col gap-4">
            {WORKS.map((work, index) => (
              <Work key={index} {...work} />
            ))}
          </div>
        </Card>
        <Card className="p-4 flex-1 flex flex-col gap-2">
          <p className="text-lg text-muted-foreground">Contact Me</p>
          <ContactCard
            url="mailto:benoit_lafabrie_pro@fastmail.com"
            name="Pro Email"
            image="https://i.imgur.com/ZiUHp3A.jpg"
            mediumImage="https://purepng.com/public/uploads/medium/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075c48i3.png"
            description="Please fill that inbox ;)"
          />
          <ContactCard
            url="https://www.linkedin.com/in/benoit-lafabrie/"
            name="Benoît Lafabrie"
            image="https://i.imgur.com/ZiUHp3A.jpg"
            mediumImage="https://logospng.org/download/linkedin/logo-linkedin-icon-2048.png"
            description="Let's networking ;)"
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
    description:
      "A mobile application to create and keep good habits in your life. Part of design and front-end development teams.",
    url: "/",
    bootcamp: true,
  },
  {
    Logo: Building2,
    title: "Make_Sense",
    description:
      "A web application to manage company's decision-making for future actions. Part of design, back-end and front-end development teams.",
    url: "/",
    bootcamp: true,
  },
  {
    Logo: Popcorn,
    title: "FetchAnime",
    description:
      "An AniList/ADN clone to track and watch your favorites anime series. Part of design, API and front-end development teams.",
    url: "/",
    bootcamp: true,
  },
];

const WORKS: WorkProps[] = [
  {
    image: "https://i.imgur.com/dHxLbyc.png",
    title: "MyGunplaList",
    role: "Designer, Fullstack Developer",
    date: "2024",
    url: "https://mygunplalist.com",
  },
];
