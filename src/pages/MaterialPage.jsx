

  import React, { useEffect, useState, useRef } from "react";
  import { useParams } from "react-router-dom";
  import axios from "axios";
  
  const MaterialPage = () => {
    const params = useParams();
    const [materials, setMaterials] = useState([]);
    const classes = ["9th", "10th", "11th Science","11th Commerce", "12th Science","12th Commerce"];

    const classRefs = useRef({});
  
    // Fetch material data
    const fetchMaterial = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/v1/get-links?type=${params.type}`
        );
        setMaterials(response.data.data);
      } catch (error) {
        console.error("Error fetching material:", error);
      }
    };
  
    useEffect(() => {
      fetchMaterial();
    }, [params]);
  
    const scrollToClass = (classNum) => {
        const offset = 80; // Offset for spacing below the screen
        const classElement = classRefs.current[classNum];
        if (classElement) {
          const top = classElement.getBoundingClientRect().top + window.scrollY - offset;
          window.scrollTo({ top, behavior: "smooth" });
        }
      };
    return (
      <div className="min-h-screen ">
        {/* Header */}
        <div className="w-full flex justify-center items-center py-6 ">
          <h2 className="font-bold text-2xl">
            {params.type === "notes"
              ? "Notes"
              : params.type === "questionpaper"
              ? "Question Papers"
              : "Reference Books"}
          </h2>
        </div>
  
        {/* Content Section */}
        <div className="p-4 flex flex-col md:flex-row gap-6">
          {/* Left Content */}
          <div className="flex flex-col w-full md:w-3/5 gap-6">
            {classes.map((classNum) => (
              <div
                key={classNum}
                className="bg-white p-6 rounded-lg shadow-md"
                ref={(el) => (classRefs.current[classNum] = el)}
              >
                <h3 className="font-bold text-xl mb-4">Class {classNum}</h3>
                {materials
                  .filter((material) => material.Class === classNum)
                  .map((material, index) => (
                    <div key={index} className="p-4 border-b">
                      <h4 className="font-semibold text-lg text-blue-800">
                        {material.subject}
                      </h4>
                      <p className="text-gray-600">Chapter: {material.chapter}</p>
                      <a
                        href={material.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-blue-500 hover:underline"
                      >
                        View Material
                      </a>
                    </div>
                  ))}
              </div>
            ))}
          </div>
  
          {/* Right Sidebar */}
          <div className="hidden md:block bg-white p-6 w-2/5 rounded-lg shadow-md sticky top-20">
            <h1 className="font-bold text-lg mb-4">Select Class</h1>
            <div className="flex flex-col gap-3">
              {classes.map((classNum, index) => (
                <p
                  key={index}
                  className="text-blue-800 text-base cursor-pointer hover:underline"
                  onClick={() => scrollToClass(classNum)}
                >
                  Class {classNum}
                </p>
              ))}
            </div>
          </div>
        </div>
  
        {/* Mobile View (Bottom Navigation) */}
        <div className="md:hidden bg-white p-4 w-full shadow-md fixed bottom-0 left-0">
          <h1 className="font-bold text-lg">Select Class</h1>
          <div className="p-2 flex flex-col gap-2">
            {classes.map((classNum, index) => (
              <p
                key={index}
                className="text-blue-800 text-base cursor-pointer hover:underline"
                onClick={() => scrollToClass(classNum)}
              >
                Class {classNum}
              </p>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default MaterialPage;
  