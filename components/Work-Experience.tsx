import Image from "next/image";
import linkedin from "../public/assets/images/linkedin.webp";

export default function WorkExperience() {
  return (
    <div className="flex flex-col justify-center mt-8 gap-y-2">
      <div className="text-xs text-secondary">WORK EXPERIENCE</div>
      <div className="flex justify-between gap-x-2.5 w-full">
        <div className="border-2 border-border h-[60px] w-[60px]">
          <Image
            src={linkedin}
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
              NOVEMBER 2024 - APRIL 2025
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
              Collaborated with a cross-functional team to design and implement
              features that significantly enhanced user experience and
              engagement.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
