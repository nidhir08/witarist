// import { Input } from '@/components/ui/input'
// import Image from 'next/image'
// import React from 'react'

// const Navbar = () => {
//   return (
//     <div className='h-[1024px] w-[272px] bg-[#171718]'>
//        <div className='flex flex-row items-center py-4 gap-4'>
//         <div className='pr-20 '>
//         <Image src="/images/logo.png" alt="image" width={40} height={40} className='ml-8 mr-10 my-0'/>
//         </div>
//        <div className='flex flex-row gap-1'>
//        <Image src="/images/Icon.png" alt="image" width={60} height={60} />
//        <Image src="/images/drawer.png" alt="image" width={60} height={60} />
//        </div>
        
//        </div>
//        <div className='relative w-[240px] py-3 px-8 '>
//       <Input className='pl-10 pr-10 py-2  my-3 w-50  bg-[#F5F5F5]' placeholder="Search..."/>
//       <Image src="/images/search.png" alt="image" width={35} height={33} className="absolute right-70 top-1/2 pb-0 pl-5 transform -translate-y-1/2"/>
//     </div>
//     </div>
//   )
// }

// export default Navbar
"use client"

import { Bell, Menu, Plus, Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <div className="flex flex-col bg-[#121212] text-gray-400 h-[1024px] w-[272px] ">
      {/* Top header with logo and icons */}
      <div className="flex items-center justify-between pl-0 pt-4 pr-2">
        <div>
              <Image src="/images/logo.png" alt="image" width={40} height={40} className='ml-8 mr-10 my-0'/>
        </div>
        <div className="flex items-center  gap-4">
          <button className="text-gray-400 hover:text-white">
            <Bell size={20} />
          </button>
          <button className="text-gray-400 hover:text-white" >
            <Menu size={20} />
          </button>
        </div>
      </div>

      {/* Search bar */}
      <div className="pl-6 pr-4 mt-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500 " size={16} />
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#000000] border border-[#333] rounded-[10px] px-10 py-3 text-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500"
          />
        </div>
      </div>

      {/* Navigation items */}
      <nav className="mt-4 flex-1 overflow-y-auto pl-3 pr-1">
        <ul className="space-y-1 px-3">
          <li>
            <Link href="#" className="flex items-center justify-between px-3 py-3 mt-3 rounded-md bg-[#2A2A2A] border-[0.2px] border-gray-300 text-white focus:outline-none focus:ring-1 focus:ring-gray-500">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="3" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="3" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                  <rect x="14" y="14" width="7" height="7" rx="1" stroke="currentColor" strokeWidth="2" />
                </svg>
                Dashboard
              </div>
            </Link>
          </li>

          <NavItem icon="resource" label="Resource" hasPlus />
          <NavItem icon="vendor" label="Vendor" hasPlus />
          <NavItem icon="client" label="Client" hasPlus />
          <NavItem icon="requirements" label="Requirements" hasPlus />

          <li>
            <Link href="#" className="flex items-center px-3 py-3 rounded-md hover:bg-[#2A2A2A] text-gray-400">
              <div className="flex items-center">
                <svg className="w-5 h-5 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect x="3" y="6" width="18" height="15" rx="2" stroke="currentColor" strokeWidth="2" />
                  <path d="M3 10H21" stroke="currentColor" strokeWidth="2" />
                  <path d="M8 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  <path d="M16 3V7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
                Interview Schedule
              </div>
            </Link>
          </li>

          <NavItem icon="deployment" label="Deployment" hasPlus />
        </ul>
      </nav>

      {/* User profile at bottom */}
      <div className="mt-auto p-4">
        <div className="flex items-center justify-between bg-[#1E1E1E] rounded-md p-2">
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
              <div className="text-white text-sm font-medium">William Cameron</div>
              <div className="text-gray-500 text-xs">Superadmin</div>
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
  )
}

// Helper component for nav items
type NavItemProps = {
    icon: "resource" | "vendor" | "client" | "requirements" | "deployment";
    label: string;
    hasPlus?: boolean;
  };
  
  function NavItem({ icon, label, hasPlus = false }: NavItemProps) {
    return (
      <li>
        <Link
          href="#"
          className="flex items-center justify-between px-3 py-3 rounded-md hover:bg-[#2A2A2A] text-gray-400"
        >
          <div className="flex items-center">
            <NavIcon type={icon} className="w-5 h-5 mr-3 " />
            {label}
          </div>
          {hasPlus && <Plus size={18} />}
        </Link>
      </li>
    );
  }
  

// Helper component for nav icons
type NavIconProps = {
    type: "resource" | "vendor" | "client" | "requirements" | "deployment";
    className?: string;
  };
  
  function NavIcon({ type, className }: NavIconProps) {
    switch (type) {
      case "resource":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="2" />
            <path
              d="M5 18C5 15.7909 6.79086 14 9 14H15C17.2091 14 19 15.7909 19 18V20H5V18Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        );
      case "vendor":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="3" y="5" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M7 9H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 13H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M7 17H12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "client":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 7L12 3L4 7V17L12 21L20 17V7Z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round" />
            <path d="M12 12L12 21" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L4 7" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L20 7" stroke="currentColor" strokeWidth="2" />
          </svg>
        );
      case "requirements":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2" />
            <path d="M9 9L15 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 12L15 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            <path d="M9 15L13 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
        );
      case "deployment":
        return (
          <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 3L20 7.5V16.5L12 21L4 16.5V7.5L12 3Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinejoin="round"
            />
            <path d="M12 12L12 21" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L4 7.5" stroke="currentColor" strokeWidth="2" />
            <path d="M12 12L20 7.5" stroke="currentColor" strokeWidth="2" />
          </svg>

        );
      default:
        return null;
    }
  }
  export default Navbar