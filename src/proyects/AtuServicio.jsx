import React, { useState } from "react";
import imageOne from "../assets/images/atuservicio/atuOne.png";
import imageTwo from "../assets/images/atuservicio/atuTwo.png";
import imageTree from "../assets/images/atuservicio/atuTree.png";
import imageFour from "../assets/images/atuservicio/atuFour.png";
import imageFive from "../assets/images/atuservicio/atuFive.png";

function AtuServicio() {
  const url = "https://www.youtube.com/embed/rOX6NIsb-p4?si=yAEVGQEjrXD1Xd3b";
  const [selectedImage, setSelectedImage] = useState(url);

  const images = [imageOne, imageTwo, imageTree, imageFour, imageFive];

  const handleImageClick = (imageUrl) => {
    if (imageUrl === imageOne) {
      setSelectedImage(url);
    } else {
      setSelectedImage(imageUrl);
    }
  };

  return (
    <div>
      <div className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-stone- dark:text-white dark:bg-gray-800">
        <p className="mt-1 text-xl font-normal text-gray-900 dark:text-gray-400">
          Presentamos nuestro proyecto Integrador basado en Spring Boot con
          Spring Security, JWT y MySQL, incorporando Thymeleaf para una
          experiencia dinámica. Proporciona a los usuarios una plataforma segura
          para encontrar servicios especializados y ofrece a los profesionales
          la oportunidad de ofrecer sus habilidades. Este proyecto representa un
          avance significativo en la convergencia de la tecnología y las
          necesidades del mercado, ofreciendo una solución integral para la
          búsqueda y oferta de servicios. <a
          target="blank_"
          href="https://github.com/sebastianjmacharette/a-tu-servicio-java-spring-boot---thymeleaf.git"
           className="font-bold"> Repositorio Público</a>
        </p>
      </div>

      <div className="bg-gray-200 flex  flex-center justify-center w-full mx-auto mt-4">
        <div className="grid gap-4 max-w-screen-lg mx-auto">
          {selectedImage === url ? (
            <iframe
              className="w-full h-80 md:h-96 lg:h-120"
              src={url}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          ) : (
            <div className="flex justify-center items-center h-auto md:max-h-80 lg:max-h-96 xl:max-h-120 rounded-lg">
              <img
                className="max-w-full rounded-xl shadow max-h-full"
                src={selectedImage}
                alt=""
              />
            </div>
          )}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {images.map((image, index) => (
              <div key={index} onClick={() => handleImageClick(image)}>
                <img
                  className="w-full h-auto md:max-h-28 lg:max-h-32 xl:max-h-40 rounded-lg cursor-pointer"
                  src={image}
                  alt=""
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default AtuServicio;
