"use client";
import { Toggle } from "@/components/ui/toggle";
import { MyGenre, MyType } from "@/lib/type";
import { ToggleGroup } from "@radix-ui/react-toggle-group";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function GenreCat({ data }: { data: [] }) {
  // setSelectedGenre()router.push(`/genre14?genreids=${select}`);

  return (
    <ToggleGroup type="multiple">
      <div className="flex h-[20px] flex-wrap gap-4 mt-4 px-4">
        {data?.map((genres: MyGenre, index: number) => {
          return (
            <Link href={`/genre`}>
              <div className=" h-[20px]">
                <Toggle
                  key={genres.id}
                  variant="outline"
                  value={genres.id.toString()}
                  className=" flex border-2 justify-center h-[24px]  items-center text-sm rounded-xl"
                >
                  {genres.name} <ChevronRight className="w-[15px]" />
                </Toggle>
              </div>{" "}
            </Link>
          );
        })}
      </div>
    </ToggleGroup>
  );
}
