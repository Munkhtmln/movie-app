import { Input } from "@/components/ui/input";
import { PopoverDemo } from "@/components/ui/popover";
import { Film, Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex sticky  bg-white max-w-[1280px] m-auto  w-[100%] h-[59px]  items-center justify-between  top-0">
      <div className="flex ">
        <Film />
        <p>Moive Z</p>
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
