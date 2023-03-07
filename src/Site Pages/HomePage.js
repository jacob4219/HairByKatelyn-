import React from "react";
import { Link } from 'react-router-dom';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function HomePage() {
  return (
    <div>
    
      

      <h1>Home</h1><div className="fade-in">
<div className="home-page">
        
        <Swiper
        loop={true}
        grabCursor={true}
          spaceBetween={30}
          centeredSlides={true}
          autoplay={{
            delay: 6000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          // navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="image-container">
              <img src="https://i.postimg.cc/DzbHQnN7/main.jpg" alt="Slide 1" />
              <div class="text-overlay">
                <h1 className="main-overlay-text">Katelyn Birky</h1>
                <p className="main-overlay-text-2">Hairstylist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="https://i.postimg.cc/dV3z18mk/Color.jpg" alt="Slide 2" />
              <div class="text-overlay">
                <h1 className="main-overlay-text">Discover Your Perfect Color</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="https://i.postimg.cc/nhWNQC0d/Wedding.jpg" alt="Slide 3" />
              <div class="text-overlay">
                <h1 className="main-overlay-text">Wedding Dreams Come True</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="static-images">
          <Link to="/services">
            <div class="image-container-static">
            <img src="https://i.postimg.cc/NMMC0Yw6/Pricing-Update.jpg" alt="1" />
              <div class="text-overlay-static">
                {/* <p className="main-overlay-text-static">Book Now!</p> */}
          </div></div></Link>


          <Link to="/book">
            <div class="image-container-static">
            <img src="https://i.postimg.cc/63mj2S9D/Booking.jpg" alt="2" />
              <div class="text-overlay-static">
                {/* <p className="main-overlay-text-static">View Policy</p> */}
          </div>
          </div>
          </Link>


          <Link to="/store">
            <div class="image-container-static">
            <img src="https://i.postimg.cc/Vv07jRv5/Online-Store.jpg" alt="3" />
            <div class="text-overlay-static">
              {/* <p className="main-overlay-text-static"></p> */}
            </div>
          </div>
          </Link>


          <Link to="/cancellation">
            <div class="image-container-static">
            <img src="https://i.postimg.cc/1zMYPXbR/Cancellation-Policy.jpg" alt="4" />
            <div class="text-overlay-static">
            </div>
          </div>
          </Link>
          
        </div>
        
      </div>
      
    </div></div>
  );
}

export default HomePage;