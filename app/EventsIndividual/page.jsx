/* eslint-disable */
'use client'
import '../../styles/contact.css';
import '../../styles/home.css';
import gsap from 'gsap';
const EventsIndividual = () => {

    function sideScroll(direction,speed,distance,step){
        var element =   document.getElementById('container')
       
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
    
      function moveImageLeft(){   
  
            gsap.to('.image_01',{
                x:"0%", duration:3
            })
      }

      function moveImageRight(){   
        gsap.to('.image_01',{
            x:"-100%", duration:3
        })
  }
    
    
    function mouseDowns (e) {
    
      var tl = gsap.timeline();
      tl.to(e, {scale: 1.05, duration: .5, ease: "power1.inOut"});
    }

  return (
    <div className=' flex flex-col justify-center '>
        <div className='w-[80%] self-center flex flex-col gap-8 mt-11 '>
   
    <div className='flex flex-col md:flex-row gap-4 '>
    <div className='md:basis-2/3 order-2 md:order-1 flex flex-col gap-6'>
        
        <p className='date_event_main_text'>9 august 2023</p>
        <h1 className='event_section_header cursour-pointer'>TYGA live in kl</h1>
        <p className='event_section_text'>Compton-born Tyga is coming to Malaysia for the first time and he's ready to make 
        it “Bedrock”! Tyga, which stands for Thank You God Always brings his arsenal of hits, from ‘Rack City’, to 
        ‘Ice Cream Man’ to ‘Taste’ from the blast from the radio to his live shows. You know you’re in for a party with him taking 
        the stage this Wednesday, the 8th of August 2023 in Zepp KL!
        </p>
        <div className='buy_ticket_event_main flex justify-center w-[40%] md:w-[15%]'>
        <button className=" flex  " type="button">Sold Out
        <svg className="mt-1 ml-2" width="6" height="12" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46351L4.67453 5.78896C5.10849 5.35501 5.10849 4.64489 4.67453 4.21094L1 0.536377" stroke="black" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

</button>
</div>
    </div>
    <div className=' md:basis-1/3 order-1 md:order-2'>
        <img src="/event_individual_1.png"/>
    </div>
    </div>
    </div>
    <div className='w-[full] flex flex-col md:flex-row md:justify-around gap-11 text-white bg-[#F33288] mt-6 mb-6 pt-6 pb-6'>
    <div className='flex flex-col self-center items-center'>
        <p className='sub_heading_events'>Schedule</p>
        <p className='sub_text'>8pm</p>
    </div>
    <div className='flex flex-col self-center items-center '>
        <p className='sub_heading_events'>date</p>
        <p className='sub_text'>9 August 2023</p>
    </div>
    <div className='flex flex-col self-center items-center'>
        <p className='sub_heading_events'>Venue</p>
        <p className='sub_text'>Zepp Kuala Lumpur</p>
    </div>
    <div className='flex flex-col self-center items-center'>
        <p className='sub_heading_events'>rating</p>
        <p className='sub_text'>18+</p>
    </div>
</div>

    <div className='  gap-4 mb-11 md:mb-24'>

        <div id='container' className=' flex flex-col overflow-x-hidden gap-4 order-2 md:order-1'>
            <div  className='flex gap-6 self-center md:w-[60%] w-[90%]'>
                <div className=' flex gap-11 self-center mr-24'>
            <img src="/event_individual_2.png" className=''  alt='img'/>
            <img src="/event_individual_3.png" className=' image_01'  alt='img'/>
            </div>
            </div>
        </div>
        <div className='flex justify-center gap-4 mt-6'>
        <button className='' onClick={()=>{moveImageRight()}}>  <img className='w-12 md:w-full'  src='/left_arrow_event.svg'/></button>
          <button className='' onClick={()=>{moveImageLeft()}}>  <img className=' w-12 md:w-full' src='/right_arrow_event.svg'/></button>
        </div>
     
    </div>

    <div className='flex flex-col gap-4 text-white mb-11'>
    <h1 className='gallery_event text-center'>Gallery</h1>
    <div className='flex gap-4 self-center '>
        <img  onMouseOver={(e)=>mouseDowns(".image_112")} onMouseLeave={(e)=>mouseOut(".image_112")} src='/Gallery/gallery_event_1.png' className='image_112 object-none hidden md:block'/>
        <img  onMouseOver={(e)=>mouseDowns(".image_113")} onMouseLeave={(e)=>mouseOut(".image_113")} src='/Gallery/gallery_event_2.png' className='object-none image_113 hidden md:block'/>

    </div>
    <div className='flex gap-4 self-center items-start  '>
        <img  onMouseOver={(e)=>mouseDowns(".image_114")} onMouseLeave={(e)=>mouseOut(".image_114")} src='/Gallery/gallery_event_3.png' className='object-none image_114  hidden md:block'/>
        <img  onMouseOver={(e)=>mouseDowns(".image_115")} onMouseLeave={(e)=>mouseOut(".image_115")} src='/Gallery/gallery_event_4.png' className='object-none image_115  hidden md:block'/>

    </div>
    <div className='flex gap-4 self-center  md:hidden'>
        <img  onMouseOver={(e)=>mouseDowns(".image_117")} onMouseLeave={(e)=>mouseOut(".image_117")} src='/Gallery/gallery_event_1_mob.png' className='image_117 object-none'/>
        <img  onMouseOver={(e)=>mouseDowns(".image_116")} onMouseLeave={(e)=>mouseOut(".image_116")} src='/Gallery/gallery_event_2_mob.png' className='object-none image_116'/>

    </div>
    <div className='flex gap-4 self-center items-start   md:hidden '>
        <img  onMouseOver={(e)=>mouseDowns(".image_118")} onMouseLeave={(e)=>mouseOut(".image_118")} src='/Gallery/gallery_event_3_mob.png' className='object-none image_118'/>
        <img  onMouseOver={(e)=>mouseDowns(".image_119")} onMouseLeave={(e)=>mouseOut(".image_119")} src='/Gallery/gallery_event_4_mob.png' className='object-none image_119'/>

    </div>
    
    </div>

 
   
    </div>


    
  )
}

export default EventsIndividual