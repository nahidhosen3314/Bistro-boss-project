import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode, Pagination } from "swiper/modules";

import img1 from "../../src/assets/slide1.jpg";
import img2 from "../../src/assets/slide2.jpg";
import img3 from "../../src/assets/slide3.jpg";
import img4 from "../../src/assets/slide4.jpg";
import img5 from "../../src/assets/slide5.jpg";
import SectionTitle from "./SectionTitle";

const Category = () => {
    return (
        <div className="container">
            <SectionTitle
                heading={'Order online'}
                subHading={'From 11:00am to 10:00pm'}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={15}
                freeMode={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Pagination]}
                className="mySwiper mb-16"
            >
                <SwiperSlide>
                    <img src={img1} alt="" />
                    <h5 className="text-center uppercase -mt-12 text-white">
                        Salads
                    </h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img2} alt="" />
                    <h5 className="text-center uppercase -mt-12 text-white">
                        Soups
                    </h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img3} alt="" />
                    <h5 className="text-center uppercase -mt-12 text-white">
                        pizzas
                    </h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img4} alt="" />
                    <h5 className="text-center uppercase -mt-12 text-white">
                        desserts
                    </h5>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={img5} alt="" />
                    <h5 className="text-center uppercase -mt-12 text-white">
                        pizzas
                    </h5>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default Category;
