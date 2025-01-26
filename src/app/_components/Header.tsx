import { Input } from "@/components/ui/input";
import { PopoverDemo } from "@/components/ui/popover";
import { Film, Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex sticky px-4 bg-white max-w-[1280px] m-auto  w-[100%] h-[59px]  items-center justify-between  top-0">
      <div className="flex gap-2 cursor-pointer">
        <Film className="text-[#4338CA] w-[20px]" />
        <p className="text-[#4338CA] font-extrabold italic">Movie Z</p>
      </div>
      <div className="flex">
        <PopoverDemo /> <Input className="w-[379px] h-[36px]" />
      </div>
      <div>
        <button>
          <Moon />
        </button>
      </div>
    </div>
  );
}
