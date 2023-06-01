import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "../App.css";
import project8 from "../assets/img/project8.png";
import project9 from "../assets/img/project9.png";
import project10 from "../assets/img/project10.png";
import project12 from "../assets/img/project12.png";

export const ProjectsCarousel2 = () => {
  return (
    <div className="carouselProjects">
      <Swiper
        navigation={true}
        pagination={{
          dynamicBullets: true,
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={project9} alt="project9" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project8} alt="project8" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project10} alt="project10" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project12} alt="project12" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
