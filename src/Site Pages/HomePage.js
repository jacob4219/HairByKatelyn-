import React, { useState, useEffect } from 'react';

const HomePage = () => {
  const [currentImage, setCurrentImage] = useState(0);
  const [images, setImages] = useState([
    "https://via.placeholder.com/1000x400/000000/ffffff?text=Slide+1",
    "https://via.placeholder.com/1000x400/000000/ffffff?text=Slide+2",
    "https://via.placeholder.com/1000x400/000000/ffffff?text=Slide+3",
    "https://via.placeholder.com/1000x400/000000/ffffff?text=Slide+4",
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage((currentImage + 1) % images.length);
    }, 10000);

    return () => clearInterval(intervalId);
  }, [currentImage, images]);

  return (
    <div className="fade-in">
      <div className="slideshow">
        <div
          className="slideshow-image"
          style={{ backgroundImage: `url(${images[currentImage]})` }}
        >
          <div className="slideshow-text">
            <p>Slide {currentImage + 1}</p>
          </div>
        </div>
      </div>
      <div className="static-images">
        <div className="static-image">
          <div
            className="static-image-bg"
            style={{ backgroundImage: `url(${images[0]})` }}
          />
          <div className="static-image-text">
            <p>Image 1</p>
          </div>
        </div>
        <div className="static-image">
          <div
            className="static-image-bg"
            style={{ backgroundImage: `url(${images[1]})` }}
          />
          <div className="static-image-text">
            <p>Image 2</p>
          </div>
        </div>
        <div className="static-image">
          <div
            className="static-image-bg"
            style={{ backgroundImage: `url(${images[2]})` }}
          />
          <div className="static-image-text">
            <p>Image 3</p>
          </div>
        </div>
        <div className="static-image">
          <div
            className="static-image-bg"
            style={{ backgroundImage: `url(${images[3]})` }}
          />
          <div className="static-image-text">
            <p>Image 4</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;


