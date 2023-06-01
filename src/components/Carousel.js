import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation, Pagination } from "swiper";
import "../App.css";
import project3 from "../assets/img/project3.png";
import project4 from "../assets/img/project4.png";
import project6 from "../assets/img/project6.png";

export const ProjectsCarousel = () => {
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
          <img src={project3} alt="project3" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project4} alt="project4" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={project6} alt="project6" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};
