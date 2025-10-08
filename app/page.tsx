import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";

const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Next.js",
  "Express.js",
  "Tailwind CSS",
  "Node.js",
  "SQL",
  "Prisma",
  "PostgreSQL",
  "Langchain",
  "Docker",
  "AWS",
  "Redis",
];

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-foreground text-primary-foreground text-sm">
      <div className="flex flex-col max-w-md w-full h-full border border-x mt-20 px-2">
        {/* header and profile photo */}
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-lg">
              YASHRAJ VERMA <span className="text-sm">(he/him)</span>
            </div>
            <div className="text-sm text-muted-foreground">@yashrajvrma</div>
          </div>
          <div className="border border-muted-foreground bg-accent p-1">
            <Image
              src="https://pbs.twimg.com/profile_images/1974875613837324288/ckIPGnPE_400x400.jpg"
              alt="profile-img"
              width={60}
              height={60}
            />
          </div>
        </div>

        {/* bio section */}
        <div className="flex flex-col pt-5 text-secondary">
          <div>20 ★ Engineer ★ FullStack Dev</div>
          <div>
            Final year student pursuing B.E in Electronics and Telecommunication
            Engineering
          </div>
        </div>

        {/* link section  */}
        <div className="flex flex-col gap-y-1 mt-5">
          <div className="text-xs text-secondary p-1">LINKS</div>
          <div className="flex gap-x-4">
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <ReadCvLogoIcon size={24} />
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <EnvelopeSimpleIcon size={24} />
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <GithubLogoIcon size={24} />
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <XLogoIcon size={24} />
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <LinkedinLogoIcon size={24} />
            </button>
          </div>
        </div>

        {/* skill section  */}
        <div className="flex flex-col mt-5 gap-y-1">
          <div className="text-xs text-secondary p-1">SKILLS</div>
          <div className="flex flex-wrap gap-2">
            {skills.map((item, index) => (
              <Badge
                key={index}
                variant="outline"
                className="text-xs text-secondary border-border rounded-none"
              >
                {item}
              </Badge>
            ))}
          </div>
        </div>

        {/* work exp */}
        <div></div>
        {/* projects section */}
        <div></div>
        {/* footer section  */}
        <div></div>
      </div>
    </div>
  );
}
