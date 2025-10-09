import Link from "next/link";
import {
  EnvelopeSimpleIcon,
  GithubLogoIcon,
  LinkedinLogoIcon,
  ReadCvLogoIcon,
  XLogoIcon,
} from "@phosphor-icons/react/dist/ssr";

export default function Links() {
  return (
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
  );
}
