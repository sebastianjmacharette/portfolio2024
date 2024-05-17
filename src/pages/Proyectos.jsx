import React from 'react';
import Navbar from '../shared/Navbar';
import Footer from '../shared/Footer';
import SistemaMedicoSwing from '../proyects/SistemaMedicoSwing';
import MolachinoViajes from '../proyects/MolachinoViajes';
import AtuServicio from '../proyects/AtuServicio';
function Proyectos() {
  return (
    <div className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ">
      <Navbar />
      <div className=" min-h-screen flex justify-center items-center">
        <div className="w-full md:w-full lg:w-full flex flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/2   p-4">
          
          <SistemaMedicoSwing />
          </div>
          <div className="w-full md:w-1/2 lg:w-1/2   p-4">
            <MolachinoViajes/>
          </div>
        </div>
      </div>
      <div className="  min-h-screen flex justify-center items-center">
        <div className="w-full md:w-full lg:w-full flex flex-col md:flex-row lg:flex-row">
          <div className="w-full md:w-1/2 lg:w-1/2   p-4">
          < AtuServicio />

          </div>
          <div className="w-full md:w-1/2 lg:w-1/2   p-4">
            <MolachinoViajes/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default Proyectos;
