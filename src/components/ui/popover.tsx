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
      <PopoverContent className="w-[577px] bg-primary-foreground ml-[440px] h-[270px]">
        <div className="border-b-2   w-[533px] py-4  h-[70px] gap-4 ml-[20px] ">
          <h1 className="">Genres</h1>
          <p>See lists of movies by genre</p>
        </div>
        <div className="w-[577px] h-[333px] flex flex-wrap ">
          <Genre />
        </div>
      </PopoverContent>
    </Popover>
  );
}
