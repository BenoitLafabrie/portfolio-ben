import { Badge } from "@/components/ui/badge";
import { Code } from "./Code";
import { Section } from "./Section";
import { ReactIcon } from "./icons/ReactIcon";
import { TailwindIcon } from "./icons/TailwindIcon";
import { TypeScriptIcon } from "./icons/TypeScriptIcon";

export const Skills = () => {
  return (
    <Section className="flex flex-col items-start gap-4">
      <Badge className="text-3xl" variant="outline">
        Skills
      </Badge>
      <h2 className="pb-2 text-2xl font-semibold tracking-tight first:mt-0">
        I love working on...
      </h2>
      <div className="flex max-md:flex-col gap-4">
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <ReactIcon
              className="animate-spin"
              size={42}
              style={{ animationDuration: "10s" }}
            />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">React</h3>
          <p className="text-sm text-muted-foreground">
            My main framework is <Code>React</Code>. I also use{" "}
            <Code>Next.js</Code> as a backend and frontend framework.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <TypeScriptIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Typescript</h3>
          <p className="text-sm text-muted-foreground">
            I use <Code>TypeScript</Code> to prevent bugs and improve my code
            quality.
          </p>
        </div>
        <div>
          <div className="flex flex-col gap-2 flex-1">
            <TailwindIcon size={42} />
          </div>
          <h3 className="text-2xl font-semibold tracking-tight">Tailwind</h3>
          <p className="text-sm text-muted-foreground">
            Still learning <Code>TailwindCSS</Code> but I <i>love</i> it so far!
          </p>
        </div>
      </div>
    </Section>
  );
};
