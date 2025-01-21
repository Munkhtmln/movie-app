import { Star } from "lucide-react";
import Image from "next/image";
import Header from "./_components/Header";
import Upcoming from "./_components/Upcoming";
import Popular from "./_components/Popular";
import Toprated from "./_components/Toprated";
import Footer from "./_components/Footer";

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
  console.log(data);
  return (
    <div className="flex flex-col relative">
      <Header />
      <Upcoming />
      <Popular />
      <Toprated />
      <Footer />
    </div>
  );
}
//  <div className="flex flex-wrap gap-[32px] ">
//         {data.results.map((movie: any, index: any) => {
//           return (
//             <div
//               key={index}
//               className="flex flex-col flex-wrap w-[229.73px] h-[439px] "
//             >
//               <img
//                 className="w-[229.73px] h-[340px] "
//                 src={"https://image.tmdb.org/t/p/w500/" + movie?.poster_path}
//                 alt=""
//               />

//               <p className="flex">
//                 <Star className="fill-yellow-400 stroke-inherit w-[18px] " />
//                 {movie.vote_average}/10
//               </p>
//               <p>{movie.original_title}</p>
//             </div>
//           );
//         })}
//       </div>
