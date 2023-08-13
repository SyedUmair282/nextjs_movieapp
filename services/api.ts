import { MovieApiRes, DetailRes } from "./types";
export const getMovies = async ():Promise<MovieApiRes> => {
  try {
    const res:Response = await fetch("https://www.omdbapi.com/?s=movies&apikey=c65a24f");
    const repo: MovieApiRes = await res.json();
    return repo;
  } catch (error) {
    console.log("Error is==>",error)
  }
};

export const getMovieDetail = async (id:string|string[]):Promise<DetailRes> => {
  try {
    const res:Response = await fetch(`https://www.omdbapi.com/?i=${id}&apikey=c65a24f`);
    const repo: DetailRes = await res.json();
    return repo;
  } catch (error) {
    console.log("Error is==>",error)
  }
};
