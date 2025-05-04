import React from 'react'
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
const Header = () => {
  return (
    <div>
          <div className="flex flex-row py-0 ">
     <div className='relative flex flex-row items-center px-0 '>
      <Image src="/images/logo.png" alt="image" width={100} height={100} className='ml-8 mr-10 my-0'/>
      <div className='ml-8 mr-2 my-0 border-2 rounded-[5px] p-1'>
      <Image src="/images/arrow-left-to-line.png" alt="image" width={25} height={20} />
      </div>

    </div>
    <Separator orientation="vertical" className="h-20 w-[2px] bg-[#E5E5E5] mx-4"  />
    <div className='relative w-[300px] py-3 '>
      <Input className='pl-10 pr-10 py-2  my-3 w-200  bg-[#F5F5F5]' placeholder="Search..."/>
      <Image src="/images/search.png" alt="image" width={35} height={33} className="absolute right-70 top-1/2 pb-0 pl-5 transform -translate-y-1/2"/>
    </div>
    </div>
    </div>
  )
}

export default Header