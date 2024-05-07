import React, { useState } from "react";
import imageOne from "../assets/images/molachino/molaOne.png";
import imageTwo from "../assets/images/molachino/molaTwo.png";
import imageTree from "../assets/images/molachino/molaTree.png";
import imageFour from "../assets/images/molachino/molaFour.png";
import imageFive from "../assets/images/molachino/molaFive.png";

function MolachinoViajes() {
  const url = "https://www.youtube.com/embed/zd66YwNzqIU?si=cP_DWy-zVbLEcw9D";
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
           Web oficial de Molachino Viajes. Desarrollada con tecnología de vanguardia, la
          plataforma se ha creado utilizando React en el frontend, con la
          incorporación de React Router DOM, garantizando una experiencia de
          usuario fluida e interactiva. Por otro lado, en el backend, se ha
          implementado Spring Boot, destacándose por su robustez y eficiencia.
          los padres pueden tener un control en
          tiempo real sobre los viajes de sus hijos, todo ello manteniendo un
          estricto nivel de privacidad.
          <a
            target="blank_"
            href="https://molachinoviajes.com"
            className="font-bold"
          >
            {" "}
            Pagina web
          </a>
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

export default MolachinoViajes;
