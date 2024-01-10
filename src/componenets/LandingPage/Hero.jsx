import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { heroImage, heroImage2, logo } from "../../assets/images";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import HeroContent from "./HeroContent";

const Hero = () => {
  return (
    <div>
      <Swiper
        modules={[EffectFade, Autoplay]}
        effect={"fade"}
        speed={2300}
        slidesPerView={1}
        loop={true}
        autoplay={{
          delay: 2300,
          disableOnInteraction: false,
        }}
        className="w-[100%] h-[80vh]"
      >
        <SwiperSlide className="brightness-50">
          <img
            src={heroImage}
            alt="img"
            className="w-[100%]  cover object-fill "
          />
        </SwiperSlide>
        <SwiperSlide className="brightness-50">
          <img
            src={heroImage2}
            alt="img"
            className="w-[100%] cover object-fill "
          />
        </SwiperSlide>
      </Swiper>
      <div>
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
