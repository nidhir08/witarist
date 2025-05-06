'use client'
import { Input } from "@/components/ui/input";
import { Separator } from "@radix-ui/react-separator";
import Image from "next/image";
import Header from "./header";
import Navbar from "./navbar";
import { ArrowDown, ArrowDownRight, ArrowUp, ArrowUpRight, CalendarDays, ChevronDown, ChevronUp, ClipboardCopy, CloudDownload, Edit, FlagTriangleRight, ImagePlay, ListFilter, NotepadText, OctagonAlert, Plus, Scroll, Search, Store, ThumbsDown, ThumbsUp, Trash } from "lucide-react";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Button } from "@/components/ui/button";
import { ScrollArea, ScrollAreaCorner } from "@radix-ui/react-scroll-area";

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
  <div className="flex flex-row min-h-screen h-auto w-full bg-[#FCFBFA]">
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

    <div className="flex flex-row p-0 m-0">
    <div className="flex-shrink-0">
    <Image src="/images/scrollbar.png" alt="image" width={30} height={200} className="h-[280px] w-[16px]" />
  </div>
    <div className="flex flex-col text-sm text-black gap-4 pl-4">
  <div className="flex items-start gap-2">
    <div className="w-3 h-3 mt-1 bg-[#1E293B] rounded-full" />
    <div>
      <p className="font-bold">Lucknow (78%)</p>
      <p className="font-light mt-1">1,358 total ventures</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="w-3 h-3 mt-1 bg-[#1E293B33] rounded-full" />
    <div>
      <p className="font-bold">Delhi (78%)</p>
      <p className="font-light mt-1">1,358 total ventures</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="w-3 h-3 mt-1 bg-[#1E293B33] rounded-full" />
    <div>
      <p className="font-bold">Mumbai (78%)</p>
      <p className="font-light mt-1">1,358 total ventures</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="w-3 h-3 mt-1 bg-[#1E293B33] rounded-full" />
    <div>
      <p className="font-bold">Kolkata (78%)</p>
      <p className="font-light mt-1">1,358 total ventures</p>
    </div>
  </div>

  <div className="flex items-start gap-2">
    <div className="w-3 h-3 mt-1 bg-[#1E293B33] rounded-full" />
    <div>
      <p className="font-bold">Gujrat (78%)</p>
      <p className="font-light mt-1">1,358 total ventures</p>
    </div>
  </div>

</div>
      {/* Doughnut chart */}
      <div className="pl-30">
        <Doughnut data={data2} className="w-[180px] h-[130px]" />
      </div>

      {/* Manual Labels */}
      <div className="flex flex-row gap-2 text-sm text-[#475569] mt-35">
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

</div>

 </div>


{/* vendors activity */}
<div className="flex flex-row bg-[#FCFBFA] mt-6 px-5 gap-4 relative overflow-hidden ">
  <div className="flex flex-col w-[555px] h-[257px] bg-[neutral/200] border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pl-3 pr-3 gap-2">
    <h1 className="text-black font-bold pt-4 ">Vendors Activity (Till Now)</h1>
    <p className="font-light">Numbers of currently engaged vendors versus inactive ones.</p>
    <div className="flex flex-row items-center mt-2 gap-6">

      {/* box1 */}
    <div className="flex flex-col w-[225px] h-[137px] bg-[#FFFFFF] rounded-[15px] text-[#475569] font-medium pl-3 pr-3 ">
    <div className="flex flex-row justify-between items-center mt-1 ">
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3 mt-3">
    <FlagTriangleRight className="w-12 h-12" />
    </div>
    <div className="flex items-center justify-center w-[62px] h-[25px] bg-[#DCFCE7] rounded-[30px] gap-1 mt-3 px-1">
  <ArrowUp className="w-3 h-3 text-[#16A34A]" />
  <p className="text-[#16A34A] text-sm font-bold">0.3%</p>
</div>
    </div>
    <div className="leading-tight mt-2">
    <h1 className="font-bold text-black text-2xl">126</h1>
    <p className="font-light text-medium">Active Vendors</p>
  </div>
      </div>
     
     {/* box2 */}
     <div className="flex flex-col w-[225px] h-[137px] bg-[#FFFFFF] rounded-[15px] text-[#475569] font-medium pl-3 pr-3 ">
    <div className="flex flex-row justify-between items-center mt-1 ">
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3 mt-3">
    <OctagonAlert className="w-12 h-12" />
    </div>
    </div>
    <div className="leading-tight mt-2">
    <h1 className="font-bold text-black text-2xl">45</h1>
    <p className="font-light text-medium">Inactive Vendors</p>
  </div>
      </div>

</div>
</div>

<div className="flex flex-col w-[555px] h-[257px] bg-[neutral/200] border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pl-3 pr-3 gap-2">
    <h1 className="text-black font-bold pt-4 ">NDA’s Activity (Till Now)</h1>
    <p className="font-light">Numbers of currently signed and unsigned NDA’s</p>
    <div className="flex flex-row items-center mt-2 gap-6">

      {/* box1 */}
    <div className="flex flex-col w-[225px] h-[137px] bg-[#FFFFFF] rounded-[15px] text-[#475569] font-medium pl-3 pr-3 ">
    <div className="flex flex-row justify-between items-center mt-1 ">
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3 mt-3">
    <ThumbsUp  className="w-12 h-12" />
    </div>
    <div className="flex items-center justify-center w-[62px] h-[25px] bg-[#DCFCE7] rounded-[30px] gap-1 mt-3 px-1">
  <ArrowUp className="w-3 h-3 text-[#16A34A]" />
  <p className="text-[#16A34A] text-sm font-bold">0.3%</p>
</div>
    </div>
    <div className="leading-tight mt-2">
    <h1 className="font-bold text-black text-2xl">103</h1>
    <p className="font-light text-medium">Signed NDA’s</p>
  </div>
      </div>
     
     {/* box2 */}
     <div className="flex flex-col w-[225px] h-[137px] bg-[#FFFFFF] rounded-[15px] text-[#475569] font-medium pl-3 pr-3 ">
    <div className="flex flex-row justify-between items-center mt-1 ">
    <div className="flex items-center justify-center w-[45px] h-[45px] bg-[#F5F5F5] border-[#E5E5E5] rounded-md p-3 mt-3">
    <ThumbsDown  className="w-12 h-12" />
    </div>
    
    <div className="flex items-center justify-center w-[62px] h-[25px] bg-[#FF5B5B1A] rounded-[30px] gap-1 mt-3 px-1">
    <ArrowDown  className="w-3 h-3 text-[#EF4444]" />
  <p className="text-[#EF4444] text-sm font-bold">0.3%</p>
</div>
</div>
    <div className="leading-tight mt-2">
    <h1 className="font-bold text-black text-2xl">27</h1>
    <p className="font-light text-medium">Unsigned NDA’s</p>
  </div>
      </div>

</div>
</div>

</div>

{/* company */}
<div className="flex flex-col w-[1127px] h-[800px] bg-[#FCFBFA] border-2 border-[#E5E5E5] rounded-[15px] text-[#475569] font-medium pt-4 pl-3 pr-3 gap-4 ml-5 mt-6 mr-4">
  <div className="flex flex-row gap-100">
    <div className="flex flex-col">
      <div className="flex flex-row gap-2">
    <h1 className="text-black font-bold">Top Qualified Partner Companies </h1>
    <div className="px-3 py-1 bg-[#F9F5FF] text-[#1E293B] text-sm font-semibold rounded-full">
    240 Vendors
  </div>
    </div>
    <p className="text-[#64748B] font-light">Keep track of vendor and their technologies</p>
    </div>
 
    <div className="flex flex-row gap-10">

    <div className="flex items-center gap-3 px-2 py-1 bg-[#FFFFFF] text-[#475569] border-[#D0D5DD] border-1 text-sm font-semibold rounded-[10px] w-[98px] h-[42px]">
    <CloudDownload  className="w-20 h-20 text-[#475569]" />
    Import
  </div>

  <div className="flex items-center gap-2 px-3 py-1 bg-[#1E293B] text-[#FFFFFF] border-[#D0D5DD] border-1 text-sm font-semibold rounded-[10px] w-[140px] h-[42px]">
  <Plus className="w-6 h-6 text-[#FFFFFF]" />
    Add Vector
  </div>
  </div>
  </div>

  <div className="flex flex-row gap-50 ">
    <div className="flex flex-row w-[292px] h-[39px] bg-white border border-[#E5E5E5] rounded-[8px] overflow-hidden">
  <div className="flex items-center justify-center w-1/3 bg-[#F9FAFB] text-[#1E293B] font-medium text-sm">
    Deployments
  </div>
  <Separator orientation="vertical" className="h-full w-[1px] bg-[#E5E5E5]" />
  <div className="flex items-center justify-center w-1/3 text-[#475569] font-medium text-sm">
    Direct
  </div>
  <Separator orientation="vertical" className="h-full w-[1px] bg-[#E5E5E5]" />
  <div className="flex items-center justify-center w-1/3 text-[#475569] font-medium text-sm">
    Alignments
  </div>
</div>

<div className="flex flex-row gap-45">
<div className='relative w-[100px] px-10'>
      <Input className='pl-10 pr-10 py-2 w-100  bg-[#F5F5F5]' placeholder="Search..."/>
      {/* <Image src="/images/search.png" alt="image" width={35} height={33} className="absolute right-3 top-1/2 pb-0  transform -translate-y-1/2"/> */}
      <Search size={20} className='absolute right-7 top-1/2 pb-1 pt-1 transform -translate-y-1/2' />
    </div>\
    <div className="flex items-center gap-3 px-2  bg-[#FFFFFF] text-[#475569] border-[#D0D5DD] border-1 text-sm font-semibold rounded-[10px] w-[98px] h-[39px]">
    <ListFilter  className="w-20 h-20 text-[#475569]" />
    Filters
  </div>
</div>
 </div>

      {/* Column Headers */}
      <div className="grid grid-cols-5 py-4 border-b border-[#E2E8F0] text-[#718096] text-sm font-medium items-center">
  <div className="flex items-center">Partner IT Companies</div>
  <div className="flex items-center">Specialized Industries</div>
  <div className="flex items-center">Specialized Technologies</div>
  <div className="flex items-center justify-center">Current Deployments</div>
  <div className="flex items-center justify-center">Score</div>
</div>

 {/* Row1? */}     
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/logo1.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
    Artificial Intelligence
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
    <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
    <span className="px-2.5 py-1 bg-[#FFFBEB] text-[#744210] text-xs font-medium rounded-full">JavaScript</span>
    <span className="px-2.5 py-1 bg-[#FFF5F5] text-[#9B2C2C] text-xs font-medium rounded-full">Ruby</span>
    <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+4</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '85%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">60</span>
    <span className="text-[#48BB78] text-xs font-medium flex items-center">
      <ChevronUp size={14} />
      5%
    </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>




        {/* Row 2 - Cloud Computing */}
        
              
        
        {/* Row 3 - Software Development */}
        
        {/* Row 4 - Graphic Design */}
       
        
        {/* Row 5 - Networking */}
        
        
        {/* Row 6 - Technical Support */}
        
        {/* Row 7 - Cybersecurity */}
        


      </div>
{/* Row2? */}
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/Circooles.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
  Cloud Computing
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
  <span className="px-2.5 py-1 bg-[#EBF8FF] text-[#2C5282] text-xs font-medium rounded-full">Java</span>
            <span className="px-2.5 py-1 bg-[#EBF4FF] text-[#5A67D8] text-xs font-medium rounded-full">Visual Basic</span>
            <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
            <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+2</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">72</span>
    <span className="text-[#E53E3E] text-xs font-medium flex items-center">
              <ChevronDown size={14} />
              4%
            </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>

 </div>      
{/* Row3? */}
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/Circooles.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
  Cloud Computing
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
  <span className="px-2.5 py-1 bg-[#EBF8FF] text-[#2C5282] text-xs font-medium rounded-full">Java</span>
            <span className="px-2.5 py-1 bg-[#EBF4FF] text-[#5A67D8] text-xs font-medium rounded-full">Visual Basic</span>
            <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
            <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+2</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">72</span>
    <span className="text-[#E53E3E] text-xs font-medium flex items-center">
              <ChevronDown size={14} />
              4%
            </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>

 </div>
{/* Row4? */}
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/Circooles.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
  Cloud Computing
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
  <span className="px-2.5 py-1 bg-[#EBF8FF] text-[#2C5282] text-xs font-medium rounded-full">Java</span>
            <span className="px-2.5 py-1 bg-[#EBF4FF] text-[#5A67D8] text-xs font-medium rounded-full">Visual Basic</span>
            <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
            <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+2</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">72</span>
    <span className="text-[#E53E3E] text-xs font-medium flex items-center">
              <ChevronDown size={14} />
              4%
            </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>

 </div>
{/* Row5? */}
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/Circooles.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
  Cloud Computing
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
  <span className="px-2.5 py-1 bg-[#EBF8FF] text-[#2C5282] text-xs font-medium rounded-full">Java</span>
            <span className="px-2.5 py-1 bg-[#EBF4FF] text-[#5A67D8] text-xs font-medium rounded-full">Visual Basic</span>
            <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
            <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+2</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">72</span>
    <span className="text-[#E53E3E] text-xs font-medium flex items-center">
              <ChevronDown size={14} />
              4%
            </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>

 </div>
{/* Row6? */}
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/Circooles.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
  Cloud Computing
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
  <span className="px-2.5 py-1 bg-[#EBF8FF] text-[#2C5282] text-xs font-medium rounded-full">Java</span>
            <span className="px-2.5 py-1 bg-[#EBF4FF] text-[#5A67D8] text-xs font-medium rounded-full">Visual Basic</span>
            <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
            <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+2</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">72</span>
    <span className="text-[#E53E3E] text-xs font-medium flex items-center">
              <ChevronDown size={14} />
              4%
            </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>

 </div>
{/* Row7? */}
<div className="grid grid-cols-5 gap-x-2 px-1 py-4 border-b border-[#E2E8F0] items-center hover:bg-[#F8FAFC] text-sm text-[#4A5568]">

            
  {/* Col 1: Partner IT Companies */}
  <div className="flex items-center gap-4 px-10">
    <input type="checkbox" className="w-4 h-4 accent-[#3366FF] rounded" />
    <Image
      src="/images/Circooles.jpg"
      alt="image"
      width={24}
      height={24}
      className="w-6 h-6 rounded-full"
    />
  </div>

  {/* Col 2: Specialized Industries */}
  <div className="whitespace-nowrap overflow-hidden text-ellipsis font-medium">
  Cloud Computing
  </div>

  {/* Col 3: Tags */}
  <div className="flex gap-1 whitespace-nowrap ml-[-15px]">
  <span className="px-2.5 py-1 bg-[#EBF8FF] text-[#2C5282] text-xs font-medium rounded-full">Java</span>
            <span className="px-2.5 py-1 bg-[#EBF4FF] text-[#5A67D8] text-xs font-medium rounded-full">Visual Basic</span>
            <span className="px-2.5 py-1 bg-[#E6FFED] text-[#2F855A] text-xs font-medium rounded-full">Python</span>
            <span className="px-2.5 py-1 bg-[#F7FAFC] text-[#4A5568] text-xs font-medium rounded-full">+2</span>
  </div>

  {/* Col 4: Progress + Score */}
  <div className="flex items-center justify-end gap-3 w-full ml-10 mr-10">
  <div className="w-[140px] bg-[#E2E8F0] rounded-full h-2">
    <div className="bg-[#3182CE] h-2 rounded-full" style={{ width: '90%' }}></div>
  </div>
  <div className="flex items-center gap-1">
    <span className="font-semibold">72</span>
    <span className="text-[#E53E3E] text-xs font-medium flex items-center">
              <ChevronDown size={14} />
              4%
            </span>
  </div>
</div>


  {/* Col 5: Actions */}
  <div className="flex justify-end items-center mr-10">
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Trash size={16} />
    </button>
    <button className="p-2 border border-[#E2E8F0] rounded">
      <Edit size={16} />
    </button>
  </div>

 </div>

  </div>
  </div>

 


















</div>


  

  

    
  
    


    </>
  );
}
