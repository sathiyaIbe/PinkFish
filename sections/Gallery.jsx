'use client'
import "../styles/home.css"
import gsap from "gsap";
const Gallery = () =>{

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
  
return(
  <section className="mt-24">

    <div id="container" onMouseMove={()=>mouseMove()}  onMouseDown={(e)=>mouseDown(e)} onMouseUp={(e)=>mouseUp(e)}  className="flex gallery_main_container gap-4 hidden md:block">
      <div className="flex gap-8 ">
      <div className="flex flex-col gap-8 ">
        <img  onMouseOver={(e)=>mouseDowns(".image_1")} onMouseLeave={(e)=>mouseOut(".image_1")}   draggable="false" className="min-w-[400px] h-[260px] image_1" src="/Gallery/gallery_1.png" />
        <img  onMouseOver={(e)=>mouseDowns(".image_2")} onMouseLeave={(e)=>mouseOut(".image_2")} draggable="false" className="w-[400px] h-[400px] image_2" src="/Gallery/gallery_2.png" />
      </div>
      <div className="flex flex-col gap-8  ">
        <div className="flex flex-col gap-8  gallery_container text-white p-4 ">
          <div className="gap-8 flex w-[400px] h-[275px] flex-col">
          <h1 className="gallery_header w-1/2 mt-11 ">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
         
            </div>
        </div>
        <img  onMouseOver={(e)=>mouseDowns(".image_3")} onMouseLeave={(e)=>mouseOut(".image_3")} draggable="false" className="w-[440px] h-[354px] image_3" src="/Gallery/gallery_3.png" />
      </div>
      <div className="flex flex-col gap-8 ">
        <img  onMouseOver={(e)=>mouseDowns(".image_4")} onMouseLeave={(e)=>mouseOut(".image_4")} draggable="false" className="min-w-[400px] h-[690px] image_4" src="/Gallery/gallery_4.png" />
      </div>
    <div className="flex flex-col gap-8 ">
        <div className="flex gap-8">
        <img  onMouseOver={(e)=>mouseDowns(".image_5")} onMouseLeave={(e)=>mouseOut(".image_5")} draggable="false" className="image_5" src="/Gallery/gallery_5.png" />
        <img  onMouseOver={(e)=>mouseDowns(".image_6")} onMouseLeave={(e)=>mouseOut(".image_6")} draggable="false" className="image_6" src="/Gallery/gallery_6.png" />
        </div>
        <div className="w-[840px] h-[308px]">

        <img  onMouseOver={(e)=>mouseDowns(".image_7")} onMouseLeave={(e)=>mouseOut(".image_7")} draggable="false" className="object-contain image_7" src="/Gallery/gallery_7.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
        <img  onMouseOver={(e)=>mouseDowns(".image_8")} onMouseLeave={(e)=>mouseOut(".image_8")} className="image_8" draggable="false" src="/Gallery/gallery_8.png" />
     
        <div className="w-[400px] h-[400px]">

        <img  onMouseOver={(e)=>mouseDowns(".image_9")} onMouseLeave={(e)=>mouseOut(".image_9")} draggable="false" className="image_9 object-contain" src="/Gallery/gallery_9.png"/>
        </div>
      </div> 
      <div className="flex flex-col gap-8 ">
      
    
   
      <div className="w-[400px]">

      <img  onMouseOver={(e)=>mouseDowns(".image_10")} onMouseLeave={(e)=>mouseOut(".image_10")} draggable="false" className=" h-[690px] image_10" src="/Gallery/gallery_10.png"/>
      </div>
    </div> 
    <div className="flex flex-col gap-8 ">
       
        <div className="w-[840px]">

        <img  onMouseOver={(e)=>mouseDowns(".image_111")} onMouseLeave={(e)=>mouseOut(".image_111")} draggable="false" className="object-contain image_111" src="/Gallery/gallery_11.png"/>
        </div>
        <div className="flex gap-8  ">
        <img  onMouseOver={(e)=>mouseDowns(".image_12")} onMouseLeave={(e)=>mouseOut(".image_12")} draggable="false" className="image_12" src="/Gallery/gallery_12.png" />
        <img  onMouseOver={(e)=>mouseDowns(".image_13")} onMouseLeave={(e)=>mouseOut(".image_13")} draggable="false" className="image_13" src="/Gallery/gallery_13.png" />
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
          <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className=" w-full h-full" src="/Gallery/gallery_1_mob.png" />
          <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className=" w-full h-full" src="/Gallery/gallery_3_mob.png" />

          </div>
          <div className="flex flex-col gap-4 basis-1/2">
          <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className="  w-full h-full" src="/Gallery/gallery_2_mob.png" />
          <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className="  w-full h-full " src="/Gallery/gallery_4_mob.png" />

          </div>
         
        </div>
        <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className=" w-full h-full mx-2 my-4 pr-3  mt-4 mb-4" src="/Gallery/gallery_5_mob.png"/>
        <div className="flex gap-4 mx-2 w-full ">
          <div className="basis-1/2">
        <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className="object-cover w-full h-full rounded" src="/Gallery/gallery_6_mob.png" />
        </div>
        <div className="basis-1/2 mr-3 ">
          <img  onMouseOver={(e)=>mouseDowns(".image_11")} onMouseLeave={(e)=>mouseOut(".image_11")} className="w-full h-full " src="/Gallery/gallery_7_mob.png" />
        </div>
        </div>
    </div>
  </section>
);
}
export default Gallery;
