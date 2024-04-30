import React from 'react';
import FullStack from '../assets/images/full-stack.webp';

function Footer() {
    const obtenerFecha = () => {
        const meses = [
          "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", 
          "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"
        ];
        const diasSemana = [
          "Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"
        ];
        const fecha = new Date();
        const dia = fecha.getDate();
        const mes = meses[fecha.getMonth()];
        const ano = fecha.getFullYear();
        const diaSemana = diasSemana[fecha.getDay()];
        return `${diaSemana}, ${dia} de ${mes} de ${ano}`;
      };
      

  return (
    <footer className="bg-gray-500 dark:bg-gray-900 w-full">
      <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <a href="https://flowbite.com/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={FullStack} className="h-12" alt="Flowbite Logo" />
          </a>
          <ul className="flex flex-wrap items-center mb-6 text-sm  font-bold sm:mb-0 dark:text-gray-400">
            <li>
              <a href="/home" className="hover:underline text-black hover:text-white me-4 md:me-6">Home</a>
            </li>
            <li>
              <a href="/skills" className="hover:underline text-black hover:text-white me-4 md:me-6">Skills</a>
            </li>
            <li>
              <a href="/estudios" className="hover:underline text-black hover:text-white me-4 md:me-6">Estudios</a>
            </li>
            <li>
              <a href="/proyectos" className="hover:underline text-black hover:text-white me-4 md:me-6 ">Proyectos</a>
            </li>
            <li>
              <a href="/contacto" className="hover:underline text-black hover:text-white ">Contacto</a>
            </li>
          </ul>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span className="block text-base font-bold text-black sm:text-center dark:text-white">
          © {new Date().getFullYear()} Flowbite™ . All Rights Reserved.
          <br />
          {obtenerFecha()}
        </span>
      </div>
    </footer>
  );
}

export default Footer;
