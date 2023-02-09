import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";

function HomePage() {
  return (
    <div className="home-page">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 6000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/47792670_2239133116412139_1696221608986804224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=-KxrqqMXh3gAX8o4De6&_nc_ht=scontent-ord5-2.xx&oh=00_AfB6osYThlpbCEswfA6nFBIJqDbHKcnrrCfK7j5vubRruw&oe=640B9390" alt="Slide 1" />
          <div className="text-overlay">
            <h1 className="main-overlay-text">Katelyn Birky</h1><p className="main-overlay-text-2">Hairstylist</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/327462593_878067920134276_7845143632512178910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=3EWVQMTltIMAX-cdpK8&tn=RGR2Um_kH-gcyI2K&_nc_ht=scontent-ord5-2.xx&oh=00_AfDR07xeJF1Ubz9DaT3-wPdc8Cm5mTcSOTPhZz9Vjn0wSg&oe=63E8C4F4" alt="Slide 2" />
          <div className="text-overlay">
            <h1 className="main-overlay-text">Discover Your Perfect Color</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/292675124_451200183679957_5757115862384107057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7U_8PjMEScIAX_JVhXE&_nc_ht=scontent-ord5-2.xx&oh=00_AfB_-nlt1lMva9A3o0nm_HjYHQOTPcaBsIku_v5vyPfjNQ&oe=63E830AE" alt="Slide 3" />
          <div className="text-overlay">
            <h1 className="main-overlay-text">Wedding Dreams Come True</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePage;



