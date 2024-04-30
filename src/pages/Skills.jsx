import React from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Logo from '../assets/images/full-stack.webp';
import Image1 from '../assets/images/skills/Image1.png';
import Image2 from '../assets/images/skills/Image2.png';
import Image3 from '../assets/images/skills/Image3.png';
import Image4 from '../assets/images/skills/Image4.png';
import Image5 from '../assets/images/skills/Image5.png';
import Image6 from '../assets/images/skills/Image6.png';
import Image7 from '../assets/images/skills/Image7.png';
import Image8 from '../assets/images/skills/Image8.png';
import Image9 from '../assets/images/skills/Image9.png';
import Image10 from '../assets/images/skills/Image10.png';
import Image11 from '../assets/images/skills/Image11.png';
import Image12 from '../assets/images/skills/Image12.png';
import Image13 from '../assets/images/skills/Image13.png';
import Image14 from '../assets/images/skills/Image14.png';
import Image15 from '../assets/images/skills/Image15.png';
import Image16 from '../assets/images/skills/Image16.png';
import Image17 from '../assets/images/skills/Image17.png';
import Image18 from '../assets/images/skills/Image18.png';
import Image19 from '../assets/images/skills/Image19.png';
import Image20 from '../assets/images/skills/Image20.png';
import Image21 from '../assets/images/skills/Image21.png';
import Image22 from '../assets/images/skills/Image22.png';
import Image23 from '../assets/images/skills/Image23.png';
import Image24 from '../assets/images/skills/Image24.png';
import Image25 from '../assets/images/skills/Image25.png';
import Image26 from '../assets/images/skills/Image26.png';
import Image27 from '../assets/images/skills/Image27.png';
import Image28 from '../assets/images/skills/Image28.png';
import Image29 from '../assets/images/skills/Image29.png';
import Image30 from '../assets/images/skills/Image30.png';
import Image31 from '../assets/images/skills/Image31.png';
import Image32 from '../assets/images/skills/Image32.png';
import Image33 from '../assets/images/skills/Image33.png';
import Image34 from '../assets/images/skills/Image34.png';
import Image35 from '../assets/images/skills/Image35.png';

function Skills() {
  const images = [
    Image1,
    Image2,
    Image3,
    Image4,
    Image5,
    Image6,
    Image7,
    Image8,
    Image9,
    Image10,
    Image11,
    Image12,
    Image13,
    Image14,
    Image15,
    Image16,
    Image17,
    Image18,
    Image19,
    Image20,
    Image21,
    Image22,
    Image23,
    Image24,
    Image25,
    Image26,
    Image27,
    Image28,
    Image29,
    Image30,
    Image31,
    Image32,
    Image33,
    Image34,
    Image35
  ];
  return (
    <div className="bg-slate-200">
      <Navbar />
      <div className="w-full flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 p-4">
          {/* Contenido del primer div */}
          <div data-aos="fade-right">
            <p className="lg:text-right sm:text-center lg:text-xl sm:text-base text-gray-600">
              Me especializo en la creación de <span className="font-bold">experiencias digitales únicas y
              personalizadas</span>  que se adaptan a las necesidades específicas de
              misclientes. Poseo experiencia en el desarrollo completo
              utilizando <span className="font-bold">Java y Python,</span>  así como en tecnologías clave como <span className="font-bold">HTML,
              CSS y JavaScript.</span>  Mi capacidad abarca desde la creación de sitios
              webdinámicos hasta el desarrollo de aplicaciones web interactivas.
            </p>
          </div>
        </div>
        <div className="w-full lg:w-1/2 p-4">
          {/* Contenido del segundo div */}
          <div data-aos="fade-left">
            <p className="lg:text-left sm:text-center lg:text-xl sm:text-base text-gray-500">
              Mi conocimiento profundo de  <span className="font-bold">frameworks como React y Spring Boot</span> me
              permite diseñar soluciones innovadoras y eficientes que
              añaden valor a cada proyecto que emprendo. Mi compromiso radica
              en  <span className="font-bold">fusionar mi creatividad en el diseño con habilidades técnicas
              sólidas</span>  para lograr resultados excepcionales y atractivos para el
              usuarioexperto.
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-down" className="flex flex-center justify-center">
        <img className="h-20" src={Logo} alt="" />
        
      </div>
      <div className=" flex flex-center justify-center lg:mt-10 lg:mb-10 sm:mt-4 sm:mn-4">
      <h2
      className="text-gray-600 text-4xl font-bold underline"
      >Skills</h2>
      </div>
      <div className="flex flex-wrap justify-center">
        {images.map((image, index) => (
          <div key={index} className="p-2">
            <img src={image} alt={`Image ${index + 1}`} className="w-32 h-32 rounded-2xl sm:w-28 sm:h-28 md:w-24 md:h-24 
            lg:w-20 lg:h-20 object-cover" />
          </div>
        ))}
      </div>
      <div className=" flex flex-center justify-center lg:mt-10 lg:mb-10 sm:mt-4 sm:mn-4">
      <h2
      className="text-gray-600 text-4xl font-bold underline"
      >Soft Kills</h2>
      </div>
      <div  className="flex flex-wrap justify-center lg:mb-10">
  <span  className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Comunicación efectiva</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Trabajo en equipo</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Empatía</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Inteligencia emocional</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Adaptabilidad</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Creatividad</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Pensamiento crítico</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Gestión del tiempo</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Liderazgo</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Colaboración</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Adaptabilidad</span>
  <span className="bg-gray-300 text-gray-600 text-xl font-medium me-2 px-2.5 py-0.5 rounded
     dark:bg-gray-700 dark:text-gray-400 border border-gray-800 m-4">Empatía cultural</span>
</div>

      <Footer />
    </div>
  );
}

export default Skills;
