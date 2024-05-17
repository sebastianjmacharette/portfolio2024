import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import Perfil from '../assets/images/perfil.webp';
import Logo from '../assets/images/logo.png';

function Home() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      <Navbar />
      <div className="  flex justify-center items-center min-h-screen">
        <div className="flex flex-wrap w-full lg:w-3/4">
          <div className="w-full lg:w-1/2 xl:w-1/2 p-4">
            <div data-aos="fade-down-right" className="h-full">
            <div>
            <h1 className="text-center font-bold text-white text-3xl lg:text-4xl lg:mt-10">Sebastián J. Macharette</h1>
</div>

            <div>
              <h2
              className='text-center text-4xl lg:mt-4 font-bold text-slate-200'
              >Portfolio Digital</h2>
            </div>
            <div>
              <h2
              className='lg:text-right text-4xl lg:mt-4 md:text-center  font-bold text-slate-300'
              >Full Stack Developer</h2>
            </div>
            <div>
              <h2
              className='text-right text-xl lg:mt-1 font-bold text-slate-300'
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
    className=' text-slate-100 sm:text-right lg:text-left font-semibold text-4xl'

  >
    Java Full Stack Developer
  </h2>
</div>
<div>
  <h2
    className=' text-slate-200 lg:mr-4 lg:mt-4 sm:text-center lg:text-right font-semibold text-4xl'

  >
    Python Full Stack Developer
  </h2>
</div>
<div>
  <h2
  className=' text-slate-300 lg:mt-6 lg:text-right sm:text-center font-semibold text-4xl'
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
