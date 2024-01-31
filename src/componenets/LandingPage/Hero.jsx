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
import { motion } from "framer-motion";

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
        <SwiperSlide className="">
          <img src={heroImage} alt="img" className="w-[100%]  object-center " />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={heroImage2} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={heroImage1} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={heroImage3} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
        <SwiperSlide className="">
          <img src={heroImage4} alt="img" className="w-[100%] object-center " />
        </SwiperSlide>
      </Swiper>
      <div className="bg-gradient-to-r from-black/[0.25] from-60% white via-30% absolute w-full top-24 h-[90vh] z-10 "></div>
      <motion.div
        initial={{
          x: -300,
          opacity: 0,
        }}
        whileInView={{
          x: 0,
          opacity: 1,
        }}
        transition={{
          // delay: 0.2,
          type: "tween",
        }}
        className="absolute w-full transition-alls	   px-40 items-center top-32 h-[90vh] z-20"
      >
        <HeroContent />
      </motion.div>
    </div>
  );
};

export default Hero;
