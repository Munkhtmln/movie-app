import * as React from "react";

import {} from "@/components/ui/carouselcover";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "./card";
import { Star } from "lucide-react";
import { MyType } from "@/lib/type";
import Link from "next/link";
import { Button } from "./button";
import Trailer from "@/app/_components/Trailer";

export async function CarouselDemo() {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const cvr = await fetch(
    "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await cvr.json();
  return (
    <Carousel className="w-[100%]  m-auto ">
      <CarouselContent>
        {data.results?.slice(0, 10).map((movie: MyType, index: number) => (
          <CarouselItem key={index} className=" relative h-[600px]">
            <Link href={`/details/${movie.id}`}>
              <div
                className=" absolute inset-0 z-0 bg-cover bg-no-repeat "
                style={{
                  backgroundImage: movie?.poster_path
                    ? `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`
                    : `url('/path-to-placeholder.jpg')`,
                }}
              >
                <div className="absolute flex flex-col items-start text-white  gap-4 left-[140px] bottom-[165px] w-[404px] h-[304px]">
                  <p>Now Playing</p>
                  <p>{movie.original_title}</p>
                  <div className="flex">
                    <Star className="fill-yellow-400 text-yellow-400 h-4 mt-1" />
                    <p>{movie.vote_average}</p>
                    <p>/10</p>
                  </div>
                  <p>{movie.overview}</p>
                  <Trailer />
                </div>
              </div>
            </Link>
            <Card>
              <CardContent className="flex aspect-square items-center justify-center p-6">
                <span className="text-4xl font-semibold">{index + 1}</span>
              </CardContent>
            </Card>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="absolute left-[50px]" />
      <CarouselNext className="absolute right-[50px]" />
    </Carousel>
  );
}
