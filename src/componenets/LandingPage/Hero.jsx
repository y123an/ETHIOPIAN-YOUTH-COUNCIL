import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import {
  heroImage,
  heroImage1,
  heroImage2,
  heroImage3,
  heroImage4,
  logo,
} from "../../assets/images";
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
        className="w-[100%] h-[90vh]"
      >
        <SwiperSlide className="brightness-50 flex justify-center items-center">
          <img src={heroImage} alt="img" className="w-[100%]  object-center " />
        </SwiperSlide>
        <SwiperSlide className="brightness-50 flex justify-center items-center">
          <img src={heroImage2} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
        <SwiperSlide className="brightness-50 flex justify-center items-center">
          <img src={heroImage1} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
        <SwiperSlide className="brightness-50 flex justify-center items-center">
          <img src={heroImage3} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
        <SwiperSlide className="brightness-50 flex justify-center items-center">
          <img src={heroImage4} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
      </Swiper>
      <div className="flex justify-center items-center">
        <HeroContent />
      </div>
    </div>
  );
};

export default Hero;
