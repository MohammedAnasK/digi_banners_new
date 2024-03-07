import React from "react";

function Work() {

  const imageSources = [
 
  "src/assets/event_image1.jpg",
  "src/assets/event-image2.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
  "src/assets/event_image1.jpg",
   
  ];

  return (
    <div>
       <h1 className="bg-slate-600 text-center text-white text-4xl p-4 font-bold">Our  Work</h1>
      <div
        id="work"
        className="w-full h-screen bg-slate-600 text-white text-center grid gap-4 grid-cols-5 p-4 overflow-x-scroll max-md:grid-cols-1"
      >
        {imageSources.map((source, index) => (
          <div key={index} className="h-96 bg-orange-500 rounded-lg">
            <img className="h-full" src={source} alt={`image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Work;
