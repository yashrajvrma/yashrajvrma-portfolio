import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center h-screen bg-foreground text-primary-foreground">
      <div className="flex flex-col max-w-md w-full h-full border border-x mt-20 px-2">
        {/* header and profile photo */}
        <div className="flex justify-between">
          <div className="flex flex-col justify-center">
            <div className="text-lg">YASHRAJ VERMA</div>
            <div className="text-sm text-secondary">@yashrajvrma</div>
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
        {/* link section  */}

        <div></div>
        {/* bio section */}
        <div></div>
        {/* skill section  */}
        <div></div>

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
