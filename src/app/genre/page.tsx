"use client";
import { Toggle } from "@/components/ui/toggle";
import Header from "../_components/Header";
import { Button } from "@/components/ui/button";
import { MyGenre, MyType } from "@/lib/type";
import React from "react";
import { useSearchParams } from "next/navigation";
import Genre from "../_components/GenreButton";
import { Star } from "lucide-react";

export default function GenrePage() {
  const [mov, setMov] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<MyGenre[]>([]);
  const searchParams = useSearchParams();
  const [results, setResults] = React.useState();

  const genreId = searchParams.get("genreids");
  const page = searchParams.get("page") || 1;
  React.useEffect(() => {
    const responce = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
      const response = await fetch(
        `https://api.themoviedb.org/3/discover/movie?language=en&with_genres=${genreId}&page=${page}`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );

      const res = await response.json();
      setResults(res.total_results);
      setMov(res.results || []);
      console.log(res);
    };
    responce();
  }, [genreId, page]);

  React.useEffect(() => {
    const data = async () => {
      const token =
        "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
      const responseData = await fetch(
        "https://api.themoviedb.org/3/genre/movie/list?language=en",
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-Type": "application/json",
          },
        }
      );
      const res = await responseData.json();
      setGenre(res.genres || []);
    };
    data();
  }, []);

  // export default async function Genre() {
  //   const token =
  //     "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  //   const response = await fetch(
  //     "https://api.themoviedb.org/3/genre/movie/list?language=en",
  //     {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //         "Content-Type": "application/json",
  //       },
  //     }
  //   );
  //   const data = await response.json();

  return (
    <div className="w-[1280px] m-auto ">
      <p className="font-semibold text-3xl mt-20 pb-7">Search filter</p>
      <div className="flex ">
        <div className="w-[487px] h-[352px] sticky  top-14 ">
          <p className="font-semibold text-3xl ">Genres</p>
          <p className="">See lists of movies by genre</p>
          <div>
            <Genre genres={genre} />
          </div>
        </div>
        <div>
          <p className="font-semibold text-xl pl-4 border-l-2  ">
            {results} titles
          </p>
          <div className="flex w-[906px]  flex-wrap gap-12  border-l-2 pt-10 ">
            {mov.map((movie: MyType, index: number) => {
              return (
                <div
                  key={index}
                  className="w-[165px] h-[331px] bg-secondary overflow-hidden rounded-md ml-4 "
                >
                  <img
                    className="w-[165px] h-[244px] rounded-md"
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                    }
                    alt=""
                  />

                  <p className="flex mt-4 ml-2">
                    <Star className="fill-yellow-400 stroke-inherit w-[18px] " />
                    {movie.vote_average}/10
                  </p>
                  <p className="ml-2">{movie.original_title}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
