import { Badge } from "@/components/ui/badge";
import {
  ArrowLineUpRightIcon,
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  HeartIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";
import Image from "next/image";
import Link from "next/link";
import breezeImg from "@/public/breeze.jpg";
import postcnImg from "@/public/postcn.png";
import boltHackathon from "@/public/bolt-hackathon.png";
import excess from "@/public/excess.png";
import chitpost from "@/public/chitpost.png";
import anuvad from "@/public/anuvad.png";

const skills = [
  "HTML",
  "CSS",
  "Tailwind CSS",
  "JavaScript",
  "TypeScript",
  "Python",
  "React",
  "Redux",
  "Zustand",
  "Tanstack Query",
  "Shadcn",
  "Next.js",
  "Express.js",
  "Node.js",
  "MongoDB",
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
    <div className="flex justify-center bg-foreground text-primary-foreground text-sm">
      <div className="flex flex-col sm:max-w-lg max-w-sm w-full h-full mt-20 sm:px-2 px-4">
        {/* header and profile photo */}
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-lg font-semibold">
              YASHRAJ VERMA
              <span className="pl-2 text-sm text-secondary/85">(he/him)</span>
            </div>
            <div className="text-sm text-secondary/60">@yashrajvrma</div>
          </div>
          <div className="border-2 border-border h-[60px] w-[60px]">
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
        <div className="flex flex-col gap-y-2 mt-8">
          <div className="text-xs text-secondary">LINKS</div>
          <div className="flex gap-x-4">
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <Link
                href="https://drive.google.com/file/d/1FXuZi3ve1ZRpR6_DuLSlzfX7lRP8WOlt/view?usp=drivesdk"
                target="_blank"
                className="hover:scale-125 transition duration-200 ease-in-out transform"
              >
                <ReadCvLogoIcon size={24} />
              </Link>
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <Link
                href="mailto:yashrajv.work@gmail.com"
                target="_blank"
                className="hover:scale-125 transition duration-200 ease-in-out transform"
              >
                <EnvelopeSimpleIcon size={24} />
              </Link>
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <Link
                href="https://github.com/yashrajvrma"
                target="_blank"
                className="hover:scale-125 transition duration-200 ease-in-out transform"
              >
                <GithubLogoIcon size={24} />
              </Link>
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <Link
                href="https://x.com/yashrajvrma"
                target="_blank"
                className="hover:scale-125 transition duration-200 ease-in-out transform"
              >
                <XLogoIcon size={24} />
              </Link>
            </button>
            <button className="flex justify-center items-center rounded-none hover:bg-muted-foreground text-secondary h-12 w-12">
              <Link
                href="https://www.linkedin.com/in/theyashrajverma/"
                target="_blank"
                className="hover:scale-125 transition duration-200 ease-in-out transform"
              >
                <LinkedinLogoIcon size={24} />
              </Link>
            </button>
          </div>
        </div>

        {/* skill section  */}
        <div className="flex flex-col mt-8 gap-y-2">
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
        <div className="flex flex-col justify-center mt-8 gap-y-2">
          <div className="text-xs text-secondary">WORK EXPERIENCE</div>
          <div className="flex justify-between gap-x-2 w-full">
            <div className="border-2 border-border h-[60px] w-[60px]">
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
                <div className="font-semibold">Full Stack Developer</div>
                <div className="text-xs text-secondary/60">
                  NOV 2024 - APR 2025
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 ">
                <div>
                  Worked on building a school management system application to
                  manage students and their academics providing a seamless and
                  responsive UI/UX.
                </div>
                <div>
                  Solved critical challenges like data sync across multiple
                  branches, ensuring real-time updates and consistency.
                </div>
                <div>
                  Collaborated with a cross-functional team to design and
                  implement features that significantly enhanced user experience
                  and engagement.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* projects section */}
        <div className="flex flex-col gap-y-2 mt-8">
          <div className="text-xs text-secondary">PROJECTS</div>
          <div className="flex flex-col gap-y-10">
            {/* breeze project  */}
            <div className="flex flex-col gap-y-2">
              <div className="border-2 border-border">
                <Link href="https://www.breezeai.live/" target="_blank">
                  <Image
                    src={breezeImg}
                    width={1200}
                    height={1200}
                    alt="breeze-img"
                    priority
                    quality={100}
                    className="w-full h-ful hover:scale-102 hover:border-2 hover:border-border transition duration-200 ease-in-out transform"
                  />
                </Link>
              </div>
              <div className="flex justify-between py-1">
                <div className="flex items-center font-semibold w-[70%]">
                  Breeze - AI Powered Docs Editor
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-end justify-end items-center gap-y-0.5 gap-x-3 w-[30%]">
                  <Link
                    href="https://www.breezeai.live/"
                    target="_blank"
                    className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default"
                  >
                    <div>LIVE</div>
                    <span>
                      <ArrowLineUpRightIcon size={15} />
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/yashrajvrma/Breeze"
                    target="_blank"
                    className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default"
                  >
                    <div>GITHUB</div>
                    <span>
                      <ArrowLineUpRightIcon size={15} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 text-justify">
                <p>
                  Built an AI-powered Document Editor using Next.js, TanStack
                  Query, Shadcn UI and PostgreSQL, enabling real-time editing,
                  intelligent formatting and efficient state handling using
                  Zustand.
                </p>
                <p>
                  Integrated a Google Docs-like editor using TipTap and added
                  dynamic content generation, grammar assistance using Vercel AI
                  SDKs.
                </p>
                <p>
                  Implemented rate-limiting using Upstash Redis to optimize LLM
                  usage
                </p>
              </div>
            </div>
            {/* mock api project */}
            <div className="flex flex-col gap-y-2">
              <div className="border-2 border-border">
                <Link
                  href="https://github.com/yashrajvrma/mock-api"
                  target="_blank"
                >
                  <Image
                    src={postcnImg}
                    width={1200}
                    height={1200}
                    alt="postcn-img"
                    priority
                    quality={100}
                    className="w-full h-ful hover:scale-102 hover:border-2 hover:border-border transition duration-200 ease-in-out transform"
                  />
                </Link>
              </div>
              <div className="flex justify-between py-1">
                <div className="flex items-center font-semibold w-[80%]">
                  Postcn - Create Mock API's with simple text prompt
                </div>
                <Link
                  href="https://github.com/yashrajvrma/mock-api"
                  target="_blank"
                  className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default pt-0.5"
                >
                  <div>GITHUB</div>
                  <span>
                    <ArrowLineUpRightIcon size={15} />
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 text-justify">
                <p>
                  Built an AI Agent that lets you create Mock API collection
                  with just simple text prompt.
                </p>
                <p>
                  You can also test this API's in realtime and share it wth your
                  friends.
                </p>
              </div>
            </div>

            {/* chitpost project  */}
            <div className="flex flex-col gap-y-2">
              <div className="border-2 border-border">
                <Link
                  href="https://github.com/yashrajvrma/mock-api"
                  target="_blank"
                >
                  <Image
                    src={chitpost}
                    width={1200}
                    height={1200}
                    alt="chitpost-img"
                    priority
                    quality={100}
                    className="w-full h-ful hover:scale-102 hover:border-2 hover:border-border transition duration-200 ease-in-out transform"
                  />
                </Link>
              </div>
              <div className="flex justify-between py-1">
                <div className="flex items-center font-semibold w-[80%]">
                  ChitPost - A Minimalist blog app
                </div>
                <Link
                  href="https://github.com/yashrajvrma/ChitPost-blog"
                  target="_blank"
                  className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default pt-0.5"
                >
                  <div>GITHUB</div>
                  <span>
                    <ArrowLineUpRightIcon size={15} />
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 text-justify">
                <p>
                  Built a minimalist blogging platform using React.js,
                  TypeScript, Cloudflare Workers, and PostgreSQL for persistent
                  post storage, allowing users to create, publish, and engage
                  with content.
                </p>
                <p>
                  Integrated Novel AI editor for a seamless blog creation
                  experience and Cloudinary for efficient cloud-based image
                  storage.
                </p>
              </div>
            </div>

            {/* anuvad project  */}
            <div className="flex flex-col gap-y-2">
              <div className="border-2 border-border">
                <Link
                  href="https://github.com/yashrajvrma/anuvad-backend"
                  target="_blank"
                >
                  <Image
                    src={anuvad}
                    width={1200}
                    height={1200}
                    alt="anuvad-img"
                    priority
                    quality={100}
                    className="w-full h-ful hover:scale-102 hover:border-2 hover:border-border transition duration-200 ease-in-out transform"
                  />
                </Link>
              </div>
              <div className="flex justify-between py-1">
                <div className="flex items-center font-semibold w-[80%]">
                  Anuvad - Real time Language Translation
                </div>
                <Link
                  href="https://github.com/yashrajvrma/anuvad-backend"
                  target="_blank"
                  className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default pt-0.5"
                >
                  <div>GITHUB</div>
                  <span>
                    <ArrowLineUpRightIcon size={15} />
                  </span>
                </Link>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 text-justify">
                <p>
                  Developed a real-time language translation platform supporting
                  20+ languages using React.js, Tailwind CSS, Node.js, and
                  OpenAI's TTS model for seamless multilingual communication.
                </p>
              </div>
            </div>

            {/* bolt hackathon website  */}
            <div className="flex flex-col gap-y-2">
              <div className="border-2 border-border">
                <Link href="https://bolt-hacky.vercel.app/" target="_blank">
                  <Image
                    src={boltHackathon}
                    width={1200}
                    height={1200}
                    alt="boltHackathon-img"
                    priority
                    quality={100}
                    className="w-full h-ful hover:scale-102 hover:border-2 hover:border-border transition duration-200 ease-in-out transform"
                  />
                </Link>
              </div>
              <div className="flex justify-between py-1">
                <div className="flex items-center font-semibold w-[70%]">
                  Landing Page for{" "}
                  <span>
                    <Link
                      className="hover:underline font-semibold text-blue-400 hover:text-blue-500 hover:italic pl-2"
                      href="https://bolt.new/"
                      target="_blank"
                    >
                      Bolt
                    </Link>
                  </span>
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-end justify-end items-center gap-y-0.5 gap-x-3 w-[30%]">
                  <Link
                    href="https://bolt-hacky.vercel.app/"
                    target="_blank"
                    className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default"
                  >
                    <div>LIVE</div>
                    <span>
                      <ArrowLineUpRightIcon size={15} />
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/yashrajvrma/Bolt-hackathon"
                    target="_blank"
                    className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default"
                  >
                    <div>GITHUB</div>
                    <span>
                      <ArrowLineUpRightIcon size={15} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 text-justify">
                <p>
                  Build a landing page design for{" "}
                  <span>
                    <Link
                      className="hover:underline font-semibold text-blue-400 hover:text-blue-500 hover:italic"
                      href="https://bolt.new/"
                      target="_blank"
                    >
                      bolt.new
                    </Link>
                  </span>{" "}
                  Hackathon website in Next.js and React.
                </p>
                <p>
                  Used Shadcn components and Tailwind CSS for styling and framer
                  motion for animations.
                </p>
              </div>
            </div>

            {/* xcess luggage website  */}
            <div className="flex flex-col gap-y-2">
              <div className="border-2 border-border">
                <Link href="https://excess-one.vercel.app/" target="_blank">
                  <Image
                    src={excess}
                    width={1200}
                    height={1200}
                    alt="excess-img"
                    priority
                    quality={100}
                    className="w-full h-ful hover:scale-102 hover:border-2 hover:border-border transition duration-200 ease-in-out transform"
                  />
                </Link>
              </div>
              <div className="flex justify-between py-1">
                <div className="flex items-center font-semibold w-[70%]">
                  Frontend Design for Xcess Luggage{" "}
                </div>
                <div className="flex sm:flex-row flex-col sm:justify-end justify-end items-center gap-y-0.5 gap-x-3 w-[30%]">
                  <Link
                    href="https://excess-one.vercel.app/"
                    target="_blank"
                    className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default"
                  >
                    <div>LIVE</div>
                    <span>
                      <ArrowLineUpRightIcon size={15} />
                    </span>
                  </Link>
                  <Link
                    href="https://github.com/yashrajvrma/excess-frontend"
                    target="_blank"
                    className="flex justify-center gap-x-0.5 text-xs hover:scale-105 transition duration-200 ease-in-out transform cursor-default"
                  >
                    <div>GITHUB</div>
                    <span>
                      <ArrowLineUpRightIcon size={15} />
                    </span>
                  </Link>
                </div>
              </div>
              <div className="flex flex-col gap-y-2 text-secondary/85 text-justify">
                <p>
                  Built the entire frontend of Xcess Luggage in Vite React and
                  Typescript.
                </p>
                <p>
                  Used Shadcn, Tailwind CSS for styling and framer motion for
                  the subtle animation.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* footer section  */}
        <div className="flex flex-col justify-center my-20">
          <div className="flex justify-center items-center text-secondary/85">
            Made with{" "}
            <span className="px-1">
              <HeartIcon size={20} className="text-red-500" weight="fill" />
            </span>{" "}
            by Yashraj Verma
          </div>
        </div>
      </div>
    </div>
  );
}
