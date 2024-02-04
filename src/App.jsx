import React, { useState } from "react";
function App() {
  const images = [
    {
      url: "https://cdn.pixabay.com/photo/2016/11/23/15/23/cosmos-1853491_1280.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/09/08/20/52/starry-sky-1655503_640.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2011/12/15/09/50/lagoon-nebula-11143_640.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2017/02/08/12/46/moon-2048727_640.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2012/11/28/08/54/milky-way-67504_640.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2016/11/21/12/30/milky-way-1845068_640.jpg",
    },
    {
      url: "https://cdn.pixabay.com/photo/2020/06/13/17/51/milky-way-5295160_640.jpg",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <>
      <main className=" min-w-screen h-screen w-full m-auto py-16 px-4 relative group">
        <div
          style={{ backgroundImage: `url(${images[currentIndex].url})` }}
          className=" w-full h-full rounded-2xl bg-center bg-cover duration-500 "
        ></div>
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-white/50 text-white cursor-pointer "
          onClick={prevSlide}
        >
          <i className="ai-chevron-left"></i>
        </div>
        <div
          className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-white/50 text-white cursor-pointer "
          onClick={nextSlide}
        >
          <i className="ai-chevron-right"></i>
        </div>
        <div className="flex top-4 justify-center py-2">
          {images.map((image, imageIndex) => (
            <div key={imageIndex} onClick={() => goToSlide(imageIndex)} className=" text-2xl cursor-pointer ">
              o
            </div>
          ))}
        </div>
      </main>
    </>
  );
}

export default App;
