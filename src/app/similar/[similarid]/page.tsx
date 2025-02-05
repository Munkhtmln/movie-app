import Header from "@/app/_components/Header";
import { MyType } from "@/lib/type";
import { Star } from "lucide-react";
import Link from "next/link";

export default async function Home({
  params: { similarid },
}: {
  params: { similarid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${similarid}/similar?language=en-US&page=1`,
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
    <div className="max-w-[1280px] m-auto ">
      <p className="text-3xl font-semibold mt-10">More like this</p>
      <div className="flex max-w-[1280px] flex-wrap m-auto mt-8 gap-8">
        {data.results.map((like: MyType, index: number) => {
          return (
            <Link href={`/details/${like.id}`}>
              <div className="flex flex-col flex-wrap w-[229.73px] h-[439px] gap-spacing/1 bg-secondary rounded-lg">
                <img
                  key={index}
                  className="w-[230px] h-[340px]"
                  src={"https://image.tmdb.org/t/p/w500/" + like?.poster_path}
                  alt=""
                />
                <p className="flex mt-4 ml-2">
                  <Star className="fill-yellow-400 stroke-inherit w-[18px] " />
                  {like.vote_average}/10
                </p>
                <p className="ml-2">{like.original_title}</p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
