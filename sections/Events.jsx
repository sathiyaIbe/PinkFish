import '../styles/home.css'

const Events = () => (
  <section  id="Events" className="event_section  mt-11">
    <div className="w-[100%] flex flex-col ">
      <h1 className=" event_header mb-11 mt-24">EVENTS</h1>
     <div className="flex flex-col md:flex-row justify-center gap-4 self-center w-[90%]  mt-11">
      <div className="container ml-11 basis-2/3 ">
        <img className="" src="/event_1.png"/>
        <div className="text-block text-white flex flex-col gap-4">
          <h1 className="event_text_date">13 october 2023</h1>
          <h1 className="event_text">lil pump live in kl</h1>
          <button className="event_tickets" alt='button'>Buy Tickets
           <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
        </div>
      </div>
      {/* <div className="container">
        <img className="" src="/event_2.png"/>
      </div> */}
      <div className="container   basis-1/3 ">
        <img className="" src="/event_2.png"/>
        <div className="text-block text-white flex flex-col gap-4">
          <h1 className="event_text_date2">13 october 2023</h1>
          <h1 className="event_text2">Tyga live in kl</h1>
          <button className="event_tickets2" alt='button'>Buy Tickets
           <svg className="self-center ml-2 mt-1" width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 9.46357L4.67453 5.78903C5.10849 5.35507 5.10849 4.64496 4.67453 4.211L1 0.536438" stroke="white" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
</svg></button>
        </div>
      </div>
      </div> 
      <button className='buy_ticket flex w-[15%] self-center mt-11 ' type='buttom'>see more shows 
    <svg className='mt-1 ml-1 ' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white"/>
</svg></button>
    </div>
  </section>
);

export default Events;
