import { Footer, Navbar } from '../components';
import '../styles/globals.css';

const RootLayout = ({ children }) => (
  <html lang="en">
    <head>
      <link rel="preconnect" href="https://stijndv.com" />
      <link rel="stylesheet" href="https://stijndv.com/fonts/Eudoxus-Sans.css" />
      {/* <link href="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.css"  rel="stylesheet" />
      <script src="../path/to/flowbite/dist/flowbite.min.js"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/flowbite/1.8.1/flowbite.min.js"></script> */}
    </head>
    <body>
      <div className="min-h-screen bg-black ">
        <Navbar />
        {children}
        <Footer />
      </div>
    </body>
  </html>
);

export default RootLayout;
