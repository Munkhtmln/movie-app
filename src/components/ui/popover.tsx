import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { ChevronDown } from "lucide-react";
import React from "react";
import Genre from "@/app/_components/GenreButton";
import GenreCat from "@/app/_components/Genrecategory";

export async function PopoverDemo() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    "https://api.themoviedb.org/3/genre/movie/list?language=en",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );

  const data = await response.json();

  return (
    <div className="flex">
      <div className="">
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="outline">
              <ChevronDown />
              Genre
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-[577px] bg-primary-foreground ml-[440px] h-[270px]">
            <div className="border-b-2   w-[533px] py-4  h-[70px] gap-4 ml-[20px] ">
              <h1 className="">Genres</h1>
              <p>See lists of movies by genre</p>
            </div>
            <div className="w-[577px] h-[333px] flex flex-wrap ">
              <GenreCat data={data?.genres} />
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div></div>
    </div>
  );
}
