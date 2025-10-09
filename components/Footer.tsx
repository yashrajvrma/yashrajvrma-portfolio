import { HeartIcon } from "@phosphor-icons/react/dist/ssr";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center mt-32 mb-28">
      <div className="flex justify-center items-center text-secondary/85">
        Made with{" "}
        <span className="px-1">
          <HeartIcon size={20} className="text-red-500" weight="fill" />
        </span>{" "}
        by Yashraj Verma
      </div>
    </div>
  );
}
