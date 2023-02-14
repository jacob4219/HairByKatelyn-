// import React from 'react';
// import { Swiper, SwiperSlide } from 'swiper/react';
// import { EffectCoverflow, Pagination, Navigation } from "swiper";


// const PortfolioPage = () => {

//   return (
//     <div className="fade-in">
//       <>
//       <h1>Portfolio</h1>
//     <div className="portfolio-slides-1">
//       <Swiper
//             loop={true}
//             effect={"coverflow"}
//             grabCursor={true}
//             centeredSlides={true}
//             slidesPerView={"auto"}
//             coverflowEffect={{
//               rotate: 50,
//               stretch: 0,
//               depth: 100,
//               modifier: 1,
//               slideShadows: true,
//             }}
//             pagination={{
//               clickable: true,
//             }}
//             navigation={true}
//             modules={[EffectCoverflow, Pagination, Navigation]}
//             className="mySwiper">
//             <SwiperSlide>
//               <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
//             </SwiperSlide>

//       </Swiper>
      
//       </div>
      

//         <div className="portfolio-feed-container">
//       <iframe title="portfolio-feed" width="100%" height="1060vh" src="https://www.instagram.com/katelynbirkyhairstylist/embed" allowtransparency="true"></iframe>
//     </div></>
//     </div>
//   );
// };

// export default PortfolioPage;

import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const PortfolioPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleries = [
    [
      {
        src: 'https://swiperjs.com/demos/images/color-1.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/color-2.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/color-3.jpg'
      }
    ],
    [
      {
        src: 'https://swiperjs.com/demos/images/highlights-1.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/highlights-2.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/highlights-3.jpg'
      }
    ],
    [
      {
        src: 'https://swiperjs.com/demos/images/balayage-1.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/balayage-2.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/balayage-3.jpg'
      }
    ],
    [
      {
        src: 'https://swiperjs.com/demos/images/wedding-1.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/wedding-2.jpg'
      },
      {
        src: 'https://swiperjs.com/demos/images/wedding-3.jpg'
      }
    ]
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="fade-in">
      <h1>Portfolio</h1>
      <div className="portfolio-menu">
        <ul className="portfolio-menu-list">
          <li className="portfolio-menu-item" onClick={() => handleClick(0)}>Color</li>
          <li className="portfolio-menu-item" onClick={() => handleClick(1)}>Highlights</li>
          <li className="portfolio-menu-item" onClick={() => handleClick(2)}>Balayage</li>
          <li className="portfolio-menu-item" onClick={() => handleClick(3)}>Wedding</li>
        </ul>
      </div>
      <div className="portfolio-slides-1">
        <Swiper
          loop={true}
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView ={"auto"}
coverflowEffect={{
rotate: 50,
stretch: 0,
depth: 100,
modifier: 1,
slideShadows: true,
}}
pagination={{
clickable: true,
}}
navigation={true}
modules={[EffectCoverflow, Pagination, Navigation]}
className="mySwiper"
>
{galleries[activeIndex].map((item, index) => (
<SwiperSlide key={index}>
<img src={item.src} alt={item.src} />
</SwiperSlide>
))}
</Swiper>
</div>
{/* <div className="insta-feed">
<h1 >Latest From Instagram</h1>
</div> */}
{/* <div className="portfolio-feed-container">
<iframe
       title="portfolio-feed"
       width="100%"
       height="1060vh"
       src="https://www.instagram.com/katelynbirkyhairstylist/embed"
       allowtransparency="true"
     ></iframe>
</div> */}
</div>
);
};

export default PortfolioPage;
