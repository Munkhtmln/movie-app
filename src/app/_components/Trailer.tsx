import { Button } from "@/components/ui/button";

import { Dialog, DialogContent, DialogTrigger } from "@radix-ui/react-dialog";
import { Play } from "lucide-react";
import Link from "next/link";
import Watchtrailer from "../trailer/[trailerid]/page";

export default function Trailer() {
  return (
    <Link href={`../trailer/[trailerid]/page/`}>
      <div className="bg-white text-black font-semibold flex w-[145px] h-[40px] p-2 gap-2 rounded-lg items-center justify-center">
        <Play className="w-[20px]" /> Watch Trailer
      </div>
    </Link>
  );
}
