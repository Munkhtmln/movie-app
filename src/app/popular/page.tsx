import { MyType } from "@/lib/type";
import exp from "constants";
import { Divide } from "lucide-react";
import Header from "../_components/Header";
import Link from "next/link";

export default async function Home() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
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
      <h2 className="px-6 py-10 text-3xl font-semibold">Popular</h2>
      <div className="flex flex-wrap gap-8 m-auto max-w-[1280px]">
        {data.results.map((movie: MyType, index: number) => {
          return (
            <Link href={`/nextpage/${movie.id}`}>
              {" "}
              <div className="">
                <img
                  className=" w-[229.73px] h-[340px]"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />
              </div>
              <div></div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
