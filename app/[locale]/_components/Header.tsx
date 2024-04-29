import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { Section } from "./Section";
import { GithubIcon } from "./icons/GithubIcon";
import { LinkedinIcon } from "./icons/LinkedinIcon";

export const Header = () => {
  return (
    <header className="sticky top-0 py-4 bg-opacity-60 backdrop-filter backdrop-blur-lg">
      <Section className="flex items-baseline ">
        <h1 className="text-lg font-bold text-primary">
          Welcome to my portfolio!!!
        </h1>
        <div className="flex-1" />
        <ul className="flex items-center gap-2">
          <Link
            href="https://github.com/BenoitLafabrie"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <GithubIcon size={20} className="text-foreground" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/benoit-lafabrie/"
            className={cn(buttonVariants({ variant: "outline" }), "size-6 p-0")}
          >
            <LinkedinIcon size={20} className="text-foreground" />
          </Link>
        </ul>
      </Section>
    </header>
  );
};
