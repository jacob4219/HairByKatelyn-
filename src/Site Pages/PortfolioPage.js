import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const PortfolioPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleries = [
    [
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/317691518_569211298545511_9043673169728726853_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=3NyG2qjcecsAX-o1xja&tn=RGR2Um_kH-gcyI2K&_nc_ht=scontent-ord5-2.xx&oh=00_AfCbkwDwp6sIWVBNFgIH62b3-G7urph517Rbh8XSnOEiwA&oe=63F03BA8'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/317608718_568224991977475_5867700126357283083_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=NseBLFBEFlIAX_u6AfE&_nc_ht=scontent-ord5-2.xx&oh=00_AfC5l1wZt_y8t5moLGKdTUwO8m7j4pouUwPxK39ittLguw&oe=63EF7CF3'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/306783986_497011049098870_2878490085873833250_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=730e14&_nc_ohc=cIKqUMREq08AX9_vllp&_nc_ht=scontent-ord5-2.xx&oh=00_AfCwLHtQPxgZ-g4lnAGireBjjMrbXrZRon_x7Ns0Bj3SFA&oe=63EFF753'
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
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/216965741_3019502728375170_5847617647514022380_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=a26aad&_nc_ohc=tAHIHOpUW4EAX8oeI5x&_nc_ht=scontent-ord5-2.xx&oh=00_AfBx-OfNhdHUJTCmVZB-zMnna-rcce9-z3ScmrG3QsIW_g&oe=63EFC7D6'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/311596774_525746482891993_8212642618664719812_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=Vabv4yqyeoIAX8e_HMM&_nc_ht=scontent-ord5-2.xx&oh=00_AfBBjfDhzjJpYR5s0qfCn3xs-RWNCd3FBoFJhtXi3yjceg&oe=63EF704C'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/286643955_3276986262626814_772876327627637883_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=YU9JSPP-4uMAX_TCZxe&_nc_ht=scontent-ord5-2.xx&oh=00_AfAM2s6UtkxXit-x-X8jOnNV1NlDpt4AdK3H4iH1rlsSJQ&oe=63F0CADF'
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