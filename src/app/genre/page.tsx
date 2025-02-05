"use client";
import { Toggle } from "@/components/ui/toggle";
import Header from "../_components/Header";
import { Button } from "@/components/ui/button";
import { MyGenre, MyType } from "@/lib/type";
import React from "react";
import { useSearchParams } from "next/navigation";
import Genre from "../_components/GenreButton";

export default function GenrePage() {
  const [mov, setMov] = React.useState<any>([]);
  const [genre, setGenre] = React.useState<MyGenre[]>([]);
  const searchParams = useSearchParams();

  const genreId = searchParams.get("genreIds");
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
      setMov(res.results || []);
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
    <div>
      <div className="flex">
        <div className="">
          <Genre genres={genre} />;
        </div>
        <div>
          <div className=" ">
            {mov.map((movie: MyType, index: number) => {
              return (
                <div key={index} className="w-[165px] h-[277px]">
                  <img
                    className="w-[165px] h-[244px]"
                    src={
                      "https://image.tmdb.org/t/p/w500/" + movie?.poster_path
                    }
                    alt=""
                  />
                  <p>{movie.original_title}</p>
                  <p> {movie?.total_results}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
