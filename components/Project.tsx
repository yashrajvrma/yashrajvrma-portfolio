import Image from "next/image";
import Link from "next/link";
import breezeImg from "@/public/assets/images/breeze.jpg";
import postcnImg from "@/public/assets/images/postcn-img.png";
import boltHackathon from "@/public/assets/images/bolt-hackathon.png";
import excess from "@/public/assets/images/excess.png";
import chitpost from "@/public/assets/images/chitpost.png";
import anuvad from "@/public/assets/images/anuvad.png";
import { ArrowLineUpRightIcon } from "@phosphor-icons/react/dist/ssr";

export default function Project() {
  return (
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
              Built an AI-powered Document Editor using Next.js, TanStack Query,
              Shadcn UI and PostgreSQL, enabling real-time editing, intelligent
              formatting and efficient state handling using Zustand.
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
              Postcn - Create Mock API&apos;s with simple text prompt
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
              Built an AI Agent that lets you create Mock API collection with
              just simple text prompt.
            </p>
            <p>
              You can also test this API&apos;s in realtime and share it wth
              your friends.
            </p>
          </div>
        </div>

        {/* chitpost project  */}
        <div className="flex flex-col gap-y-2">
          <div className="border-2 border-border">
            <Link
              href="https://github.com/yashrajvrma/ChitPost-blog"
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
              Built a minimalist blogging platform using React.js, TypeScript,
              Cloudflare Workers, and PostgreSQL for persistent post storage,
              allowing users to create, publish, and engage with content.
            </p>
            <p>
              Integrated Novel AI editor for a seamless blog creation experience
              and Cloudinary for efficient cloud-based image storage.
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
              Developed a real-time language translation platform supporting 20+
              languages using React.js, Tailwind CSS, Node.js, and OpenAI&apos;s
              TTS model for seamless multilingual communication.
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
              Used Shadcn, Tailwind CSS for styling and framer motion for the
              subtle animation.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
