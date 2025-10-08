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
    <div className="flex justify-center h-screen bg-foreground text-foreground text-sm">
      <div className="flex flex-col max-w-md w-full h-full border border-x mt-20 px-2">
        {/* header and profile photo */}
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-lg text-accent">
              YASHRAJ VERMA{" "}
              <span className="text-sm text-primary-foreground">(he/him)</span>
            </div>
            <div className="text-sm text-secondary/60">@yashrajvrma</div>
          </div>
          <div className="border border-muted-foreground bg-accent p-1 h-[60px] w-[60px]">
            <Image
              src="https://pbs.twimg.com/profile_images/1974875613837324288/ckIPGnPE_400x400.jpg"
              alt="profile-img"
              width={60}
              height={60}
              className="w-full h-full"
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
        <div className="flex flex-col gap-y-1 mt-7">
          <div className="text-xs text-secondary">LINKS</div>
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
        <div className="flex flex-col mt-7 gap-y-1">
          <div className="text-xs text-secondary">SKILLS</div>
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
        <div className="flex flex-col justify-center mt-7 gap-y-1">
          <div className="text-xs text-secondary">WORK EXPERIENCE</div>
          <div className="flex justify-between gap-x-2 w-full">
            <div className="border border-muted-foreground bg-accent p-1 h-[60px] w-[60px]">
              <Image
                src="https://media.licdn.com/dms/image/v2/D560BAQFaeBtUoOJ57w/company-logo_200_200/company-logo_200_200/0/1720175360812?e=1762992000&v=beta&t=F9equuaDXkWJp3LU8Cmjhhh9cDAiGwIkaQI-LNMYSdU"
                alt="techluminix-img"
                width={60}
                height={60}
                className="w-full h-full"
              />
            </div>

            <div className="flex flex-col gap-y-1 w-full h-full">
              <div className="flex flex-col">
                <div className="text-primary-foreground">
                  Full Stack Developer
                </div>
                <div className="text-xs text-secondary/60">
                  NOV 2024 - APR 2025
                </div>
              </div>
              <div className="text-primary-foreground/90">
                Worked on building a school management system application to
                manage students and their academics providing a seamless and
                responsive user experience
              </div>
            </div>
          </div>
        </div>
        {/* projects section */}
        <div></div>
        {/* footer section  */}
        <div></div>
      </div>
    </div>
  );
}
