import type { PropsWithChildren } from "react";
import { Pagination } from "swiper/modules";
import { Swiper } from "swiper/react";
import "../../node_modules/swiper/modules/pagination.min.css";
import "../../node_modules/swiper/swiper.min.css";
function MySwiper({ children }: PropsWithChildren) {
  return (
    <Swiper
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      spaceBetween={10}
      speed={800}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      breakpoints={{
        0: {
          slidesPerView: 1, // 👈 small screens
          spaceBetween: 10,
        },
        768: {
          slidesPerView: 2, // 👈 tablets
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3, // 👈 desktops
          spaceBetween: 30,
        },
      }}
      className="mySwiper"
    >
      {children}
      <style>{`
        .swiper-pagination-bullet {
          background-color: #14b8a6; /* teal-500 */
          opacity: 0.5;
          width: 10px;
          height: 10px;
          margin: 0 6px !important;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          opacity: 1;
          transform: scale(1.4);
          background-color: #0d9488; /* teal-600 */
        }
      `}</style>
    </Swiper>
  );
}

export default MySwiper;
