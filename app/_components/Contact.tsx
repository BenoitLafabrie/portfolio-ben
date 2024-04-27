import { Badge } from "@/components/ui/badge";
import { ContactCard } from "./ContactCard";
import { Section } from "./Section";

export const Contact = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge variant="outline">Contact me</Badge>
      <h2 className="pb-2 text-3xl font-semibold tracking-tight first:mt-0">
        I will love to work with you.
      </h2>
      <div className="flex max-md:flex-col gap-4 w-full">
        <ContactCard
          className="flex-1"
          url="mailto:benoit_lafabrie_pro@fastmail.com"
          name="Pro Email"
          image="https://i.imgur.com/ZiUHp3A.jpg"
          mediumImage="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiNkNGQ0ZDQiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIiBjbGFzcz0ibHVjaWRlIGx1Y2lkZS1tYWlsIj48cmVjdCB3aWR0aD0iMjAiIGhlaWdodD0iMTYiIHg9IjIiIHk9IjQiIHJ4PSIyIi8+PHBhdGggZD0ibTIyIDctOC45NyA1LjdhMS45NCAxLjk0IDAgMCAxLTIuMDYgMEwyIDciLz48L3N2Zz4="
          description="Please fill that inbox ;)"
        />
        <ContactCard
          className="flex-1"
          url="https://www.linkedin.com/in/benoit-lafabrie/"
          name="Benoît Lafabrie"
          image="https://i.imgur.com/ZiUHp3A.jpg"
          mediumImage="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.8IxSTRR_RjmMtUAT7nAT7gHaHa%26pid%3DApi&f=1&ipt=da87fb84ee094fd789611272d2170e0c82ab560d78b1d68e13dc082f94cd07f5&ipo=images"
          description="Let's networking ;)"
        />
      </div>
    </Section>
  );
};
