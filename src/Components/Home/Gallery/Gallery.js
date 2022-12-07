import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import "./gallery.css";
import useFetch from "../../../Hooks/useFetch";
const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const data = [
    {
      thumb:
        "https://images.unsplash.com/photo-1664574654578-d5a6a4f447bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
      title: "Image 1",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Image 2",
    },

    {
      thumb:
        "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Image 3",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
        title: "Image 4",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mzl8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Image 5",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1535303311164-664fc9ec6532?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mjd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Image 6",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1517433456452-f9633a875f6f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjR8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Image 7",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjF8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Image 8",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1568952433726-3896e3881c65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Image 9",
    },
    {
      thumb:
        "https://images.unsplash.com/photo-1664575196412-ed801e8333a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxzZWFyY2h8MTV8fHRlY2hub2xvZ3l8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
        title: "Image 10",
    },
  ];
  // data from strapi
//   const {loading,error,data}=useFetch("http://localhost:1337/api/galleries?populate=*");
//  const g_data=data;
//  console.log(g_data);
 const images = data.map((obj) => obj.thumb.replace("-small", "-large"));
  const openImageViewer = useCallback((index) => {
    setCurrentImage(index);
    setIsViewerOpen(true);
  }, []);

  const closeImageViewer = () => {
    setCurrentImage(0);
    setIsViewerOpen(false);
  };
  return (
    <section
      id="gallery"
      className="container  section__padding overflow-hidden text-gray-700"
    >
      <div className="flex flex-row justify-center items-center text-2xl ">
        <div className="gradient__bar w-1/6"></div>
        <h1
          className="container__heading font-bold text-center px-6 uppercase"
          style={{
            color: "var(--color-subtext)",
          }}
        >
          Recent Gallery
        </h1>
        <div className="gradient__bar w-1/6"></div>
      </div>
      <div className="container px-5 py-2 mx-auto lg:pt-24 lg:px-32">
        <div className="flex flex-wrap m-1 md:m-2">
          <div className="flex flex-wrap w-1/2">
            {data.map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="gallery_item w-full p-1 md:p-2 cursor"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <p className="px-3 text-center">{title}</p>
                    </div>
                    <img
                      src={thumb}
                      alt="gallery"
                      className="block object-cover h-64 w-full rounded-lg"
                    />{" "}
                  </div>
                </div>
              ))
              .slice(0, 1)}
            {data
              .map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="gallery_item w-1/2 p-1 md:p-2 cursor"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <p className="px-3 text-center">{title}</p>
                    </div>
                    <img
                      src={thumb}
                      alt="gallery"
                      className="block object-cover h-64 w-full rounded-lg"
                    />{" "}
                  </div>
                </div>
              ))
              .slice(1, 2)}
            {data
              .map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="gallery_item w-1/2 p-1 md:p-2 cursor"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <p className="px-3 text-center">{title}</p>
                    </div>
                    <img
                      src={thumb}
                      alt="gallery"
                      className="block object-cover h-64 w-full rounded-lg"
                    />{" "}
                  </div>
                </div>
              ))
              .slice(2, 3)}
          </div>
          <div className="flex flex-wrap w-1/2">
            {data
              .map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="gallery_item w-1/2 p-1 md:p-2 cursor"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <p className="px-3 text-center">{title}</p>
                    </div>
                    <img
                      src={thumb}
                      alt="gallery"
                      className="block object-cover h-64 w-full rounded-lg"
                    />{" "}
                  </div>
                </div>
              ))
              .slice(3, 4)}
            {data
              .map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="gallery_item w-1/2 p-1 md:p-2 cursor"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <p className="px-3 text-center">{title}</p>
                    </div>
                    <img
                      src={thumb}
                      alt="gallery"
                      className="block object-cover h-64 w-full rounded-lg"
                    />{" "}
                  </div>
                </div>
              ))
              .slice(4, 5)}
            {data
              .map(({ title, thumb }, index) => (
                <div
                  key={index}
                  onClick={() => openImageViewer(index)}
                  className="gallery_item w-full p-1 md:p-2 cursor"
                >
                  <div className="hover-bg">
                    <div className="hover-text">
                      <p className="px-3 text-center">{title}</p>
                    </div>
                    <img
                      src={thumb}
                      alt="gallery"
                      className="block object-cover h-64 w-full rounded-lg"
                    />{" "}
                  </div>
                </div>
              ))
              .slice(5, 6)}
          </div>
          {isViewerOpen && (
            <ImageViewer
              src={images}
              backgroundStyle={{ zIndex: 99999 }}
              currentIndex={currentImage}
              onClose={closeImageViewer}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
