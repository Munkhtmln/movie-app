import { Toggle } from "@/components/ui/toggle";
import Header from "../_components/Header";
import { Button } from "@/components/ui/button";
import { MyGenre, MyType } from "@/lib/type";

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

  return (
    <div>
      <Header />
      <div className="">
        {data.genres?.map((genre: MyType, index: number) => {
          return <Toggle>{genre.name} </Toggle>;
        })}
      </div>
    </div>
  );
}
