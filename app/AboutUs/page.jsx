import '../../styles/contact.css';

const AboutUs = () => {
  return (
    <div className='text-white  min-h-screen min-w-screen  overflow-hidden mt-11 mb-11 flex flex-col'>
         <div className='bg_about_us'>
          <div className='w-[85%] flex justify-center  '>
            <div className='flex flex-col'>
            <div className='flex flex-col gap-6 mt-24 mb-24  '>
                <h1 className='about_us_header'>ABOUT US</h1>
                <h1 className='about_us_main_header'>WHO WE ARE?</h1>
            </div>
            <div className='flex flex-col self-center mb-24'>
                <h1 className='sub_heading'>we are PINKFISH LIVE</h1>
                <p className='about_us_text'>Pinkfish Live, a sub-division of Pinkfish, provides revolutionary and international-level live shows, electrifying stage 
                setup and show production, mind-bending LED and sound setup for Malaysians. Pinkfish Live brought these expertise together for Tyga’s show on the 9th August 2023,
                 having concert-goers dancing the night away. 
                 </p>
                 <p className='about_us_text'>The adrenaline-filled night also featured an exciting lineup of local acts. DJ sets from Nahsyk, Naufal, and Bad
                    M.O.B. set the tone for the night, with exhilarating performances by guest artists such as Saixse and Kidd Santhe, who performed their 
                    crowd-favourite hits and had them singing along.</p>
            </div>
            </div>
            </div>
         </div>
         <div className='bg_about_us_2'>
            <div className='flex flex-col gap-6 mt-56'>
                <h1 className='about_us_header'>ABOUT US</h1>
                <h1 className='about_us_main_header'>THE CURATORS</h1>
            </div>
            <div className='flex flex-col items-center   md:flex-row mb-36 mt-24 '>
           
              <img src='/aboutus_logo_2.png' alt="logo" />
              <img src='/aboutus_logo_1.png' alt="logo" />
              </div>
          
          
         </div>
    </div>
  )
}

export default AboutUs