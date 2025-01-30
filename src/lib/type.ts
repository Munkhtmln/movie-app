import exp from "constants";

export type MyType = {
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  poster_path: string;
  release_date: number;
  title: string;
  video: false;
  vote_average: number;
  vote_count: number;
  name: string;
  department: string;
  genres: string;
  backdrop_path: string;
  key: number;
};
export type MyGenre = {
  name: string;
  id: number;
  adult: boolean;
};
