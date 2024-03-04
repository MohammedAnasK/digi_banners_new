import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Form from "./component/Form";
import TestimonialSection16 from "./component/testemonycard";
<<<<<<< HEAD
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import Work from "./component/Work";
import Banner from "./component/Banner";
=======
import Home1 from "./component/Home1";
import Work from "./component/Work";
// import { Footer } from "antd/es/layout/layout";
import Footer from "./component/Footer";
>>>>>>> 6421bf1b64b6ecdad1a7e426ea1aeffb50a25a98
// import CarouselPlugin from "./component/work_slides";


const navigation = [
  { name: "Home", href: "#home", current: true },
  { name: "Work", href: "#work", current: false },
  { name: "Reviews", href: "#review", current: false },
  { name: "Contact", href: "#form", current: false },
];
function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function App() {
  return (
    <>
      <div>
<<<<<<< HEAD
        <div>
          <Navbar />

        </div>
=======
        <Home1 />
>>>>>>> 6421bf1b64b6ecdad1a7e426ea1aeffb50a25a98

        <div className="w-full h-screen text-white text-center bg-gradient-to-r from-teal-950 to-green-300 ">
          {/* <CarouselPlugin /> */}


        <Banner/>

        </div>
<<<<<<< HEAD
        <div>
          
        <Work />

        </div>
       
=======
        <Work />
>>>>>>> 6421bf1b64b6ecdad1a7e426ea1aeffb50a25a98

        <div
          id="review"
          className="w-full h-full h- bg-slate-800 text-white text-center "
        >
          Testemony
          <TestimonialSection16 />
        </div>
        <div
          id="form"
          className="w-full h-screen   bg-pink-900 text-white text-center"
        >
          <Form />
        </div>

<<<<<<< HEAD
        <div>
          <Footer />
      
        </div>
=======
        <Footer />
>>>>>>> 6421bf1b64b6ecdad1a7e426ea1aeffb50a25a98
      </div>
    </>
  );
}

export default App;
