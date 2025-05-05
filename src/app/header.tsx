import React from 'react'
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { Search } from 'lucide-react';
const Header = () => {
  return (
    <div>
    <div className='relative w-[300px] py-4 px-10 bg-white'>
      <Input className='pl-10 pr-10 py-2  my-3 w-200  bg-[#F5F5F5]' placeholder="Search..."/>
      {/* <Image src="/images/search.png" alt="image" width={35} height={33} className="absolute right-3 top-1/2 pb-0  transform -translate-y-1/2"/> */}
      <Search size={20} className='absolute right-58 top-1/2 pb-1 pt-1 transform -translate-y-1/2' />
    </div>
    </div>

  )
}

export default Header