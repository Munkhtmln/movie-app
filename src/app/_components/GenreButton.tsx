"use client";
import { Badge } from "@/components/ui/badge";
import { Toggle } from "@/components/ui/toggle";
import { MyGenre, MyType } from "@/lib/type";
import { ChevronRight } from "lucide-react";

import { useRouter } from "next/navigation";

export default function Genre({ data }: { data: MyGenre[] }) {
  const router = useRouter();
  const userderFunction = () => {
    router.push("/genre");
  };
  return (
    <div className="flex h-[20px] flex-wrap gap-4 mt-4 px-4  ">
      {data?.map((movie: MyGenre, index: number) => {
        return (
          <div key={index} className=" h-[20px]">
            <Toggle
              onPressedChange={userderFunction}
              variant="outline"
              className=" flex border-2 justify-center h-[24px]  items-center text-sm rounded-xl"
            >
              {movie.name} <ChevronRight className="w-[15px]" />
            </Toggle>
          </div>
        );
      })}
    </div>
  );
}
