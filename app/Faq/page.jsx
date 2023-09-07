'use client'
import '../../styles/contact.css';
import AccordItem from '../../components/AccordItem'
  import { scrollTop } from '../../components/jsfile';
import { Footer } from '../../components';


const Faq = () => {
  return (
    <div className="faq_main_container  relative h-screen flex flex-col text-white pt-11      ">
    <div className="  flex   w-[80%] self-center">
      <div className="basis-1/2 ">
        <h1 className="contact_header">Frequently asked questions</h1>
        <p className="contact_text mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
          sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
          quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
          id est laborum.
        </p>
       

      </div>

      <div className="basis-1/2 ">
      <div className="flex flex-col gap-2 mt-11 md:mt-0  basis-2/3 ">
       
       <AccordItem header="FAq 1" text="Response for this question" />
        
        
         <AccordItem header="FAq 2" text="Response for this question" />
        
         <AccordItem header="FAq 3" text="Response for this question" />
        
         <AccordItem header="FAq 4" text="Response for this question" />
        
         <AccordItem header="FAq 5" text="Response for this question" />
        
         <AccordItem header="FAq 6" text="Response for this question" />
        
         <AccordItem header="FAq 7" text="Response for this question" />
        
         <AccordItem header="FAq 8" text="Response for this question" />
        
         <AccordItem header="FAq 9" text="Response for this question" />
        
       </div>
      </div>
    
    </div>
    <button  onClick={()=>{scrollTop()}} className='top_btn flex self-center mt-11'>
      back to top 
     <img className='mt-1 ml-2' src='/uparrow.png'/>

      </button>
    
  </div>
  )
}

export default Faq