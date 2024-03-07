import { useState } from "react";
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import "./App.css";
import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";

import Form from "./component/Form";
import TestimonialSection16 from "./component/testemonycard";
import Home1 from "./component/Home1";
import Work from "./component/Work";
// import { Footer } from "antd/es/layout/layout";
import Footer from "./component/Footer";
import Banner from "./component/Banner";
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
  const Top = () => {
    window.scrollTo(0, 0);
  };
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
          className="w-full h-full h- bg-slate-800 text-white text-center text-4xl font-bold p-2"
        >
          Testemony
          <TestimonialSection16 />
        </div>
        <div
          id="form"
          className="w-full h-screen    bg-pink-900 text-white text-center"
        >
          <Form />
        </div>

        <Footer />
        <button
          onClick={Top}
          className="bg-[url('src/assets/arrow-up-solid.svg')] bg-white bg-no-repeat bg-center  text-white  fixed bottom-0 right-0 rounded-full  h-10 w-10 m-10 max-md:w-10  "
        ></button>
      </div>
      <div>
     
      </div>
    </>
  );
}

export default App;
