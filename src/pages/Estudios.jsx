import React, { useState } from "react";
import Navbar from "../shared/Navbar";
import Footer from "../shared/Footer";
import Egg1 from "../assets/images/egg/egg1.png";
import Egg2 from "../assets/images/egg/egg2.png";
import Egg3 from "../assets/images/egg/egg3.png";
import Egg4 from "../assets/images/egg/egg4.png";
import Egg5 from "../assets/images/egg/egg5.png";
import Egg6 from "../assets/images/egg/egg6.png";
import Google1 from "../assets/images/google/Google1.png";
import Google2 from "../assets/images/google/Google2.png";
import Google3 from "../assets/images/google/Google3.png";
import Google4 from "../assets/images/google/Google4.png";
import Google5 from "../assets/images/google/Google5.png";
import Codo1 from "../assets/images/codo/Codo1.png";
import TodoCode1 from "../assets/images/todo code/codo1.png";
import TodoCode2 from "../assets/images/todo code/codo2.png";
import Telefonica1 from "../assets/images/telefonica/Telefonica1.png";
import Donweb1 from "../assets/images/donweb/Donweb1.png";
import Donweb2 from "../assets/images/donweb/Donweb2.png";
import Donweb3 from "../assets/images/donweb/Donweb3.png";
import Donweb4 from "../assets/images/donweb/Donweb4.png";
import Donweb5 from "../assets/images/donweb/Donweb5.png";
import CodigoFacilito1 from "../assets/images/codigo facilito/CodigoFacilito1.png";
import CodigoFacilito2 from "../assets/images/codigo facilito/CodigoFacilito2.png";

function Estudios() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const images = [
    { url: Egg1, category: "Egg" },
    { url: Egg2, category: "Egg" },
    { url: Egg3, category: "Egg" },
    { url: Egg4, category: "Egg" },
    { url: Egg5, category: "Egg" },
    { url: Egg6, category: "Egg" },
    { url: Codo1, category: "CodoAcodo" },
    { url: Google1, category: "Google" },
    { url: Google2, category: "Google" },
    { url: Google3, category: "Google" },
    { url: Google4, category: "Google" },
    { url: Google5, category: "Google" },
    { url: TodoCode1, category: "TodoCode" },
    { url: TodoCode2, category: "TodoCode" },
    { url: Telefonica1, category: "Telefonica" },
    { url: Donweb1, category: "Donweb" },
    { url: Donweb2, category: "Donweb" },
    { url: Donweb3, category: "Donweb" },
    { url: Donweb4, category: "Donweb" },
    { url: Donweb5, category: "Donweb" },
    { url: CodigoFacilito1, category: "CodigoFacilito" },
    { url: CodigoFacilito2, category: "CodigoFacilito" },







  
  ];

  const filteredImages =
    selectedCategory === "all"
      ? images
      : images.filter((image) => image.category === selectedCategory);

  return (
    <div className="bg-slate-200">
      <Navbar />

      <div className="flex items-center justify-center py-4 md:py-8 flex-wrap">
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800${
            selectedCategory === "all" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("all")}
        >
          All categories
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "Egg" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("Egg")}
        >
          Egg Cooperation
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "CodoAcodo" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("CodoAcodo")}
        >
          Codo a Codo
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "Google" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("Google")}
        >
          Google
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "TodoCode" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("TodoCode")}
        >
          Todo Code
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "Telefonica" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("Telefonica")}
        >
          Telefónica
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "Donweb" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("Donweb")}
        >
          DonWeb
        </button>
        <button
          type="button"
          className={`text-white  hover:text-white border shadow-xl  shadow-gray-700 border-gray-800 bg-gray-500 hover:bg-gray-800 focus:ring-4 
          focus:outline-none focus:ring-gray-500 rounded-2xl  text-base font-medium px-5 py-2.5 text-center me-3 mb-3
           dark:border-gray-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900
            dark:focus:ring-gray-800 ${
            selectedCategory === "CodigoFacilito" ? "bg-blue-700 text-white" : ""
          }`}
          onClick={() => setSelectedCategory("CodigoFacilito")}
        >
          Codigo Facilito
        </button>
        {/* final de botones*/}
      </div>

      <div className="grid grid-cols-2 m-4 md:grid-cols-3 gap-4">
        {filteredImages.map((image, index) => (
          <div key={index}>
            <img
              className="h-auto max-w-full rounded-lg cursor-pointer"
              src={image.url}
              alt=""
              onClick={() => handleImageClick(image.url)}
            />
          </div>
        ))}
      </div>

      {selectedImage && (
        <div className="fixed top-0 left-0 z-50 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className=" p-4 rounded-lg h-4/5">
            <img src={selectedImage} alt="" className="max-w-full max-h-full" />
            <button
              type="button"
              className={`text-gray-700 hover:text-white mt-6 border border-gray-900 bg-white hover:bg-gray-700 
            focus:ring-4 focus:outline-none focus:ring-gray-300 rounded-2xl
            text-base font-medium px-5 py-2.5 text-center me-3 mb-3 dark:border-blue-500 dark:text-blue-500
             dark:hover:text-white dark:hover:bg-blue-500 dark:bg-gray-900 dark:focus:ring-blue-800 ${
               selectedCategory === "all" ? "bg-gray-700 text-white" : ""
             }`}
              onClick={() => setSelectedImage(null)}
            >
              Close
            </button>
            
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Estudios;
