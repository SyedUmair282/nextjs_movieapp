import Image from 'next/image';
import Link from 'next/link';
import React,{useEffect,useState} from 'react';
import { SearchRes } from '../services/types';
//https://www.omdbapi.com/?i=tt4154664&apikey=c65a24f
interface Iprops{
  data:SearchRes[]
}
const AllMovies:React.FC<Iprops> = (props) => {
  const [data,setData]=useState<SearchRes[]>([]);
  useEffect(()=>{
    setData(props.data.concat(props.data))
  },[])

  return (
    <div className="container mx-auto p-5">
      {data.length>0 ? (<>
        <div className="font-bold font-mono text-2xl text-white mb-3 ml-1">
            <h1>All Movies</h1>
        </div>
        <div className="font-bold font-mono text-2xl  grid grid-cols-7 gap-2">
          {data && data.map((v,i)=>{
            return (<div className="border-0 rounded-lg" key={i}>
            <div className="hover:cursor-pointer">
              <Link href={`/allmovies/${v.imdbID}`}>
                <Image src={v.Poster} alt="Picture of the author" width={150} height={56} className="rounded-lg object-cover h-56 w-96  hover:border-2 hover:border-slate-950" />
              </Link>
            </div>
          </div>)
          })}
        </div> </>
      ):<h1>Loading...</h1>} 
    </div>
  )
}

export default AllMovies;