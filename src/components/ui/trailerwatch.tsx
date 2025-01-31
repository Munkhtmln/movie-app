import { Button } from "./button";
import { Play } from "lucide-react";
import { Dialog, DialogContent, DialogTitle, DialogTrigger } from "./dialog";

export default async function Watchtrailer({ id }: { id: number }) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";

  const trailer = await fetch(
    `https://api.themoviedb.org/3/movie/${id}/videos?language-en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const cometrailer = await trailer.json();
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="flex justify-center items-center bottom-[30px] left-[20px] "
      >
        <div className="flex w-[150px] gap-2 bg-secondary text-black py-2 cursor-pointer rounded-xl">
          <Play />

          <p className=" font-semibold ">Watch trailer</p>
        </div>
      </DialogTrigger>
      <DialogContent>
        <DialogTitle></DialogTitle>
        <div>
          <iframe
            className="w-[512px] h-[280px]"
            src={`https://www.youtube.com/embed/${cometrailer?.results[0].key}`}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
    // <Dialog>
    //   <DialogTrigger asChild className=" ">
    //     <div className=" bg-black">
    //       <p>Watch trailer</p>
    //     </div>
    //   </DialogTrigger>

    //   <DialogContent>
    //     <DialogTitle></DialogTitle>
    //     <div>
    //       <iframe
    //         className="w-[512px] h-[280px]"
    //         src={`https://www.youtube.com/embed/${cometrailer?.results[0].key}`}
    //       ></iframe>
    //     </div>
    //   </DialogContent>
    // </Dialog>
  );
}
