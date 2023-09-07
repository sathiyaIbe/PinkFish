import '../styles/home.css'

const Gallery = () => (
  <section className="mt-24">
    <div className="flex gap-4">
      <div className="flex flex-col gap-6 ">
        <img src='/Gallery/gallery_1.png' />
        <img src='/Gallery/gallery_2.png' />
      </div>
      <div className="flex flex-col gap-6   w-1/3">
        <div className="flex flex-col gap-4 gallery_container text-white p-4 ">
          <h1 className="gallery_header">Gallery</h1>
          <p className="gallery_text">Step into our Gallery and let the music do the talking! Get a glimpse
            of the epic performances and wild moments that make concerts with us an unforgettable ride.</p>
          <button className="gallery_btn flex" type='button' >See More
            <svg className='mt-1 ml-1 ' width="13" height="13" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M9.29806 5.73623L5.20055 1.63873L6.28069 0.558594L12.2222 6.50012L6.28069 12.4416L5.20055 11.3615L9.29806 7.26401H0V5.73623H9.29806Z" fill="white" />
            </svg></button>
        </div>
        <img className="object-cover" src='/Gallery/gallery_3.png' />
      </div>
      <div className="flex flex-col gap-4">
        <img src='/Gallery/gallery_4.png' />

      </div>
      <div className="flex flex-col gap-2">
        <img className="w-4/5" src='/Gallery/gallery_5.png' />
        <img src='/Gallery/gallery_6.png' />
      </div>
    </div>
  </section>
);

export default Gallery;
