import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Perfil from '../assets/images/perfil.webp';
import Logo from '../assets/images/full-stack.webp';

function Home() {
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="bg-gray-200 flex justify-center items-center min-h-screen">
        <div className="flex flex-wrap w-full lg:w-3/4">
          <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
            <div data-aos="fade-down-right" className="h-full">
            <div>
              <h1
              className='lg:text-left lg:text-4xl sm:text-center sm:text-2xl lg:mt-10  font-bold text-gray-600'
              >Sebastián J. Macharette</h1>
            </div>
            <div>
              <h2
              className='text-center text-4xl lg:mt-4 font-bold text-gray-500'
              >Portfolio Digital</h2>
            </div>
            <div>
              <h2
              className='lg:text-right text-4xl lg:mt-4 md:text-center  font-bold text-gray-400'
              >Full Stack Developer</h2>
            </div>
            <div>
              <h2
              className='text-right text-xl lg:mt-1 font-bold text-gray-400'
              >Especializado en FrontEnd</h2>
            </div>

            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
            <div className="h-full flex justify-center items-center">
            <div data-aos="fade-down-left">
                            <img src={Perfil} className="mx-auto mb-4 w-48 rounded-xl" alt="perfil" />

            </div>
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
            <div className="h-full flex justify-center items-center">
            <div data-aos="fade-down-right">
      <img className="h-60 rounded-xl" src={Logo} alt="" />
</div>
              
            </div>
          </div>
          <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
            <div data-aos="fade-up-left" className="h-full">
<div
className=''
>
  <h2
    className=' text-gray-400 sm:text-right lg:text-left font-semibold text-4xl'

  >
    Java Full Stack Developer
  </h2>
</div>
<div>
  <h2
    className=' text-gray-500 lg:mr-4 lg:mt-4 sm:text-center lg:text-right font-semibold text-4xl'

  >
    Python Full Stack Developer
  </h2>
</div>
<div>
  <h2
  className=' text-gray-600 lg:mt-6 lg:text-right sm:text-center font-semibold text-4xl'
  >
    Diseñador UI/UX
  </h2>
</div>

            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Home;
