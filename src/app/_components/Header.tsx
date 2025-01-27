import { PopoverDemo } from "@/components/ui/popover";
import { Film, Moon } from "lucide-react";
import Link from "next/link";
import { Inpit } from "./Input";

export default function Header() {
  return (
    <div className="flex sticky px-4 z-10 bg-white max-w-[14400px] m-auto  w-[100%] h-[59px]  items-center justify-between  top-0">
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
        <button>
          <Moon />
        </button>
      </div>
    </div>
  );
}
