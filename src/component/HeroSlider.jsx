import { useState, useMemo } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import slide_1 from "../assets/slider_Image/chef_working_.webp";
import slide_2 from "../assets/slider_Image/cup_coffee.webp";
import slide_3 from "../assets/slider_Image/happy_waiter.webp";
import slide_4 from "../assets/slider_Image/chef_working_together.webp";
import { Link } from "react-router-dom";

const HeroSlider = () => {
  const [autoplay, setAutoplay] = useState(true);

  // Memoize images array to prevent unnecessary re-renders
  const images = useMemo(() => [slide_1, slide_2, slide_3, slide_4], []);

  return (
    <div className="relative w-full overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        autoplay={autoplay ? { delay: 5000, disableOnInteraction: false } : false}
        onAutoplayStop={() => setAutoplay(false)}
        onAutoplayStart={() => setAutoplay(true)}
        className="relative w-full h-[85vh]"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-[90vh]">
              <img
                src={image}
                alt={`slide-${index + 1}`}
                className="object-cover w-full h-full" 
                loading="lazy" // Native lazy loading for SEO and performance
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black opacity-50"></div>
              <div className="absolute inset-x-0 bottom-20 flex flex-col items-center text-center gap-4 z-10 text-white px-4">
                <h1 className="text-3xl lg:text-4xl max-w-4xl font-bold leading-tight">
                  Welcome to Xinxian Hospitality Training Institute
                </h1>
                <p className="text-md font-semibold lg:text-xl max-w-2xl">
                  A premier institution committed to providing top-notch
                  training in the field of hospitality.
                </p>
                <div className="flex flex-wrap justify-center gap-4 mt-4">
                  <Link to="about">
                    <button className="btn bg-primary border-0 text-white px-6 py-2 lg:px-8 lg:py-3 text-md">
                      About Us
                    </button>
                  </Link>
                  <Link to="courses">
                    <button className="btn btn-outline text-secondary border-white px-6 py-2 lg:px-8 lg:py-3 text-md">
                      Our Courses
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default HeroSlider;
