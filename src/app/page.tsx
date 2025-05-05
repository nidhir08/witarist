'use client'
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Header from "./header";
import Navbar from "./navbar";
import { ArrowDownRight, ArrowUpRight, CalendarDays, ChevronDown, ClipboardCopy, ImagePlay, NotepadText, Store } from "lucide-react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Button } from "@/components/ui/button";

ChartJS.register(ArcElement, Tooltip, Legend);



export default function Home() {
  const data = {

    datasets: [
      {
        data: [35, 45, 30,35,45],
        backgroundColor: ['#1E293B', '#1E293BCC', '#1E293B99','#1E293B33','#1E293B26'],
        borderWidth: 1,
      },
    ],
    //labels: ['Net 15', 'Net 30', 'Net 30','Net 30','Net 30'],
  };

  const data2 = {

    datasets: [
      {
        data: ['50.5','30.5','19'],
        backgroundColor: ['#1E293B', '#1E293BCC', '#1E293B33'],
        borderWidth: 1,
      },
    ],
    //labels: ['Net 15', 'Net 30', 'Net 30','Net 30','Net 30'],
  };

  
  return (
    <>
  <div className="flex flex-row h-[1024px] w-full bg-[#FCFBFA]">
  <div className=" w-[272px]">
    <Navbar />
    </div>
    <div className="flex flex-col w-full flex-grow">
    <Header />
    <Separator orientation="horizontal" className="w-full h-[2px] bg-[#E5E5E5] m-0"/>
    <div className="px-10 text-2xl font-bold text-[#171718] mt-4 flex flex-row  gap-140 ">
    Dashboard
    <div className="flex flex-row gap-2 ml-4 text-[16px] font-medium text-[#475569] border-2 border-[#E2E8F0]  rounded-[15px] w-[310px] bg-white">
      <div className="flex flex-row gap-2 px-3 pt-2 pb-2 items-center">
    <CalendarDays />
    Oct 18 - Nov 18
    </div>
    <Separator orientation="vertical" className="h-12 w-[2px] bg-[#E5E5E5] m-0"/>
    <div className="flex flex-row gap-2 px-2 pt-2 items-center pb-2">
    Monthly
    <ChevronDown />
    </div>
    </div>
    </div>


     {/* componets */}
  <div className="flex flex-row bg-[#FCFBFA] mt-6 px-5 gap-4">

    {/* component1 */}
    <div className="flex flex-col w-[270px] h-[150px] bg-white border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4">
  {/* Vendors Added Section (Text + Icon in same row) */}
  <div className="flex flex-row justify-between items-center gap-4">
    <div className="flex flex-col">
      Vendors Added
      <h1 className="text-black font-bold text-[20px]">578</h1>
    </div>
    
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3">
      <Store className="w-12 h-12" />
    </div>
  </div>

  {/* Separator */}
  <div>
    <Separator orientation="horizontal" className="h-[2px] w-full bg-[#E5E5E5]" />
  </div>
  
  <div className="flex flex-row justify-between items-center gap-4 mt-0 ">
  <p className="text-[14px] font-medium text-[#16A34A]">+6.26% from last month</p>
  <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#c9f6d9] border-[#E5E5E5] rounded-md ">
  <div className="flex items-center justify-center w-[25px] h-[25px] bg-[#16A34A] border-[#E5E5E5] rounded-md ">
  <ArrowUpRight className="text-white w-[15px] h-[15px]" />
  </div>
 </div>
    </div>
</div>

{/* component2 */}
<div className="flex flex-col w-[270px] h-[150px] bg-white border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4">
  {/* Vendors Added Section (Text + Icon in same row) */}
  <div className="flex flex-row justify-between items-center gap-4">
    <div className="flex flex-col">
    Bench Utilization Rate 
      <h1 className="text-black font-bold text-[20px]">34%</h1>
    </div>
    
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3">
      <ImagePlay className="w-12 h-12" /> 
    </div>
  </div>

  {/* Separator */}
  <div>
    <Separator orientation="horizontal" className="h-[2px] w-full bg-[#E5E5E5]" />
  </div>
  
  <div className="flex flex-row justify-between items-center gap-4 mt-0 ">
  <p className="text-[14px] font-medium text-[#EF4444]">-6.26% from last month</p>
  <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#f99c9c] border-[#E5E5E5] rounded-md ">
  <div className="flex items-center justify-center w-[25px] h-[25px] bg-[#EF4444] border-[#E5E5E5] rounded-md ">
  <ArrowDownRight className="text-white w-[15px] h-[15px]"  /> 
  </div>
 </div>
    </div>
</div>

{/* component3 */}
<div className="flex flex-col w-[270px] h-[150px] bg-white border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4">
  {/* Vendors Added Section (Text + Icon in same row) */}
  <div className="flex flex-row justify-between items-center gap-4">
    <div className="flex flex-col">
    Deployments
      <h1 className="text-black font-bold text-[20px]">115</h1>
    </div>
    
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3">
    <NotepadText className="w-12 h-12" /> 
    </div>
  </div>

  {/* Separator */}
  <div>
    <Separator orientation="horizontal" className="h-[2px] w-full bg-[#E5E5E5]" />
  </div>
  
  <div className="flex flex-row justify-between items-center gap-4 mt-0 ">
  <p className="text-[14px] font-medium text-[#16A34A]">+6.26% from last month</p>
  <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#c9f6d9] border-[#E5E5E5] rounded-md ">
  <div className="flex items-center justify-center w-[25px] h-[25px] bg-[#16A34A] border-[#E5E5E5] rounded-md ">
  <ArrowUpRight className="text-white w-[15px] h-[15px]" />
  </div>
 </div>
    </div>
</div>

{/* component4 */}
<div className="flex flex-col w-[270px] h-[150px] bg-white border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4">
  {/* Vendors Added Section (Text + Icon in same row) */}
  <div className="flex flex-row justify-between items-center gap-4">
    <div className="flex flex-col">
    Total Purchase
      <h1 className="text-black font-bold text-[20px]">57</h1>
    </div>
    
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3">
    <ClipboardCopy className="w-12 h-12" />
    </div>
  </div>

  {/* Separator */}
  <div>
    <Separator orientation="horizontal" className="h-[2px] w-full bg-[#E5E5E5]" />
  </div>
  
  <div className="flex flex-row justify-between items-center gap-4 mt-0 ">
  <p className="text-[14px] font-medium text-[#16A34A]">+6.26% from last month</p>
  <div className="flex items-center justify-center w-[35px] h-[35px] bg-[#c9f6d9] border-[#E5E5E5] rounded-md ">
  <div className="flex items-center justify-center w-[25px] h-[25px] bg-[#16A34A] border-[#E5E5E5] rounded-md ">
  <ArrowUpRight className="text-white w-[15px] h-[15px]" />
  </div>
 </div>
    </div>
</div>


  </div>

{/* payment terms */}
<div className="flex flex-row bg-[#FCFBFA] mt-6 px-5 gap-4 relative overflow-hidden">
  <div className="flex flex-col w-[335px] h-[336px] bg-white border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4">

    <div className="text-xl text-black">Payment Terms</div>

    {/* Doughnut and Labels */}
    <div className="flex flex-row items-center justify-center gap-4">
      {/* Doughnut chart */}
      <div >
        <Doughnut data={data} className="w-[180px] h-[130px]" />
      </div>

      {/* Manual Labels */}
      <div className="flex flex-col gap-2 text-sm text-[#475569]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#1E293B] rounded-full" />
          Net 15
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#47505F] rounded-full" />
          Net 30
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#6A727E] rounded-full" />
          Net 30
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#B7BBC1] rounded-full" />
          Net 30
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#DDDFE2] rounded-full" />
          Net 30
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-5 w-[335px] h-[70px] bg-[#E8E8E8] rounded-b-[15px] flex justify-end px-4 " >
  <Button className="transform-3d w-[160px] text-black bg-white text-lg font-normal mt-4 p-5">
  View full report
    </Button>
</div>
</div>

{/* location */}
  <div className="flex flex-col w-[774px] h-[336px] bg-white border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4">

    <div className="flex flex-row text-xl text-black items-center justify-between ">Location Distribution
    <div className="flex flex-row ml-60 text-[16px] font-medium text-[#475569] border-2 border-[#E2E8F0]  rounded-[15px] w-[275px] bg-white overflow-hidden">
      <div className="flex flex-row px-3 py-2 items-center bg-[#F5F5F5] rounded-l-[14px]">
      Headquarter
    </div>
    <Separator orientation="vertical" className="h-12 w-[2px] bg-[#E5E5E5] m-0"/>
    <div className="flex flex-row gap-2 px-3 py-2 items-center ">
    Service Location
    </div>
    </div>
    </div>
    
    {/* Doughnut and Labels */}
    <div className="flex flex-row  gap-4">
      <div className="flex flex-col px-2 text-sm text-black">
        <div className="font-bold ">
        Lucknow (78%)
        <p className="font-light">1,358 total ventures</p>
        </div>

        <div className="font-bold ">
        Delhi (78%)
        <p className="font-light">1,358 total ventures</p>
        </div>

        <div className="font-bold ">
        Mumbai (78%)
        <p className="font-light">1,358 total ventures</p>
        </div>

        <div className="font-bold ">
        Kolkata (78%)
        <p className="font-light">1,358 total ventures</p>
        </div>

      </div>
      {/* Doughnut chart */}
      <div >
        <Doughnut data={data2} className="w-[180px] h-[130px]" />
      </div>

      {/* Manual Labels */}
      <div className="flex flex-row gap-2 text-sm text-[#475569]">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#1E293B] rounded-[3px]" />
         Onsite
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#47505F] rounded-[3px]" />
          Hybrid
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 bg-[#1E293B33] rounded-[3px]" />
          Remote
        </div>
      </div>
    </div>

    <div className="absolute bottom-0 left-5 w-[335px] h-[70px] bg-[#E8E8E8] rounded-b-[15px] flex justify-end px-4 " >
  <Button className="transform-3d w-[160px] text-black bg-white text-lg font-normal mt-4 p-5">
  View full report
    </Button>
</div>
</div>
  </div>






  
  </div>

 


</div>


  

  

    
  
    


    </>
  );
}
