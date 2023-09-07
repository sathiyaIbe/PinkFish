import '../../styles/contact.css'
const Contact = () => (
 
  <div className="contact_main_container  h-screen flex justify-center text-white pt-11   flex   ">
    <div className="  flex   w-[80%]">
    <div className="basis-1/2 ">
      <h1 className="contact_header">reach out to us</h1>
      <p className="contact_text mt-6">Lorem ipsum dolor sit amet, consectetur adipiscing elit,
       sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
       quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute 
       irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim
        id est laborum.</p>
        <div className='flex flex-col gap-1 '>

        <h1 className="contact_sub_header mt-6">email</h1>
        <p className="contact_text mt-3">info@pinkfishfestival.com</p>
        <h1 className="contact_sub_header mt-3 mb-3">Socials</h1>
        <p className="contact_text">Instagram</p>
        <p className="contact_text">Youtube</p>
        <p className="contact_text">Facebook</p>
        </div>

    </div>

    <div className="basis-1/2 ">
      <form className='flex flex-col gap-4'>
        <div className="flex flex-col gap-2">
          <label className="contact_label">Name</label>
          <input className="contact_input" type='text' />
        </div>
        <div className="flex flex-col gap-2">
          <label className="contact_label">Email</label>
          <input className="contact_input" type='text' />
        </div>
        <div className="flex flex-col gap-2">
          <label className="contact_label">Subject</label>
          <input className="contact_input" placeholder='Select project type' type='text' />
        </div>
        <div className="flex flex-col gap-2">
          <label className="contact_label">Message</label>
          <textarea className="contact_input" type='text' />
        </div>
        <button className="contact_submit" type="submit">Submit 
        <svg className='mt-2 ml-1 ' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white"/>
</svg>
</button>
      </form>
    </div>
    </div>
  </div>
);

export default Contact;
