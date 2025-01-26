import Header from "@/app/_components/Header";
import { MyType } from "@/lib/type";
import { Dot, Star } from "lucide-react";

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
        <div className="flex max-w-[1080px] m-auto">
          {data.genres?.map((genre: MyType, index: number) => {
            return (
              <div className=" mt-4 border-2 rounded-xl " key={index}>
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
          <p className="flex absolute left-52 gap-10">
            {datas.cast?.slice(0, 5).map((actor: MyType, index: number) => {
              return <p key={index}>{actor.name}</p>;
            })}
          </p>
        </div>
      </div>
      <div>
        <div>
          <p>More like this</p>
        </div>
        <div>
          <img
            src={"https://image.tmdb.org/t/p/w500/" + similarmovie?.poster_path}
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
