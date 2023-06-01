import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "../App.css";
import project5 from "../assets/img/project5.png";
import project11 from "../assets/img/project11.png";
import project13 from "../assets/img/project13.png";
import project15 from "../assets/img/project15.png";
import project16 from "../assets/img/project16.png";
import project17 from "../assets/img/project17.png";
import project18 from "../assets/img/project18.png";

export const ProjectsCarousel3 = () => {
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
          <img src={project5} alt="project5" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={project11} alt="project11" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={project13} alt="project13" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project15} alt="project15" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project16} alt="project16" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project17} alt="project17" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project18} alt="project18" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
