"use client";

import Fetchdata from "@/components/util/fetchdata";
import { MyType } from "@/lib/type";
import { Star } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

export function Inpit() {
  const [search, setSearch] = useState("");
  const [values, setvalues] = useState([]);
  const Addhandler = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const search = e.target.value.toLowerCase();
    setSearch(search);
    if (search == "") {
      setvalues([]);
      return;
    }
    const response = await Fetchdata(
      `/search/movie?query=${e.target.value.toLowerCase()}&language=en-US`
    );
    console.log(response);
    setvalues(response.results || []);
  };

  return (
    <div>
      <input
        className=" ml-3 border-2 rounded-md h-[36px] w-[379px]"
        value={search}
        type="text"
        name=""
        id=""
        placeholder={"search"}
        onChange={Addhandler}
      />
      {values.slice(0, 5).map((movie: MyType, index: number) => {
        return (
          <div
            key={index}
            className="flex w-[577px] h-[745px] border-2 bg-white mt-2 right-80 absolute   "
          >
            <Link href={`/details/${movie.id}`}>
              <div className="bg-white w-[537px] ml-4 mt-3 border-b-2 h-[116px] flex items-center justify-center   ">
                <img
                  className="h-[100px] w-[67px]"
                  src={`https://image.tmdb.org/t/p/w500/` + movie.poster_path}
                  alt=""
                />
                <div className="w-[438px] h-[99px] ml-4">
                  <p key={index}>{movie?.original_title}</p>
                  <div className="flex">
                    <Star className="fill-yellow-400 text-yellow-400 w-[20px]" />{" "}
                    <p>{movie.vote_average}/10</p>{" "}
                  </div>
                  <p>{movie?.release_date}</p>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
}
