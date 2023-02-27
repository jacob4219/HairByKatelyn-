import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Navigation } from "swiper";

const PortfolioPage = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const galleries = [
    [
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/274100158_3186770164981758_1580524772888503805_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=W5URLFPdw7MAX9WOaxy&_nc_ht=scontent-ord5-2.xx&oh=00_AfDE29k5gRTsbb8E8vA-UUklb-6dLJaUz2lvh1SNrBlkaQ&oe=64014DF6'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/281992817_3256812167977557_2941832842874949867_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=T8NsUw1FajUAX9szTL7&_nc_ht=scontent-ord5-2.xx&oh=00_AfDPhUs_Wz_DtY00VE0PzSrQh-ywfCiyDpI6f8K2STcu-g&oe=640279C7'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/289637977_3287146881610752_2032802242235267732_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=a26aad&_nc_ohc=gIUSard9x0gAX8h0vR4&tn=qZC8PrD-8OvLrnOu&_nc_ht=scontent-ord5-2.xx&oh=00_AfASSWZlXp_klSn86qv9Bx-xZIvt6QvoesuE3VjzslJZpQ&oe=64016756'
      }
    ],
    [
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/297021808_464854885647820_7885209047947226603_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=730e14&_nc_ohc=NIcGgPjtgdAAX9vI66E&_nc_ht=scontent-ord5-2.xx&oh=00_AfAJbxiqAagPmry9i2U46aUom6jby1Emga58vWpF5TOtsQ&oe=64019285'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/287887908_3279809792344461_2771248951763362305_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=a26aad&_nc_ohc=iLtwBbP3I2IAX_WN4Zi&_nc_ht=scontent-ord5-2.xx&oh=00_AfDgS-ttAjo-WHbrUNaZ-nDeAlAwIq3cB2RlAdjHAcKpag&oe=640222C2'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/300497270_478114210988554_3367173294057794197_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=730e14&_nc_ohc=c9wxMR4SPykAX_9BHy1&_nc_ht=scontent-ord5-2.xx&oh=00_AfBOH2FJWVfSC3j9w_qSFfs_VbievBQ-YnFZM1_9KYDawg&oe=640266EB'
      }
    ],
    [
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/319184620_576596747806966_2523910339705151427_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=730e14&_nc_ohc=GpURi6vtUt8AX8bdBq4&_nc_ht=scontent-ord5-2.xx&oh=00_AfAHOLO8X5y_NXWg6er4qWPBvn2TGKtNm1jwDiMtJt1HBQ&oe=6401A5C9'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/314190640_544666514333323_549986024841379855_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=730e14&_nc_ohc=zWzw8GzKnxwAX8wHA3b&_nc_ht=scontent-ord5-2.xx&oh=00_AfCe17yyEhcJxNQEY8hCdkh2kFDg0QTUKLsXrhp2npNUfQ&oe=6401D09E'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/281950582_3256209438037830_607506611743709609_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=a26aad&_nc_ohc=2kFdJDRey9QAX_D4-2H&_nc_ht=scontent-ord5-2.xx&oh=00_AfA6FFMY7jDXaRHgL31Ex2D6VxZByVTjTD4kkY3-0E8YIg&oe=6402FE3E'
      }
    ],
    [
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/311596774_525746482891993_8212642618664719812_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=730e14&_nc_ohc=tuk-SdHn5yIAX9ZxWtu&_nc_ht=scontent-ord5-2.xx&oh=00_AfAZqiFVIXSR5ZFDjB6ZLLXMVqhWwOEbHYOE1XSb73FwWg&oe=64013C8C'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t1.6435-9/198520731_2996495390675904_3029029193891257147_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=a26aad&_nc_ohc=3F2tR2_WtAsAX918Z6g&_nc_ht=scontent-ord5-2.xx&oh=00_AfDilrNeTyvg2iXMrFYo7iAv6IXnINgbX_rSa_I3t1tD3w&oe=64247D15'
      },
      {
        src: 'https://scontent-ord5-2.xx.fbcdn.net/v/t39.30808-6/286643955_3276986262626814_772876327627637883_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=a26aad&_nc_ohc=a92NdS-2AsYAX-9P5e6&_nc_ht=scontent-ord5-2.xx&oh=00_AfCVPwfnvp5FYgf6_NodAKLEKhsgDZTkNFy-uhGSZJlAWQ&oe=6402971F'
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