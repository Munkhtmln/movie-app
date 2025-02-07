import { Film, Moon } from "lucide-react";
import Link from "next/link";

import { Card } from "@/components/ui/card";
import { ModeToggle } from "./Themetoggler";

import { Inpit } from "./Input";
import { PopoverDemo } from "@/components/ui/popover";

export default function Header() {
  return (
    <Card className="flex sticky px-4 z-10  max-w-[14400px] m-auto  w-[100%] h-[59px] items-center justify-between border-none  top-0">
      <div className="w-[1280px] flex justify-between m-auto items-center ">
        <Link href={`/`}>
          <div className="flex gap-2 cursor-pointer">
            <Film className="text-[#4338CA] w-[20px]" />
            <p className="text-[#4338CA] font-extrabold italic">Movie Z</p>
          </div>
        </Link>
        <div className="flex">
          <PopoverDemo /> <Inpit />
        </div>
        <div>
          <ModeToggle />
        </div>
      </div>
    </Card>
  );
}
