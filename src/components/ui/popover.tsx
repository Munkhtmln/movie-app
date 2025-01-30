import Genre from "@/app/_components/GenreButton";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";

export function PopoverDemo() {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Genre</Button>
      </PopoverTrigger>
      <PopoverContent className="w-[577px] bg-white ml-[440px] h-[333px]">
        <div className="border-b-2 text-black w-[213px] h-[60px] gap-2 ml-[20px] ">
          <h1 className="mt-20px">Genres</h1>
          <p>See lists of movies by genre</p>
        </div>
        <div>
          <Genre />
        </div>
      </PopoverContent>
    </Popover>
  );
}
