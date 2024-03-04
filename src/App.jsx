import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import Form from "./component/Form";
import TestimonialSection16 from "./component/testemonycard";
import Home1 from "./component/Home1";
import Work from "./component/Work";
// import { Footer } from "antd/es/layout/layout";
import Footer from "./component/Footer";
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
        <Home1 />

        <div className="w-full h-screen text-white text-center bg-gradient-to-r from-teal-950 to-green-300 ">
          {/* <CarouselPlugin /> */}


        <Banner/>

        </div>
        <Work />

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

        <Footer />
      </div>
    </>
  );
}

export default App;
