import Link from "next/link";

const Navbar = () => (
  <nav className="navbar_main_container">
    <div className='navbar_container'>
      <Link href="/"><img src='/Logo.png' className='logo_img ' /></Link>
      <div className='flex gap-6 '>
        <Link href="/"><h1 className='menu_text hidden md:block'>Events</h1></Link>
        <Link href="/"><h1 className='menu_text hidden md:block'>FAQ</h1></Link>
        <Link href="Contact">  <h1 className='menu_text hidden md:block'>Contact</h1></Link>
      </div>
      <button className='buy_ticket flex ' type='button'>Buy Tickets
        <svg className='mt-1 ml-1 ' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
        </svg></button>
    </div>
  </nav>
);

export default Navbar;
