import Header from "./_components/Header";
import Upcoming from "./_components/Upcoming";
import Popular from "./_components/Popular";
import Toprated from "./_components/Toprated";
import { CarouselDemo } from "@/components/ui/carouselcover";

export default async function Home() {
  return (
    <div className="flex flex-col relative">
      <CarouselDemo />
      <Upcoming />
      <Popular />
      <Toprated />
    </div>
  );
}
