'use client'
import { useState } from "react";
import "../styles/home.css"
import gsap from "gsap";
const Gallery = () =>{
  const [active, setActive] = useState(false);
  const [url,setUrl]=useState('')
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

  function mouseOut(e){
    var tl = gsap.timeline();
    tl.to(e, {scale: 1, duration: .5, ease: "power1.inOut"});
  }



function mouseDowns (e) {

  var tl = gsap.timeline();
  tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
}
var dragged = false
var oldX = 0;
function mouseDown (e) {
    oldX = e.pageX;
    dragged = false 
  }
 function mouseMove() {
   dragged = true 
  }

function mouseUp(e) {
var divOverlay =   document.getElementById('container')
        if (dragged == true && e?.pageX < oldX) {
            sideScroll(divOverlay,'right',25,300,900);
        } else if (dragged == true && e?.pageX > oldX) {
            sideScroll(divOverlay,'left',25,100, 900);          
        }    
}

function selectImage(e){
  setActive(true)
  setUrl(e)
}

const Model=()=>{
  return(
          <>
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div class="flex min-h-[90%] items-center justify-center p-4 text-center sm:items-center sm:p-0">
          
                <div class="relative transform overflow-hidden rounded-lg bg-transparent min-w-[90vw] text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                  <div class="bg-transparent px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                  <div className='flex justify-end w-[100%]'>
                      <div onClick={()=>{setActive(false)}} class="mb-3">
                       X
                      </div>
                      </div>
                    <div class="sm:flex sm:items-end text-black">
                   
                      
                     
                      {/* <div class="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                        <h3 class="text-base font-semibold leading-6 text-gray-900" id="modal-title">Deactivate account</h3>
                        <div class="mt-2">
                          <p class="text-sm text-gray-500">Are you sure you want to deactivate your account? All of your data will be permanently removed. This action cannot be undone.</p>
                        </div>
                      </div> */}
                      <div className='w-[100%]'>
                              <img   src={url} className='w-[100%] image_118'/>
                              </div>
                    </div>
                  </div>
                  {/* <div class="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                    <button type="button" class="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto">Deactivate</button>
                    <button type="button" class="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto">Cancel</button>
                  </div> */}
                </div>
              </div>
            </div>
            </>  
  )
}
  
return(
  <section className="mt-24">

    <div id="container" onMouseMove={()=>mouseMove()}  onMouseDown={(e)=>mouseDown(e)} onMouseUp={(e)=>mouseUp(e)}  className="flex gallery_main_container gap-4 hidden md:block">
      <div className="flex gap-8 ">
      <div className="flex flex-col gap-8 ">
        <div className="image_11">
        <img draggable="false" className="min-w-[400px] h-[260px] image_1" src="/Gallery/gallery_1.png" />
        </div>
        <div className="image_11">
        <img draggable="false" className="w-[400px] h-[400px] image_2" src="/Gallery/gallery_2.png" />
        </div>
      </div>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-8  gallery_container text-white p-4 ">
          <div className="gap-8 flex w-[400px] h-[275px] flex-col">
          <h1 className="gallery_header w-1/2 mt-11 ">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
         
            </div>
        </div>
       
        <div className="image_11">
        <img  draggable="false" className="w-[440px] h-[354px] image_3" src="/Gallery/gallery_3.png" />
      </div>
      </div>
      {/* <div className="flex flex-col gap-8 image_11 ">
        <img  draggable="false" className="min-w-[400px] h-[690px] image_4" src="/Gallery/gallery_4.png" />
      </div> */}
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
        <div className="image_11">
        <img   draggable="false"  src="/Gallery/gallery_5.png" />
        </div>
        <div className="image_11">
        <img draggable="false" src="/Gallery/gallery_6.png" />
        </div>
        </div>
        <div className="w-[840px] h-[308px] ">
        <div className="image_11">
        <img draggable="false" className="object-contain " src="/Gallery/gallery_7.png"/>
        </div>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      <div className="image_11">
      
        <img   className="image_8" draggable="false" src="/Gallery/gallery_8.png" />
        </div>
        <div className="w-[400px] h-[400px] image_11">

        <img   draggable="false" className="image_9 object-contain" src="/Gallery/gallery_9.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
    
   
      <div className="w-[400px] image_11">

      <img  draggable="false" className=" h-[690px] image_10" src="/Gallery/gallery_10.png"/>
      </div>
    </div> 
    <div className="flex flex-col gap-8 ">
       
        <div className="w-[840px] image_11">

        <img draggable="false" className="object-contain " src="/Gallery/gallery_11.png"/>
        </div>
        <div className="flex gap-8  ">
        <div className="image_11">
        <img draggable="false" className="image_12" src="/Gallery/gallery_12.png" />
        </div>
        <div className="image_11">
        <img   draggable="false" className="image_13" src="/Gallery/gallery_13.png" />
        </div>
        </div>
      </div> 
 
</div>

</div>

    <div className="md:hidden gallery_container_mob px-4 pt-4 pb-4">
    <div className="flex flex-col gap-4  text-white mb-4 ">
          <h1 className="gallery_header">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
        
        </div>
        <div className="flex gap-4 mx-2">
          <div className="flex flex-col gap-4 basis-1/2">
          <div className="image_11">
          <img onClick={()=>selectImage('/Gallery/gallery_1_mob.png') } className=" w-full h-full image_14" src="/Gallery/gallery_1_mob.png" />
          </div>
          <div className="image_11">
          <img onClick={()=>selectImage('/Gallery/gallery_3_mob.png') } className=" w-full h-full" src="/Gallery/gallery_3_mob.png" />
          </div>
          </div>
          <div className="flex flex-col gap-4 basis-1/2">
          <div className="image_11">
          <img  onClick={()=>selectImage('/Gallery/gallery_2_mob.png') } className="  w-full h-full" src="/Gallery/gallery_2_mob.png" />
          </div>
          <div className="image_11">
          <img onClick={()=>selectImage('/Gallery/gallery_4_mob.png') } className="  w-full h-full " src="/Gallery/gallery_4_mob.png" />
          </div>
          </div>
         
        </div>
        
        <div className="image_11">
        <img onClick={()=>selectImage('/Gallery/gallery_5_mob.png') } className=" w-full h-full mx-2 my-4 pr-3  mt-4 mb-4" src="/Gallery/gallery_5_mob.png"/>
        </div>
        <div className="flex gap-4 mx-2 w-full ">
          <div className="basis-1/2 image_11">
        <img onClick={()=>selectImage('/Gallery/gallery_6_mob.png') } className="object-cover w-full h-full rounded" src="/Gallery/gallery_6_mob.png" />
        </div>
        <div className="basis-1/2 mr-3 image_11 ">
          <img onClick={()=>selectImage('/Gallery/gallery_7_mob.png') } className="w-full h-full " src="/Gallery/gallery_7_mob.png" />
        </div>
        </div>
        {active&&Model()}
    </div>
  </section>
);
}
export default Gallery;
