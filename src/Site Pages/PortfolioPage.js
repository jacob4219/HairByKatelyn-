import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const PortfolioPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleries = [
    [
      {
        src: 'https://i.postimg.cc/yxXysrbq/One.jpg'
      },
      {
        src: 'https://i.postimg.cc/pTjB1dQL/Two.jpg'
      },
      {
        src: 'https://i.postimg.cc/qqdGfdQX/Three.jpg'
      }
    ],
    [
      {
        src: 'https://i.postimg.cc/c4CvsbjQ/One.jpg'
      },
      {
        src: 'https://i.postimg.cc/zXQV3kZ4/Two.jpg'
      },
      {
        src: 'https://i.postimg.cc/KYSjDvYN/Three.jpg'
      }
    ],
    [
      {
        src: 'https://i.postimg.cc/pL9knk9j/One.jpg'
      },
      {
        src: 'https://i.postimg.cc/tgW5BTNC/Three.jpg'
      },
      {
        src: 'https://i.postimg.cc/zG97wWWc/Two.jpg'
      }
    ],
    [
      {
        src: 'https://i.postimg.cc/fbzLrqxt/One.jpg'
      },
      {
        src: 'https://i.postimg.cc/CKc1TCNv/Two.jpg'
      },
      {
        src: 'https://i.postimg.cc/vBDmQ12G/Three.jpg'
      }
    ]
  ];

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <h1>Portfolio</h1><div className="fade-in">
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
          slidesPerView ={"1"}
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
className="mySwiper">
{galleries[activeIndex].map((item, index) => (
<SwiperSlide key={index}>
<img src={item.src} alt={item.src} />
</SwiperSlide>
))}
</Swiper>



</div>
<div className="selected-category-container">
<div className="selected-category">
  {["Color", "Highlights", "Balayage", "Wedding"][activeIndex]}
</div></div>

{/* <div className="portfolio-feed-container">
        <iframe title="portfolio-feed" width="100%" height="1060vh" src="https://www.instagram.com/katelynbirkyhairstylist/embed" allowtransparency="true"></iframe>
      </div> */}
</div></div>
);
};

export default PortfolioPage;