const Footer = () => (
  <footer className="pb-11 w-[100%] bg-black">
    <hr className="hr_line_footer ] " />
    <div className="flex flex-col mt-11 ">
      <div className=" flex justify-between w-[80%] self-center  gap-11 ">
        <div className="flex flex-col gap-4">
          <h1 className="footer_heading">join the party</h1>
          <div className="flex gap-6">
            <button className="buy_ticket_footer flex w-[15%] self-center mt-11 " type="button">Buy Tickets
              <svg className="mt-1 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
              </svg>
            </button>
            <button className="browse_show flex w-[15%] self-center mt-11 " type="button">Browse Shows
              <svg className="mt-1 ml-1 " width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
              </svg>
            </button>
          </div>
        </div>
        <div className="flex flex-col text-white   hidden md:block ">
          <p className="cursor-pointer icon_text  mt-3">Home</p>
          <p className="cursor-pointer icon_text  mt-2">Events</p>
          <p className="cursor-pointer icon_text  mt-2">Terms & Conditions</p>
          <p className="cursor-pointer icon_text  mt-2">Contact </p>
        </div>
        <div className="flex flex-col gap-5 ">
          <h1 className="address_title">Follow us</h1>
          <div className="flex  flex-col gap-6 md:gap-3">
            <div className="flex justify-between gap-2 text-white">
              <p className="icon_text">Facebook</p>
              <svg className="mt-1 ml-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.04 0H0.853333C0.426667 0 0 0.426667 0 0.853333V15.04C0 15.5733 0.426667 16 0.853333 16H8.42667V9.81333H6.4V7.36H8.42667V5.65333C8.21333 4.05333 9.38667 2.66667 10.9867 2.45333C11.2 2.45333 11.3067 2.45333 11.52 2.45333C12.16 2.45333 12.8 2.45333 13.3333 2.56V4.69333H12.0533C11.0933 4.69333 10.88 5.12 10.88 5.86667V7.46667H13.2267L12.9067 9.92H10.88V16H14.9333C15.4667 16 15.7867 15.5733 15.7867 15.1467V0.853333C15.8933 0.426667 15.4667 0 15.04 0Z" fill="white" />
              </svg>
            </div>
            <div className="flex justify-between gap-2  text-white">
              <p className="icon_text">Youtube</p>
              <svg className="mt-1 ml-1" width="16" height="12" viewBox="0 0 16 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M15.8222 2.71106C15.7333 2.17772 15.5556 1.5555 15.2 1.11106C14.7556 0.666612 14.2222 0.399946 13.6 0.399946C11.3778 0.222168 8 0.222168 8 0.222168C8 0.222168 4.62222 0.222168 2.4 0.399946C1.77778 0.399946 1.24444 0.666612 0.8 1.11106C0.444444 1.5555 0.266667 2.17772 0.177778 2.71106C0.0888889 3.59995 0 4.48883 0 5.37772V6.62217C0 7.51106 0.0888889 8.39995 0.177778 9.28883C0.266667 9.82217 0.444444 10.4444 0.8 10.8888C1.24444 11.3333 1.95556 11.5999 2.57778 11.5999C3.82222 11.7777 8 11.7777 8 11.7777C8 11.7777 11.3778 11.7777 13.6 11.5999C14.2222 11.5999 14.7556 11.3333 15.2 10.8888C15.5556 10.4444 15.7333 9.82217 15.8222 9.28883C15.9111 8.39995 16 7.51106 16 6.62217V5.37772C16 4.48883 15.9111 3.59995 15.8222 2.71106ZM6.31111 8.13328V3.51106L10.6667 5.82217L6.31111 8.13328Z" fill="white" />
              </svg>
            </div>
            <div className="flex justify-between gap-2  text-white">
              <p className="icon_text">Instagram</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <h1 className="footer_bottom_text mt-11">Copyright © 2023. All rights reserved</h1>
  </footer>
);
export default Footer;
