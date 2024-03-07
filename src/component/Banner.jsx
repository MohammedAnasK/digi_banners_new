import React from 'react';
import { useSpring, animated } from 'react-spring';

const Banner = () => {
  const fadeInLeft = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(-20px)' },
    config: { duration: 800, delay: 300, ease: 'easeInOut' },
  });

  const fadeInRight = useSpring({
    opacity: 1,
    transform: 'translateX(0)',
    from: { opacity: 0, transform: 'translateX(20px)' },
    config: { duration: 600, delay: 200, ease: 'easeInOut' },
  });

  return (
    <div className="relative w-full h-screen flex items-center justify-center text-white bg-gradient-to-r  bg-cover bg-center">
      <div className="container mx-auto flex flex-col md:flex-row items-center">

        <animated.div className="text-center md:text-left md:w-1/2 px-8" style={fadeInLeft}>
          <h1 className="text-5xl md:text-5xl font-bold mb-4">Welcome to <span className="
          
          ">DG Banner Events</span>
          </h1>
          <p className="text-lg md:text-2xl mb-4 leading-relaxed">
            Your one-stop solution for professional and beautiful events. We specialize in creating unforgettable experiences tailored to your unique vision.
          </p>
          <button  className="bg-white text-indigo-800 py-2 px-4 rounded-full font-semibold hover:bg-indigo-500 hover:text-white">
            Explore Now 
          </button>
        </animated.div>


        <animated.div className="mt-8 md:mt-0 md:w-1/2" style={fadeInRight}>
          <img src="src/assets/bg-home.png" alt="Proffolia Events" className="object-cover  h-40 md:h-60 lg:h-auto mx-auto" />
        </animated.div>
      </div>
    </div>
  );
};

export default Banner;
