import { Badge } from "@/components/ui/badge";
import { MyGenre, MyType } from "@/lib/type";
import { ChevronRight } from "lucide-react";

export default async function Genre() {
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
  console.log(data);
  return (
    <div className="flex h-[20px] flex-wrap gap-4 mt-4 px-4  ">
      {data.genres?.map((movie: MyGenre, index: number) => {
        return (
          <div key={index} className=" h-[20px]">
            <Badge
              variant="outline"
              className=" flex border-2 justify-center h-[24px]  items-center text-sm rounded-xl"
            >
              {movie.name} <ChevronRight className="w-[15px]" />
            </Badge>
          </div>
        );
      })}
    </div>
  );
}
