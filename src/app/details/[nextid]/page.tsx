import Header from "@/app/_components/Header";
import { MyType } from "@/lib/type";
import { Dot, Star } from "lucide-react";
import Link from "next/link";

export default async function Home({
  params: { nextid },
}: {
  params: { nextid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${nextid}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const similar = await fetch(
    `https://api.themoviedb.org/3/movie/${nextid}/similar?language=en-US&page=1`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const datastar = await fetch(
    ` https://api.themoviedb.org/3/movie/${nextid}/credits?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const data = await response.json();
  console.log(data);
  const datas = await datastar.json();
  const similarmovie = await similar.json();

  return (
    <div>
      <Header />
      <div className="max-w-[1080px] h-[524px] m-auto mt-10">
        <div className="flex max-w-[1080px] justify-between">
          <div>
            <h1 className="font-bold text-4xl flex flex-col gap-1">
              {data?.original_title}
            </h1>
            <p className="flex font-medium text-lg">
              {data.release_date} <Dot /> {data?.runtime}minut
              <Dot />
            </p>
          </div>
          <div>
            rating
            <div className="flex">
              <Star className="fill-yellow-400 text-yellow-400" />
              {data.vote_average}/10
            </div>
          </div>
        </div>

        <div className="flex mt-5">
          <img
            className="w-[290px] h-[428px] "
            src={"https://image.tmdb.org/t/p/w500/" + data?.poster_path}
            alt=""
          />
        </div>
      </div>
      <div className="">
        <div className="flex max-w-[1080px] m-auto gap-5">
          {data.genres?.map((genre: MyType, index: number) => {
            return (
              <div className=" mt-4 border-2 rounded-xl  " key={index}>
                <p> {genre.name}</p>
              </div>
            );
          })}
        </div>
        <p className="max-w-[1080px] mt-4 m-auto ">{data.overview}</p>
        <div className="flex gap-10 w-[1080px] mt-8 m-auto border-b-2">
          <h1>Director</h1>
          {datas.crew
            ?.filter((crew: MyType) => crew.department == "Directing")
            .slice(0, 1)
            .map((crew: MyType, id: number) => {
              return (
                <div>
                  <p>{crew.name}</p>
                </div>
              );
            })}
        </div>
        <div className="flex gap-10 w-[1080px] mt-8 m-auto border-b-2">
          <h1>Writers</h1>
          <p></p>
        </div>
        <div className="flex gap-10 w-[1080px] mt-8 m-auto border-b-2">
          <h1>Stars</h1>
          <div className="flex absolute left-52 gap-10">
            {datas.cast?.slice(0, 5).map((actor: MyType, index: number) => {
              return <p key={index}>{actor.name}</p>;
            })}
          </div>
        </div>
      </div>
      <div className="max-w-[1080px] m-auto mt-8 ">
        <div className="flex max-w-[1080px] m-auto justify-between">
          <p className="text-[#09090B] text-2xl font-semibold">
            More like this
          </p>
          <Link href={`/similar/${nextid}`}>See more...</Link>
        </div>
        <div className="flex max-w-[1080px] gap-8 mt-8 mb-8">
          {similarmovie.results
            .slice(0, 5)
            .map((like: MyType, index: number) => {
              return (
                <Link href={`/details/${like.id}`}>
                  <div className="flex flex-col flex-wrap w-[190px] h-[372px] gap-spacing/1 bg-gray-100 rounded-lg">
                    <img
                      key={index}
                      className="w-[190px] h-[281.38px]"
                      src={
                        "https://image.tmdb.org/t/p/w500/" + like?.poster_path
                      }
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
    </div>
  );
}
