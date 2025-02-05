"use client";
import { Toggle } from "@/components/ui/toggle";
import { MyGenre, MyType } from "@/lib/type";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { ChevronRight } from "lucide-react";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Genre({
  genres,
}: {
  genres: { id: string; name: string }[];
}) {
  const { push } = useRouter();
  const handleclick = (select: string[]) => {
    push(`/genre/14?genreids=${select}`);
  };
  // setSelectedGenre()router.push(`/genre14?genreids=${select}`);

  return (
    <ToggleGroup type="multiple" onValueChange={handleclick}>
      <div className="flex h-[20px] flex-wrap gap-4 mt-4 px-4  ">
        {genres?.map((genre) => {
          return (
            <div className=" h-[20px]">
              <Toggle
                key={genre.id}
                variant="outline"
                value={genre.id.toString()}
                className=" flex border-2 justify-center h-[24px]  items-center text-sm rounded-xl"
              >
                {genre.name} <ChevronRight className="w-[15px]" />
              </Toggle>
            </div>
          );
        })}
      </div>
    </ToggleGroup>
  );
}
