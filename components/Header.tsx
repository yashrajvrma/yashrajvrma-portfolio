import { HeartIcon } from "@phosphor-icons/react/dist/ssr";
import { ChartNoAxesColumn } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

export default function Header() {
  return (
    <div className="flex py-4 gap-x-2">
      <div className="border-2 border-border h-[90px] w-[90px]">
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
        {/* like and views component component */}
        <div className="flex gap-x-4 pt-2 text-sm">
          <div className="flex justify-center items-center gap-x-2">
            <ButtonGroup>
              <Button variant="outline">Button</Button>
              <ButtonGroupSeparator />
              <Button size="icon" variant="outline">
                <HeartIcon />
              </Button>
            </ButtonGroup>
          </div>
          <div className="flex justify-center items-center gap-x-2">
            <ChartNoAxesColumn className="w-4 h-4" />
            200
          </div>
          <div className="text-primary-foreground">ii</div>
        </div>
      </div>
    </div>
  );
}
