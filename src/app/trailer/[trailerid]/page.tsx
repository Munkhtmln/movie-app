import { Button } from "@/components/ui/button";
import Fetchdata from "@/components/util/fetchdata";
import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";

export default async function Watchtrailer({
  params: { trailerid },
}: {
  params: { trailerid: string };
}) {
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0ZDVjNjBlOTdmYzQxNDVkNGIzZDlhMjk0NjVmZmEzZCIsIm5iZiI6MTczNzM0MjQxMi43MjUsInN1YiI6IjY3OGRiZGNjZTQ1NjYzOTlhMjZlMWEzZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Qig5T_JxICE_KQE6jl2ivbla8UZdUGdSJvm2xW-86NQ";
  const response = await fetch(
    `https://api.themoviedb.org/3/movie/${trailerid}?language=en-US`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    }
  );
  const trailer = `/movie/${trailerid}/videos?language-en-US`;
  const cometrailer = await Fetchdata(trailer);
  return (
    <Dialog>
      <DialogTrigger
        asChild
        className="absolute flex justify-center items-center top-[52vh] left-[40vh] "
      >
        <div className="flex w-[220px] gap-4">
          <Button variant="outline" className=" w-[12px] rounded-full"></Button>
        </div>
      </DialogTrigger>
      <DialogContent>
        <div>
          <iframe
            className="w-[512px] h-[280px]"
            src={`https://www.youtube.com/embed/${cometrailer?.results[0].key}`}
          ></iframe>
        </div>
      </DialogContent>
    </Dialog>
  );
}
