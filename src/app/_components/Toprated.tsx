import { Star } from "lucide-react";
import Link from "next/link";

export default async function Toprated() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
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
      <div className="flex justify-between max-w-[1280px] h-[59px] m-auto items-center my-4">
        <p className=" font-semibold text-2xl  ">Top Rated</p>{" "}
        <Link href="/toprated">See more...</Link>
      </div>
      <div className="flex flex-wrap gap-[32px] max-w-[1280px] m-auto">
        {data.results.slice(0, 10).map((movie: any, index: any) => {
          return (
            <Link href={`/details/${movie.id}`}>
              <div
                key={index}
                className="flex flex-col flex-wrap w-[229.73px] h-[439px] gap-spacing/1 bg-secondary rounded-lg"
              >
                <img
                  className="w-[229.73px] h-[340px] rounded-t-lg"
                  src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
                  alt=""
                />

                <p className="flex mt-4 ml-2">
                  <Star className="fill-yellow-400 stroke-inherit w-[18px] " />
                  {movie.vote_average}/10
                </p>
                <p className="ml-2">{movie.original_title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
