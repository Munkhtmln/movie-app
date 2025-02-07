"use client";
import { Toggle } from "@/components/ui/toggle";
import { MyGenre, MyType } from "@/lib/type";
import { ToggleGroup, ToggleGroupItem } from "@radix-ui/react-toggle-group";
import { ChevronRight } from "lucide-react";

import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function Genre({ genres }: { genres: MyGenre[] }) {
  const { push } = useRouter();
  const searchParams = useSearchParams();
  const selecteds = searchParams.get("genreids");
  const handleclick = (select: string[]) => {
    push(`/genre/14?genreids=${select}`);
  };
  // setSelectedGenre()router.push(`/genre14?genreids=${select}`);

  return (
    <ToggleGroup
      value={selecteds?.split(",")}
      type="multiple"
      onValueChange={handleclick}
    >
      <div className="flex h-[20px] flex-wrap gap-4 mt-4 px-4  ">
        {genres?.map((genre) => {
          return (
            <div className=" h-[20px]">
              <ToggleGroupItem
                key={genre.id}
                aria-label="Toggle bold"
                value={genre.id.toString()}
                className=" flex border-2 justify-center h-[24px]  items-center text-sm rounded-xl"
              >
                {genre.name} <ChevronRight className="w-[15px]" />
              </ToggleGroupItem>
            </div>
          );
        })}
      </div>
    </ToggleGroup>
  );
}
