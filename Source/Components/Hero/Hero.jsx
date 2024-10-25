import React from 'react';

const Hero = () => {
  return (

    <section className="bg-blue-600 relative text-white h-screen flex items-center justify-center">
      <img src='./images/hero.avif' className=' z-10 absolute w-screen h-screen' />
      <div className="text-center absolute z-20">
        <p className=' text-[19px] font-semibold py-1.5'>Software Development & Consultancy</p>
        <h1 className="text-4xl font-bold mb-4">Business Innovation Through Technology</h1>
        <p className="text-[17px] mb-6 text-gray-400">Leading Business Evolution with Tailored and Innovative Software Solutions</p>
        <button className="bg-white text-blue-600 px-6 py-2 font-bold rounded hover:bg-gray-200">Explore</button>
      </div>
    </section>
  );
};

export default Hero;
