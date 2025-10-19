import Image from "next/image";

export default function Header() {
  return (
    <div className="flex py-4 gap-x-2">
      <div className="border-2 border-border h-[60px] w-[60px]">
        <Image
          src="https://pbs.twimg.com/profile_images/1974875613837324288/ckIPGnPE_400x400.jpg"
          alt="profile-img"
          width={60}
          height={60}
          className="w-full h-full"
        />
      </div>
      <div className="flex flex-col justify-center">
        <div className="text-lg font-semibold">
          YASHRAJ VERMA
          <span className="pl-2 text-sm text-secondary/85">(he/him)</span>
        </div>
        <div className="text-sm text-secondary/60">@yashrajvrma</div>
      </div>
    </div>
  );
}
