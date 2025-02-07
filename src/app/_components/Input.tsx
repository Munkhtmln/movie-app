"use client";

import { Toggle } from "@/components/ui/toggle";
import { ToggleGroup } from "@/components/ui/toggle-group";
import Fetchdata from "@/components/util/fetchdata";
import { MyType } from "@/lib/type";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@radix-ui/react-popover";
import { MagnetIcon, Search, Star } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export function Inpit() {
  const { push } = useRouter();
  const handleclick = (select: string[]) => {
    push(`/searchresults/14?genreids=${select}`);
  };
  const [search, setSearch] = useState("");
  const [values, setvalues] = useState([]);
  const [open, setOpen] = useState(false);
  useEffect(() => {
    {
      const Addhandler = async () => {
        const response = await Fetchdata(
          `/search/movie?query=${search.toLowerCase()}&language=en-US`
        );
        setvalues(response.results || []);
      };
      Addhandler();
    }
    [];
  });

  return (
    <div className="">
      <Popover onOpenChange={setOpen} open={open}>
        <PopoverTrigger asChild>
          <div className="flex ">
            {/* <Search className=" ml-2 mt-1" /> */}
            <input
              className=" ml-3  border-2 rounded-md h-[36px] mt- w-[349px] "
              value={search}
              type="text"
              name=""
              id=""
              placeholder={"Search..."}
              onChange={(e) => {
                setSearch(e.target.value);
                setOpen(e.target.value.length > 0);
              }}
              onFocus={() => setOpen(true)}
            />
          </div>
        </PopoverTrigger>
        <PopoverContent
          align="start"
          className="w-80  "
          onOpenAutoFocus={(e) => e.preventDefault()}
        >
          {values.slice(0, 5).map((movie: MyType, index: number) => {
            return (
              <div
                key={index}
                className="flex w-[577px]  bg-primary-foreground"
              >
                <Link href={`/details/${movie.id}`} className="border-none">
                  <div className="bg-primary-foreground w-[537px] ml-4 mt-3 h-[116px] border-b-2 flex items-center justify-center   ">
                    <img
                      className="h-[100px] w-[67px]"
                      src={
                        `https://image.tmdb.org/t/p/w500/` + movie.poster_path
                      }
                      alt=""
                    />
                    <div className="w-[438px] h-[99px] ml-4">
                      <p key={index}>{movie?.original_title}</p>
                      <div className="flex">
                        <Star className="fill-yellow-400 text-yellow-400 w-[20px]" />{" "}
                        <p>{movie.vote_average}/10</p>{" "}
                      </div>
                      <p>{movie?.release_date}</p>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
          <Link href={`/searchresults?searchValue=${search}`}>
            <ToggleGroup type="multiple" onValueChange={handleclick}>
              <Toggle>
                <div className="flex w-[577px] bg-primary-foreground  h-[40px] pr-[10px] ">
                  <p className="ml-4 mt-2">See all results for </p>{" "}
                  <p className="mt-2">"{search}"</p>
                </div>
              </Toggle>
            </ToggleGroup>
          </Link>
        </PopoverContent>
      </Popover>
    </div>
  );
}
