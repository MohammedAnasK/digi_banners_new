import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Banner = () => {
  return (
    <div>
      <Carousel autoPlay infiniteLoop showThumbs={false}>
        <div>
         
          <img src="pexels-pixabay-36762.jpg" alt="Slide 1" />
        </div>
        <div>
       
          <img src="pexels-pixabay-45853.jpg" alt="Slide 2" />
        </div>
        <div>
       
          <img src="pexels-pixabay-60597.jpg" alt="Slide 3" />
        </div>
        <div>
       
          <img src="pexels-pixabay-459203.jpg" alt="Slide 4" />
        </div>
        {/* Add more slides as needed */}
      </Carousel>
    </div>
  );
};

export default Banner;
