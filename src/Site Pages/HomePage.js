import React from "react";
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
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="image-container">
              <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/47792670_2239133116412139_1696221608986804224_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=174925&_nc_ohc=-KxrqqMXh3gAX8o4De6&_nc_ht=scontent-ord5-2.xx&oh=00_AfB6osYThlpbCEswfA6nFBIJqDbHKcnrrCfK7j5vubRruw&oe=640B9390" alt="Slide 1" />
              <div class="text-overlay">
                <h1 className="main-overlay-text">Katelyn Birky</h1>
                <p className="main-overlay-text-2">Hairstylist</p>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/327462593_878067920134276_7845143632512178910_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=OkRSLY3cgdYAX8wSaeA&_nc_ht=scontent-ord5-2.xx&oh=00_AfDrmOdDrnkdSgWrAJPH0Rqj96sLlgl1rYaMxcD2RwntJw&oe=64027A34" alt="Slide 2" />
              <div class="text-overlay">
                <h1 className="main-overlay-text">Discover Your Perfect Color</h1>
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image-container">
              <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/292675124_451200183679957_5757115862384107057_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=lGfbJFZEXM0AX-WlKUM&tn=qZC8PrD-8OvLrnOu&_nc_ht=scontent-ord5-2.xx&oh=00_AfB-N6cTbvgf8zOEgchWSPdhPUJieu44T_j6xN25L57uZg&oe=6401E5EE" alt="Slide 3" />
              <div class="text-overlay">
                <h1 className="main-overlay-text">Wedding Dreams Come True</h1>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>

        <div className="static-images">
          <a href="/services">
            <div class="image-container-static">
            <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/312951748_535731411893500_7092277791842944265_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=730e14&_nc_ohc=iPoz_NjgtpkAX83GK0H&_nc_ht=scontent-ord5-2.xx&oh=00_AfDIiFSDdCOY1JsVxNXJ798_CiYuaJKV3I7LEt2oxBcajw&oe=6400FDB4" alt="1" />
              <div class="text-overlay-static">
                {/* <p className="main-overlay-text-static">Book Now!</p> */}
          </div></div>
          </a>
          <a href="/book">
            <div class="image-container-static">
            <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/165525082_2939725103019600_6506360652530317141_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YdPDCWAzjtIAX94Dfa_&_nc_ht=scontent-ord5-2.xx&oh=00_AfDqLOe5D7CFnrCQyc6-QpOxxfDw3vFhNiWMU4sGrBpFPA&oe=640E9F49" alt="2" />
              <div class="text-overlay-static">
                {/* <p className="main-overlay-text-static">View Policy</p> */}
          </div>
          </div>
          </a>
          <a href="/store">
            <div class="image-container-static">
            <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/90905765_2620125341646246_638114677125021696_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9267fe&_nc_ohc=fEUlK7mSlBIAX-0NY0c&_nc_ht=scontent-ord5-2.xx&oh=00_AfCF5a9yb9nX98aJYJuGhL-Tx-RQ344PS-_cMzVSbhO7eg&oe=640E9278" alt="3" />
            <div class="text-overlay-static">
              {/* <p className="main-overlay-text-static"></p> */}
            </div>
          </div>
          </a>
          <a href="/cancellation">
            <div class="image-container-static">
            <img src="https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/277728832_3220118411646933_2693453111627552523_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=a26aad&_nc_ohc=XmDJkpPY2xgAX89pxQC&tn=qZC8PrD-8OvLrnOu&_nc_ht=scontent-ord5-2.xx&oh=00_AfCsc4B5mM4W4JNDOiu8XZfyr1eqpDyo_Z9wRHrzYmMt8A&oe=64029B12" alt="4" />
            <div class="text-overlay-static">
            </div>
          </div>
          </a>
          
        </div>
        
      </div>
      
    </div></div>
  );
}

export default HomePage;