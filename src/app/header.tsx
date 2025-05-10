import React from 'react'
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
const Header = () => {
  return (
    <div className='flex flex-row sm:flex-row sm:items-center sm:justify-between gap-100  bg-white'>
    <div className='relative  w-full sm:w-[300px] py-4 px-4'>
      <Input className='pl-10 pr-20 py-2  my-3 w-150  bg-[#F5F5F5]' placeholder="Search..."/>
      {/* <Image src="/images/search.png" alt="image" width={35} height={33} className="absolute right-3 top-1/2 pb-0  transform -translate-y-1/2"/> */}
      <Button className="absolute w-10 h-6 mt-2 mb-2 left-140 top-[42%] transform -translate-y-1/2 bg-[#FFFFFF] text-black font-light px-2 py-2 text-sm rounded">⌘+K</Button>
      <Search size={20} className='absolute left-8 top-1/2 pb-1 pt-1 transform -translate-y-1/2' />
    </div>
    <div className='flex flex-row items-center gap-1'>
    <Bell className='border-[#E5E5E5] border-1 p-4 w-14 h-14 rounded-[14px] '  />
    <div className=" p-4">
            <div className="flex items-center justify-between border-[#E5E5E5] border-1 rounded-md p-2">
              <div className="flex items-center">
                <div className="relative w-10 h-10 mr-3 rounded-full overflow-hidden">
                  <Image
                    src="/images/random.jpeg"
                    alt="William Cameron"
                    
                    fill
                    className=" object-cover"
                  />
                </div>
                <div>
                  <div className="text-black text-sm font-light">William Cameron</div>
                </div>
              </div>
              <button className="text-gray-400 hover:text-white">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="12" cy="6" r="2" fill="currentColor" />
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <circle cx="12" cy="18" r="2" fill="currentColor" />
                </svg>
              </button>
            </div>
          </div>
        </div>
    </div>

  )
}

export default Header