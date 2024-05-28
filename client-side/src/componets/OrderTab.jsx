// import FoodItem from "./FoodItem";

// import { Swiper, SwiperSlide } from "swiper/react";

// // Import Swiper styles
// import "swiper/css";
// import "swiper/css/pagination";

// // import required modules
// import { Pagination } from "swiper/modules";

// const OrderTab = ({ item }) => {
//     const pagination = {
//         clickable: true,
//         renderBullet: function (index, className) {
//             return '<span class="' + className + '">' + (index + 1) + "</span>";
//         },
//     };

//     return (
//         <div>
//             <Swiper
//                 pagination={pagination}
//                 modules={[Pagination]}
//                 className="mySwiper"
//             >
//                 <SwiperSlide>
//                     <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-16">
//                         {item.map((item) => (
//                             <FoodItem key={item._id} item={item}></FoodItem>
//                         ))}
//                     </div>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     );
// };

// export default OrderTab;

import FoodItem from "./FoodItem";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const OrderTab = ({ item }) => {
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };

    // Chunk the items array into arrays of size 6
    const chunks = item.reduce((acc, _, index) => {
        if (index % 6 === 0) {
            acc.push(item.slice(index, index + 6));
        }
        return acc;
    }, []);

    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {chunks.map((chunk, index) => (
                    <SwiperSlide key={index}>
                        <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 mb-16">
                            {chunk.map((item) => (
                                <FoodItem key={item._id} item={item}></FoodItem>
                            ))}
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default OrderTab;



