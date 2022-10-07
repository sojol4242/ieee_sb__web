import React, { useState, useCallback } from "react";
import ImageViewer from "react-simple-image-viewer";
import "./gallery.css";
const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isViewerOpen, setIsViewerOpen] = useState(false);
  const data = [
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
    {
      thumb:
        "https://scontent.fdac116-1.fna.fbcdn.net/v/t39.30808-6/299963469_378852477760308_6058236168118316889_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=XCoGiVXXl34AX-s9Mbk&_nc_ht=scontent.fdac116-1.fna&oh=00_AT_sH8cDTZCen17vs1JyFGekvP5vH2YKRtmR4bhfT58NKA&oe=6338A604",
      title: "Seminar on Starting Research Career ",
      para: " Officia consectetur proident do nisi est occaecat anim velit sint. Ad sint cillum proident ullamco incididunt dolor quis ipsum culpa.Enim velit aute laboris consectetur non magna eu et occaecat duis laboris in Lorem adipisicing. Dolore est proident proident dolore. Laboris aliquip officia enim voluptate et fugiat minim occaecat id occaecat. Dolor incididunt Lorem fugiat enim reprehenderit eiusmod est. Cillum incididunt quis irure commodo in.",
    },
  ];
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
    <div id="gallery" className="m-5 section__padding">
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
      <div className="gallery_items">
        {data.map(({ title, thumb }, index) => (
          <div
            key={index}
            onClick={() => openImageViewer(index)}
            className="gallery_item cursor"
          >
            <div className="hover-bg">
              <div className="hover-text">
                <p className="px-3 text-center">{title}</p>
              </div>
              <img src={thumb} alt="Project Title" />{" "}
            </div>
          </div>
        ))}

        {isViewerOpen && (
          <ImageViewer
            src={images}
            backgroundStyle={{ zIndex: 99999 }}
            currentIndex={currentImage}
            onClose={closeImageViewer}
          />
        )}
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
  );
};

export default Gallery;
