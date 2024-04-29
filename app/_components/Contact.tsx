import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="text-3xl" variant="outline">
        Contact me
      </Badge>
      <h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        I would love to work with you.
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="mailto:benoit_lafabrie_pro@fastmail.com"
          name="Pro Email"
          image="https://i.imgur.com/ZiUHp3A.jpg"
          mediumImage="https://purepng.com/public/uploads/medium/purepng.com-mail-iconsymbolsiconsapple-iosiosios-8-iconsios-8-721522596075c48i3.png"
          description="Please fill that inbox ;)"
        />
        <ContactCard
          className="flex-1"
          url="https://www.linkedin.com/in/benoit-lafabrie/"
          name="Benoît Lafabrie"
          image="https://i.imgur.com/ZiUHp3A.jpg"
          mediumImage="https://logospng.org/download/linkedin/logo-linkedin-icon-2048.png"
          description="Let's networking ;)"
        />
      </div>
    </Section>
  );
};
