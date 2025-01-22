import { Input } from "@/components/ui/input";
import { Film, Moon } from "lucide-react";

export default function Header() {
  return (
    <div className="flex bg-white max-w-[1280px] m-auto  w-[100%] items-center  h-[59px] justify-between sticky top-0">
      <div className="flex ">
        <Film />
        <p>Moive Z</p>
      </div>
      <div className="flex">
        <button>Genre</button> <Input className="w-[379px] h-[36px]" />
      </div>
      <div>
        <button>
          <Moon />
        </button>
      </div>
    </div>
  );
}
