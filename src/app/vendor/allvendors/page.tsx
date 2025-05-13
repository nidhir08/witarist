'use client'
import Header from '@/app/header'
import Navbar from '@/app/navbar'
import { ArrowDownRight, ArrowDownToLine, ArrowUpRight, AtSign, ChartNoAxesColumn, ChevronDown, ChevronRight, Dot, ImagePlay, MapPin, MessageCircleMore, MoveDiagonal, Paperclip, Pencil, Phone, Store, TrendingUp, Undo2, UserRound, UserRoundCog, WalletCards } from 'lucide-react'
import React from 'react'
import Image from "next/image" 
import { Separator } from '@radix-ui/react-separator'
import { Button } from '@/components/ui/button'
import { Doughnut } from 'react-chartjs-2'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js'

ChartJS.register(ArcElement, Tooltip, Legend);
const AllVendor = () => {
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
            backgroundColor: ['#2066A8', '#8CC5E399', '#3594CC33'],
            borderWidth: 1,
          },
        ],
        //labels: ['Net 15', 'Net 30', 'Net 30','Net 30','Net 30'],
      };
  return (
    <div className='flex flex-col min-h-screen '>

    <div className='flex flex-row'>
        <Navbar />
        <div className='flex flex-col flex-grow'>
        <div className='flex flex-row text-xs md:text-sm text-gray-400 items-center px-4 md:px-10 pt-4 overflow-x-auto whitespace-nowrap'>
        <Undo2 className='w-3 h-3 md:w-4 md:h-4 text-gray-500 mx-2'  />
        <span className=''>Dashboard </span>
        <ChevronRight className='w-3 h-3 md:w-4 md:h-4 mx-1'/>
        <span>Vendor</span>
        <ChevronRight className='w-3 h-3 md:w-4 md:h-4 mx-1' />
        <span className='text-[#84848C]'>All Vendors</span>
        </div>

        <div className='flex flex-col md:flex-row px-4 md:px-10 pt-4 pb-6 gap-4'>
  <div className='flex flex-col flex-grow'>
    <div className='text-xl md:text-2xl font-medium'>Optical Solutions</div>
    <div className=' flex flex-row flex-wrap gap-2 mt-2'>
      <div className='text-purple-700 border border-purple-200 rounded-2xl px-3 py-1 text-xs md:text-sm'>
        OnSite
      </div>
      <div className='text-red-700 border border-red-200 rounded-2xl px-3 py-1 text-xs md:text-sm'>
        Hybrid
      </div>
      <div className='text-pink-700 border border-pink-200 rounded-2xl px-3 py-1 text-xs md:text-sm'>
       Remote
      </div>
     
      <div className="flex flex-row sm:flex-row flex-wrap gap-2 sm:items-center mt-1 text-xs md:text-sm font-light text-gray-600">
      <Dot className="hidden sm:block text-gray-400" />
              <div className="flex items-center">
                <MapPin className="w-4 h-4 text-gray-500 mr-1" />
                <span>New Delhi</span>
              </div>
              
              <Dot className="hidden sm:block text-gray-400" />
              
              <div className="flex items-center">
                <WalletCards className="w-4 h-4 text-gray-500 mr-1" />
                <span>30 Days</span>
              </div>
              
              <Dot className="hidden sm:block text-gray-400" />
              
              <div className="flex items-center">
                <UserRound className="w-4 h-4 text-gray-500 mr-1" />
                <span>194</span>
              </div>
            </div>
    </div>
   

  </div>

{/* buttons */}
   <div className='flex flex-row items-center space-x-2 mt-3 md:mt-0'>
    <div className='relative w-10 h-10 md:w-10 md:h-10 rounded-full overflow-hidden'>
      <Image
        src='/images/random.jpeg'
        alt='William Cameron'
        fill
        className='object-cover'
      />
    </div>
    <Separator orientation='vertical' className='h-8 hidden sm:block  md:h-10 bg-[#E3E3E4] w-[1px]' />
    <button className="p-2 md:p-3 sm:p-1 rounded border border-gray-200">
              <Pencil className="w-4 h-4 text-gray-600" />
            </button>

    <button className='bg-[#1A68F3] text-white py-1 md:px-2 md:py-2 sm:px-1 sm:py-2 rounded text-sm md:text-base whitespace-nowrap'>
      Add Resource
    </button>
  </div>

</div>
<div className='flex flex-row sm:flex-row gap-4 sm:items-center mt-3 md:text-sm font-medium text-gray-600 md:px-10 sm:px-6 m-3 sm:m-2'>
<div className="flex items-center">
<ChartNoAxesColumn className="w-4 h-4 text-[#39393D] mr-1" />
                <span className='text-[#171718]'>Overview </span>
              </div>
              <div className="flex items-center">
<UserRound className="w-4 h-4 text-[#74767F] mr-1" />
                <span className='text-[#84848C]'>Resources </span>
              </div>
              <div className="flex items-center">
<TrendingUp className="w-4 h-4 text-[#74767F] mr-1" />
                <span className='text-[#84848C]'>Activity </span>
              </div>
              <div className="ml-auto mt-2 sm:mt-0 flex items-center">
            <div className="flex items-center border border-[#E2E8F0] bg-[#FFFFFF] text-[#475569] rounded-lg px-3 py-1 text-sm whitespace-nowrap cursor-pointer">
              <span>This Week</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>
          </div>
              
</div>
{/* resource */}
<div className="px-4 md:px-10 py-4 ">
          <div className="relative h-4 flex items-center">
            {/* Gray background separator */}
            <div className="absolute h-[1px] bg-[#E3E3E4] w-70"></div>
            {/* Blue overlapping separator */}
            <div className="absolute h-[2px] bg-[#4886F5] w-23"></div>
          </div>
</div>

{/* left block  */}
<div className='flex flex-row m-2 sm:m-2'>
<div className="md:w-[70%] w-full  ">
<div className="flex flex-col  md:items-stretch gap-4 w-full ">
<div className="flex flex-row md:flex-row md:items-stretch gap-4 w-full md:px-4 mt-4 items-stretch ">

            <div className=" w-full ">

              <div className=" bg-[#D9D9D9]  rounded-lg sm:rounded-xl md:rounded-2xl p-2 ">
                <div className="flex flex-row sm:flex-row justify-between gap-2 overflow-x-auto "> 
                    {/* change this to flex-col */}
                  {/* Card 1 */}
                  <div className="flex flex-1 flex-col  bg-white border border-[#E5E5E5] rounded-[15px] shadow-sm p-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg text-[#475569] font-medium">Vendors Added</p>
                        <h2 className="text-black font-bold text-xl mt-1">578</h2>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className="h-[1px] bg-[#E5E5E5] w-full my-3"></div>
                    
                    {/* Stats Footer */}
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-[#16A34A] font-light whitespace-nowrap truncate mr-1">+6.26% from last month</p>
                      <div className="flex-shrink-0 flex items-center justify-center w-[25px] h-[25px] bg-[#c9f6d9] rounded-md">
                        <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#16A34A] rounded-md">
                          <ArrowUpRight className="text-white w-[15px] h-[15px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 2 */}
                  <div className="flex flex-1 flex-col  bg-white border border-[#E5E5E5] rounded-[15px] shadow-sm p-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg text-[#475569] font-medium">Total Alignments</p>
                        <h2 className="text-black font-bold text-xl mt-1">34</h2>
                      </div>
                    
                    </div>
                    
                    {/* Separator */}
                    <div className="h-[1px] bg-[#E5E5E5] w-full my-3"></div>
                    
                    {/* Stats Footer */}
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-[#EF4444] font-light whitespace-nowrap truncate mr-1">-6.26% from last month</p>
                      <div className="flex-shrink-0 flex items-center justify-center w-[25px] h-[25px] bg-[#f99c9c] rounded-md">
                        <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#EF4444] rounded-md">
                          <ArrowDownRight className="text-white w-[15px] h-[15px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 3 */}
                  <div className="flex flex-1 flex-col  bg-white border border-[#E5E5E5] rounded-[15px] shadow-sm p-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg text-[#475569] font-medium">Deployment</p>
                        <h2 className="text-black font-bold text-xl mt-1">1</h2>
                      </div>
    
                    </div>
                    
                    {/* Separator */}
                    <div className="h-[1px] bg-[#E5E5E5] w-full my-3"></div>
                    
                    {/* Stats Footer */}
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-[#16A34A] font-light whitespace-nowrap truncate mr-1">+6.26% from last month</p>
                      <div className="flex-shrink-0 flex items-center justify-center w-[25px] h-[25px] bg-[#c9f6d9] rounded-md">
                        <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#16A34A] rounded-md">
                          <ArrowUpRight className="text-white w-[15px] h-[15px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Card 4 */}
                  <div className="flex flex-1 flex-col  bg-white border border-[#E5E5E5] rounded-[15px] shadow-sm p-3">
                    {/* Card Header */}
                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-lg text-[#475569] font-medium">Price Range </p>
                        <h2 className="text-black font-bold text-xl mt-1">Min - Max </h2>
                      </div>
                    </div>
                    
                    {/* Separator */}
                    <div className="h-[1px] bg-[#E5E5E5] w-full my-3"></div>
                    
                    {/* Stats Footer */}
                    <div className="flex justify-between items-center">
                      <p className="text-[12px] text-[#EF4444] font-light whitespace-nowrap truncate mr-1">-6.26% from last month</p>
                      <div className="flex-shrink-0 flex items-center justify-center w-[25px] h-[25px] bg-[#f99c9c] rounded-md">
                        <div className="flex items-center justify-center w-[20px] h-[20px] bg-[#EF4444] rounded-md">
                          <ArrowDownRight className="text-white w-[15px] h-[15px]" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
   </div>
   </div>

{/* resources allocation */}
  {/* Resource Allocation Section */}
<div className="flex flex-row md:flex-row md:items-stretch gap-2 w-full md:px-4 mt-4 items-stretch">
    
<div className="  w-full">
  {/* Outer gray container */}
  <div className="bg-[#D9D9D9]  rounded-lg sm:rounded-xl md:rounded-2xl p-2 ">
    {/* Inner content: two boxes side-by-side or stacked */}
    <div className="flex flex-col md:flex-row gap-2 w-full">
      
      {/* Location Distribution Box */}
      <div className="bg-white border border-[#E5E5E5] rounded-[15px] flex flex-col text-[#475569] font-medium p-4 w-full md:w-2/3 ">
        {/* Header with toggle */}
        <div className="flex flex-row sm:flex-row sm:items-center justify-between gap-3 mb-4">
          <h2 className="text-medium text-black text-nowrap">Resources Location Distribution</h2>
          <div className="flex flex-row text-sm font-medium text-[#475569] border-2 border-[#E2E8F0] rounded-[15px] w-full sm:w-[275px] bg-white overflow-hidden whitespace-nowrap">
            <div className="px-2 py-2 bg-[#F5F5F5] rounded-l-[14px]">Headquarter</div>
            <Separator orientation="vertical" className="h-auto w-[2px] bg-[#E5E5E5]" />
            <div className=" px-2 py-2 whitespace-nowrap">Service Location</div>
          </div>
        </div>

        {/* Doughnut + Labels */}
        <div className="flex flex-row lg:flex-row items-start gap-4 ">
          {/* Scrollbar Image */}
          <div className="flex-shrink-0 h-full flex items-center">
            <Image src="/images/scrollbar.png" alt="image" width={16} height={280} className="h-[160px] w-[16px]" />
          </div>

          {/* Location List */}
          <div className="flex flex-col text-sm text-black gap-4">
          <div className="flex items-start gap-2">
    <div className="w-3 h-3 mt-1 bg-[#1E293B] rounded-full" />
    <div>
      <p className="font-bold">Lucknow (78%)</p>
      <p className="font-light mt-1 nowhite whitespace-nowrap">1,358 total ventures</p>
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
      <p className="font-light mt-1 hidden">1,358 total ventures</p>
    </div>
  </div>

          </div>

          {/* Doughnut Chart */}
          <div className='flex flex-col gap-4'>
          <div className="pl-4">
            <Doughnut data={data2} options={{ maintainAspectRatio: false }} />
          </div>

          {/* Chart Labels */}
          <div className="flex flex-row gap-2 text-sm text-[#475569]  ml:15 md:ml-22 sm:ml-20 ">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1E293B] rounded-[3px]" /> Onsite
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#47505F] rounded-[3px]" /> Hybrid
            </div> 
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-[#1E293B33] rounded-[3px]" /> Remote
            </div>
          </div>
          </div>
        </div>
      </div>


{/* Active Alignments Box */}
      <div className="bg-white border border-[#E5E5E5] rounded-[15px] flex flex-col text-[#475569] font-medium p-2 w-full md:w-1/3 relative">
      <div className="p-2 pb-0">
        <h2 className="text-xl text-black mb-2">Active Alignments(90%)</h2>
      </div>

        {/* Doughnut + Labels */}
        <div className="pb-16">
        <div className="flex flex-row items-center gap-2 flex-wrap md:flex-nowrap">
        <div className="w-[130px] h-[130px] relative">
  <Doughnut data={data} options={{ maintainAspectRatio: false }} />
</div>



          <div className="flex flex-col gap-2 text-sm text-[#475569] font-normal">
            {[
              { label: "Under Review", color: "#1E293B" },
              { label: "Interview", color: "#47505F" },
              { label: "Onhold", color: "#6A727E" },
              { label: "Rejected", color: "#B7BBC1" },
              { label: "Shortlisted", color: "#DDDFE2" },
            ].map((item) => (
              <div key={item.label} className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
        </div>
        {/* Bottom Button Bar */}
        <div className="absolute bottom-0 left-0 w-full bg-[#E8E8E8] rounded-b-[15px] px-4 py-3">
          <Button className="w-full text-black bg-white text-lg font-normal">
            View full report
          </Button>
        </div>
</div>
    </div>   
  </div>
</div>
</div>
{/* textarea  */}
  <div className='flex flex-col m-3'>
  <div className="flex flex-col md:flex-col md:items-stretch gap-4 w-full md:px-10 mt-4 items-stretch ">
<div className='flex flex-row font-bold text-medium gap-3'>
   <span> Notes</span>
   <div className='flex flex-row text-[#84848C] gap-1 font-light'>
   <MessageCircleMore className='w-5 h-5 text-[#84848C]'/>
   <span>0 comments</span>
    </div>
    <div className="ml-auto mt-2 sm:mt-0 flex items-center">
            <div className="flex items-center border border-[#E2E8F0] bg-[#FFFFFF] text-[#475569] font-medium rounded-lg px-3 py-1 text-sm whitespace-nowrap cursor-pointer">
              <span>Latest</span>
              <ChevronDown className="ml-1 w-4 h-4" />
            </div>
          </div>
</div>
<div className='bg-[#F4F4F4] min-h-[100px] w-full mt-2 p-4 rounded-lg flex justify-between items-start'>
  <div className="flex-grow">
    <textarea 
      placeholder="Add a comment" 
      className="bg-transparent w-full h-full outline-none resize-none"
    />
  </div>
  <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition-colors mt-10">
    Publish
  </button>
</div>

<div className='flex flex-row mt-4'>
<div className='relative w-10 h-10 md:w-20 md:h-10 rounded-full overflow-hidden'>
      <Image
        src='/images/random.jpeg'
        alt='William Cameron'
        fill
        className='object-cover'
      />
    </div>
    <div className='flex flex-col ml-2'>
    <span className='font-medium'>John Doe</span>
    <p className='text-[#66666E]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ratione amet tempore labore praesentium veritatis similique obcaecati, omnis, molestias excepturi deleniti soluta iste sint possimus aspernatur totam porro mollitia rem.</p>
    </div>

</div>
</div>
<div className='flex flex-row mt-2 pl-20 gap-2 font-semibold text-[#39393D]'>
<ChevronDown />
<span>2 Replies</span>
<Separator orientation='vertical' className='h-4 hidden sm:block  md:h-7 bg-[#E3E3E4] w-[1px] ' />
<span>Reply</span>
</div>
</div>
</div>
</div>
  {/* separator */}
  <div className="w-76 h-screen p-4 text-[#84848C] font-light text-medium border-l-0 md:border-l border-[#E5E5E5] ">

        <div className="mb-6 ">
            <h4 className="mb-4 text-[14px]">Contacts</h4>
            <div className="space-y-4">
                <div>
                    <div className=" flex flex-row text-black gap-4">Neha
                    <div className="text-gray-500">CEO</div>
                    </div>
                   
                    <div className="flex items-center">
                    <Phone className='w-4 h-4 pr-1'/>
                    <span>9876543210</span>
                    </div>
                    <div className="flex items-center">
                    <span className='pr-1'>@</span>
                    <span>veryvery@talentolease.co</span>
                    </div>
                </div>
                <div className='text-[#84848C] font-light' >
                    <div className="text-black">Jenny Wilson</div>
                    <div className="flex items-center">
                    <Phone className='w-4 h-4 pr-1'/>
                        <span>9876543210</span>
                    </div>
                    <div className="flex items-center">
                    <span className='pr-1'>@</span>
                        <span>JennyWilson@talentolease.co</span>
                    </div>
                </div>
                <div className='border-t border-b pt-2'>
                <div className='text-[#84848C] font-light text-sm' >
                    <div className=" pb-3">Details</div>
                    <div className="flex items-center p-2">
                    <MapPin className='w-5 h-5 pr-1'/>
                        <span className="text-black">New Delhi</span>
                    </div>
                    <div className="flex items-center p-2">
                    <WalletCards className='w-5 h-5 pr-1'/>
                        <span className="text-black">30 Days</span>
                    </div>
                    <div className="flex items-center p-2">
                    <UserRound className='w-5 h-5 pr-1'/>
                        <span className="text-black">182 resources</span>
                    </div>
                    <div className="flex items-center p-2">
                    <UserRoundCog  className='w-5 h-5 pr-1'/>
                    <div className='relative w-8 h-8 md:w-6 md:h-6 rounded-full overflow-hidden mx-2 '>
      <Image
        src='/images/random.jpeg'
        alt='William Cameron'
        fill
        className='object-cover'
      />
    </div>
                        <span className="text-black">Somil Singh</span>
                    </div>
                    
                </div>
                </div>
                <div>
                    <span>NDA</span>
                    <div className='border-[#E3E3E4] border-1 rounded-md p-2'>
                        <div className='flex flex-row gap-1'>
                        <div className='bg-[#E8F0FE] text-[#1A68F3] rounded-md py-2 px-2'><Paperclip /></div>
                        <div className='flex flex-col font-bold text-[#39393D]'>
                        Agreement.pdf
                        <span className='font-light text-[#84848C]'>246 KB</span>
                        </div>
                        <div className='w-9 h-9 flex flex-row text-[#39393D] items-center ml-4 gap-1'>
                        <MoveDiagonal />
                        <ArrowDownToLine />
                        </div>
                        </div>
                        </div>
                       
                </div>
            </div>
        </div>

        </div>


 


</div>


   </div>

   </div>
  

        
    </div>
  )
}

export default AllVendor