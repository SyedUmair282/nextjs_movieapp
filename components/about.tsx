import Image from 'next/image';
import React from 'react'
import Icon from '../public/pngegg.png'
const AboutComp:React.FC = () => {
  return (
    <div className=" h-128 w-full p-5">
        <div className=" h-full flex flex-row w-full align-middle items-center">
          <div className="h-full w-full flex flex-col justify-center items-center">
            <h1 className="font-bold text-4xl font-mono text-center">We Have Contains Several Of New Movies That You Like</h1>
            <h3 className="font-bold text-2xl font-mono text-red-700">Cheers Up!</h3>
          </div>
          <div className="h-full w-full flex flex-col justify-center items-center">
            <Image src={Icon} width={350} alt="Picture of the author" />
          </div>
        </div>
    </div>
  )
}

export default AboutComp;