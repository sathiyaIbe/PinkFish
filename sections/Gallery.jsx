'use client'
import Image from "next/image";
import "../styles/home.css"
import { Alert } from "flowbite-react";
import { Dropdown , DataCarousel, DataCarouselItem } from "flowbite-react";
const Gallery = () =>{
 
 function moveForward () {
      var container = document.getElementById('container');
      sideScroll(container,'right',25,300,900);
  };
  
   function moveBackward () {
      var container = document.getElementById('container');
      sideScroll(container,'left',25,100,900);
  };
  
  function sideScroll(element,direction,speed,distance,step){
     var scrollAmount = 0;
      var slideTimer = setInterval(function(){
          if(direction == 'left'){
              element.scrollLeft -= step;
          } else {
              element.scrollLeft += step;
          }
          scrollAmount += step;
          if(scrollAmount >= distance){
              window.clearInterval(slideTimer);
          }
      }, speed);
  }
  
return(
  <section className="mt-24">

    <div id="container" className="flex gallery_main_container gap-4 hidden md:block">
      <div className="flex gap-8 ">
      <div className="flex flex-col gap-8 ">
        <img className="min-w-[400px] h-[260px]" src="/Gallery/gallery_1.png" />
        <img className="w-[400px] h-[400px]" src="/Gallery/gallery_2.png" />
      </div>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-8  gallery_container text-white p-4 ">
          <div className="gap-8 flex w-[400px] h-[275px] flex-col">
          <h1 className="gallery_header w-1/2 mt-11 ">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
          <button className="gallery_btn flex" type="button" >See More
            <svg className="mt-1 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg>
            </button>
            </div>
        </div>
        <img className="w-[440px] h-[354px]" src="/Gallery/gallery_3.png" />
      </div>
      <div className="flex flex-col gap-8 ">
        <img  className="min-w-[400px] h-[690px]" src="/Gallery/gallery_4.png" />
      </div>
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
        <img className="" src="/Gallery/gallery_5.png" />
        <img src="/Gallery/gallery_6.png" />
        </div>
        <div className="w-[840px] h-[308px]">

        <img className="object-contain" src="/Gallery/gallery_7.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
        <img src="/Gallery/gallery_8.png" />
     
        <div className="w-[400px] h-[400px]">

        <img className="object-contain" src="/Gallery/gallery_9.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
    
   
      <div className="w-[400px]">

      <img className=" h-[690px]" src="/Gallery/gallery_10.png"/>
      </div>
    </div> 
    <div className="flex flex-col gap-8 ">
       
        <div className="w-[840px]">

        <img className="object-contain" src="/Gallery/gallery_11.png"/>
        </div>
        <div className="flex gap-8  ">
        <img className="" src="/Gallery/gallery_12.png" />
        <img src="/Gallery/gallery_13.png" />
        </div>
      </div> 
 
</div>

</div>
<div class="flex justify-center items-center pt-4 ">
        <button type="button" class="hidden md:block flex justify-center items-center mr-4 h-full cursor-pointer group focus:outline-none"  onClick={()=>{moveBackward()}}>
            <span class="text-[#F33288] hover:text-gray-400">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 5H1m0 0 4 4M1 5l4-4"/>
                </svg>
                <span class="sr-only">Previous</span>
            </span>
        </button>
        <button type="button" class="hidden md:block flex justify-center items-center h-full cursor-pointer group focus:outline-none" onClick={()=>{moveForward()}}>
            <span class="text-[#F33288] hover:text-gray-400">
                <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                </svg>
                <span class="sr-only">Next</span>
            </span>
        </button>
</div>
    <div className="md:hidden gallery_container_mob px-4 pt-4 pb-4">
    <div className="flex flex-col gap-4  text-white mb-4 ">
          <h1 className="gallery_header">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
          <button className="gallery_btn flex" type="button" >See More
            <svg className="mt-1 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg>
            </button>
        </div>
        <div className="flex gap-4 ml-3">
          <div className="flex flex-col gap-4">
          <img className="object-cover" src="/Gallery/gallery_1_mob.png" />
          <img className="object-cover" src="/Gallery/gallery_3_mob.png" />

          </div>
          <div className="flex flex-col gap-4">
          <img className="object-cover  w-[100%]" src="/Gallery/gallery_2_mob.png" />
          <img className="object-cover  w-[100%] " src="/Gallery/gallery_4_mob.png" />

          </div>
         
        </div>
        <img className="object-contain w-[95%]  ml-2 my-4  mt-4 mb-4" src="/Gallery/gallery_5_mob.png"/>
        <div className="flex gap-4 ml-3 ">
        <img className="object-cover" src="/Gallery/gallery_6_mob.png" />
          <img className="object-cover" src="/Gallery/gallery_7_mob.png" />
        </div>
    </div>
  </section>
);
}
export default Gallery;
