// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import "swiper/css/navigation";
// import { Autoplay, Pagination, Navigation } from "swiper";

// function HomePage() {
//   return (
//     <div className="home-page">
//       <Swiper
//         spaceBetween={30}
//         centeredSlides={true}
//         autoplay={{
//           delay: 9000,
//           disableOnInteraction: false,
//         }}
//         pagination={{
//           clickable: true,
//         }}
//         navigation={true}
//         modules={[Autoplay, Pagination, Navigation]}
//         className="mySwiper"
//       >
//         <SwiperSlide>
//         <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/292675124_451200183679957_5757115862384107057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7U_8PjMEScIAX_JVhXE&_nc_ht=scontent-ord5-2.xx&oh=00_AfB_-nlt1lMva9A3o0nm_HjYHQOTPcaBsIku_v5vyPfjNQ&oe=63E830AE" alt="Slide 3" />
//           Slide 1</SwiperSlide>
//         <SwiperSlide>
//         <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/298710816_470314548435187_6262191100873366381_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=OMF2eRg_PwkAX8ayMMR&_nc_ht=scontent-ord5-2.xx&oh=00_AfDCr0Piu---hnDl4kWWKo0y6WXK7OrgGEyU8rOTjABJOw&oe=63E7EBB7" alt="Slide 3" />
//           Slide 2</SwiperSlide>
//   <SwiperSlide>
//     <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/327462593_878067920134276_7845143632512178910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=3EWVQMTltIMAX-cdpK8&tn=RGR2Um_kH-gcyI2K&_nc_ht=scontent-ord5-2.xx&oh=00_AfDR07xeJF1Ubz9DaT3-wPdc8Cm5mTcSOTPhZz9Vjn0wSg&oe=63E8C4F4" alt="Slide 3" />
//   One Shot!</SwiperSlide>
//       </Swiper>

//     </div>
//   );
// }

// export default HomePage;


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
          delay: 4500,
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
          <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/292675124_451200183679957_5757115862384107057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=7U_8PjMEScIAX_JVhXE&_nc_ht=scontent-ord5-2.xx&oh=00_AfB_-nlt1lMva9A3o0nm_HjYHQOTPcaBsIku_v5vyPfjNQ&oe=63E830AE" alt="Slide 1" />
          <div className="text-overlay">
            <h1 className="main-overlay-text">Book Now!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/327462593_878067920134276_7845143632512178910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=3EWVQMTltIMAX-cdpK8&tn=RGR2Um_kH-gcyI2K&_nc_ht=scontent-ord5-2.xx&oh=00_AfDR07xeJF1Ubz9DaT3-wPdc8Cm5mTcSOTPhZz9Vjn0wSg&oe=63E8C4F4" alt="Slide 2" />
          <div className="text-overlay">
            <h1 className="main-overlay-text">Available For Weddings!</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://via.placeholder.com/500x500" alt="Slide 3" />
          <div className="text-overlay">
            <h1 className="main-overlay-text">Slide 3</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HomePage;



