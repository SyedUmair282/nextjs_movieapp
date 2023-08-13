import React,{useState,useEffect} from "react";
import { DetailRes } from "../services/types";
type Iprops={
  data:DetailRes
}
const MovieDetailComp:React.FC<Iprops> = (props) => {

  const [data,setData]=useState<DetailRes|null>(null)
  useEffect(() => {
    setData(props.data)
  }, [])
  
  return (
    <>
    {data?(
      <div className="container mx-auto w-5/6 h-128 flex flex-row items-center">
      <div className="w-2/6 h-5/6">
        <div className="w-full h-full">
          <img
            src={data.Poster}
            alt="Picture of the author"
            className="w-full h-full rounded-lg"
          />
        </div>
      </div>
      <div className="w-3/5 p-5">
        <div className="flex flex-row items-center justify-between">
          <div className="w-3/4">
            <p className="text-xl font-bold text-white">
              {data.Title}
            </p>
            <p className="text-xs text-gray-400">
              {data.Year} | {data.Released} | {data.Runtime}
            </p>
          </div>
          <div className="w-1/4">
            <p className="text-lg font-normal text-white">
              {data.imdbRating} <span className="text-yellow-400">&#9733;</span>  
            </p>
          </div>
        </div>
        <br />
        <div className="w-3/4">
          <p className="text-white text-xs font-medium">
            {data.Plot}
          </p>
        </div>
        <br />
        <div className="w-3/4 flex flex-row">
          <div>
            <p className="text-gray-400 text-xs font-medium">Actors</p>
            <p className="text-gray-400 text-xs font-medium">Writers</p>
            <p className="text-gray-400 text-xs font-medium">Genre</p>
          </div>
          <div className="ml-5">
            <p className="text-white text-xs font-medium">{data.Actors}</p>
            <p className="text-white text-xs font-medium">{data.Writer}</p>
            <p className="text-white text-xs font-medium">{data.Genre}</p>
          </div>
        </div>
        <br />
        <div className="w-3/4 flex flex-row">
          <div>
            <p className="text-gray-400 text-xs font-medium">Country</p>
            <p className="text-gray-400 text-xs font-medium">Language</p>
            <p className="text-gray-400 text-xs font-medium">Directors</p>
            <p className="text-gray-400 text-xs font-medium">Awards</p>
          </div>
          <div className="ml-5">
            <p className="text-white text-xs font-medium">{data.Country}</p>
            <p className="text-white text-xs font-medium">{data.Language}</p>
            <p className="text-white text-xs font-medium">{data.Director}</p>
            <p className="text-white text-xs font-medium">{data.Awards}</p>
          </div>
        </div>
        <br />
        <p className="text-white text-sm font-medium">Rating info</p>
        <div className="flex flex-row items-center justify-between w-4/5">
          <div>
            <p className="text-gray-400 text-xs font-medium">Metascore</p>
            <p className="text-white text-sm font-medium">{data.Metascore}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium">Rating</p>
            <p className="text-white text-sm font-medium">{data.imdbRating}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium">Votes</p>
            <p className="text-white text-sm font-medium">{data.imdbVotes}</p>
          </div>
          <div>
            <p className="text-gray-400 text-xs font-medium">Box office</p>
            <p className="text-white text-sm font-medium">{data.BoxOffice?data.BoxOffice:"N/A"}</p>
          </div>
        </div>
      </div>
    </div>
    ):null}
  </>
    
  );
};

export default MovieDetailComp;
