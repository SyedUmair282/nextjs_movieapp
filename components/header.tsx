import React,{FC} from 'react'
import Icon from '../public/icons8-movie-48.png'
import Image from 'next/image'
import Link from 'next/link'
interface Iprops{}

const Header:FC<Iprops> = () => {
  return (
    <div className="p-3 flex flex-row justify-between bg-gradient-to-r from-slate-950 to-gray-700 items-center">
        <div className="flex flex-row ml-5 items-center">
            <Image src={Icon} width={20} height={20} alt="Picture of the author" />
            <h3 className="font-bold text-xl text-white ml-1 font-mono">MOVIE DB</h3>
        </div>
        <ul className="flex flex-row mr-5 text-white font-semibold cursor-pointer">
            <li className="mr-5 hover:text-black font-mono">
              <Link href="/">HOME</Link>
            </li>
            <li className="mr-5 hover:text-black font-mono">
            <Link href="/allmovies">ALL MOVIES</Link>
            </li>
            <li className="hover:text-black font-mono">
            <Link href="/about">ABOUT</Link>
            </li>
        </ul>
    </div>
  )
}

export default Header;