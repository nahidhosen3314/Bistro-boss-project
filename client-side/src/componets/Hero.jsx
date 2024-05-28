import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import img1 from "../../src/assets/01.jpg"
import img2 from "../../src/assets/02.jpg"
import img3 from "../../src/assets/03.jpg"
import img4 from "../../src/assets/04.jpg"

const Hero = () => {
    return (
        <div className="pb-12">
            <Carousel className="text-center"
            
            autoPlay={true} 
            infiniteLoop={true}
            interval={2000}

            >
                <div>
                    <img src={img1} />
                </div>
                <div>
                    <img src={img2} />
                </div>
                <div>
                    <img src={img3} />
                </div>
                <div>
                    <img src={img4} />
                </div>
            </Carousel>
        </div>
    );
};

export default Hero