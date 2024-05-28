import SectionTitle from "./SectionTitle";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";

import '@smastrom/react-rating/style.css'
import { FaQuoteLeft } from "react-icons/fa";

const Testimonial = () => {
    const [reviwes, setReviwe] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/reviews")
            .then((res) => res.json())
            .then((data) => setReviwe(data));
    }, []);

    console.log("review", reviwes);

    return (
        <div className="pb-16">
            <div className="container">
                <SectionTitle
                    heading={"Testimonials"}
                    subHading={"What Our Clients Say"}
                ></SectionTitle>

                <div className="">
                    <Swiper
                        navigation={true}
                        modules={[Navigation]}
                        autoHeight={true}
                        className="mySwiper"
                    >
                        {reviwes.map((review) => (
                            <SwiperSlide key={review._id}>
                                <div className="lg:mx-20 md:mx-16 mx-10 text-center flex flex-col items-center">

                                    <Rating
                                        style={{ maxWidth: 180 }}
                                        value={review.rating}
                                        readOnly
                                    />
                                    <FaQuoteLeft className="text-5xl text-heading my-4"/>
                                    <p className="mt-3">{review.details}</p>
                                    <h4 className="text-secondary uppercase mt-2 font-medium">
                                        {review.name}
                                    </h4>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;
