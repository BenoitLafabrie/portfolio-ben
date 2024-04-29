import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTranslations } from "next-intl";
import Link from "next/link";
import { Globe } from "lucide-react";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  const t = useTranslations("Home.Header");

  return (
    <header className="sticky top-0 py-4 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <Section className="flex items-baseline ">
        <h1 className="text-lg font-bold text-primary">{t("Title")}</h1>
        <div className="flex-1 " />
        <ul className="flex items-center gap-2 text-primary divide-x-2">
          <Link
            href="https://github.com/BenoitLafabrie"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 border-none "
            )}
          >
            <GithubIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/benoit-lafabrie/"
            className={cn(
              buttonVariants({ variant: "outline" }),
              "size-6 p-0 border-none"
            )}
          >
            <LinkedinIcon size={20} className="text-foreground" />
          </Link>
          <div className="flex items-center gap-2 pl-2 border-primary">
            <Globe />
            <Link href="http://localhost:5600/fr" locale="fr">
              FR
            </Link>
            <Link href="http://localhost:5600/en" locale="en">
              EN
            </Link>
          </div>
        </ul>
      </Section>
    </header>
  );
};
