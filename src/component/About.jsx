import React from 'react';
import { useSpring, animated } from 'react-spring';

const About = () => {
  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { duration: 1000 },
  });

  return (
    <animated.div style={fadeIn} className="container mx-auto p-4 flex flex-col sm:flex-row items-center justify-between rounded-lg">
      <div className="w-full sm:w-1/2 mb-8 sm:mb-0">
        <h1 className="text-5xl sm:text-5xl md:text-7xl font-bold mb-4 text-center sm:text-left">
          About <span className='text-orange-400'>Us</span>
        </h1>
      </div>
      <div className="w-full sm:w-1/2">
        <p className="text-base sm:text-xl leading-loose text-center sm:text-left overflow-hidden">
          Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Welcome to our website! Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat.
        </p>
      </div>
    </animated.div>
  );
};

export default About;
