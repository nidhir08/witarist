import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Header from "./header";
import Navbar from "./navbar";
import { CalendarDays } from "lucide-react";


export default function Home() {
  return (
    <>
  <div className="flex flex-row h-[1024px] w-full">
  <div className=" w-[272px]">
    <Navbar />
    </div>
    <div className="flex flex-col w-full flex-grow">
    <Header />
    <Separator orientation="horizontal" className="w-full h-[2px] bg-[#E5E5E5] m-0"/>
    <div className="px-10 text-2xl font-bold text-[#171718] mt-4 flex flex-row  gap-140">
    Dashboard
    <div className="flex flex-row gap-2 ml-4">
    <CalendarDays />
    Oct 18 - Nov 18
    <Separator orientation="vertical" className="h-4 w-[2px] bg-[#E5E5E5] m-0"/>
    Monthly

    </div>
    </div>
 
  </div>

</div>


  

  

    
  
    


    </>
  );
}
