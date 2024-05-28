import { Helmet } from "react-helmet-async";
import Hero from "../componets/Hero";
import Testimonial from "../componets/Testimonial";
import Category from "../componets/Category";
import Cover from "../componets/Cover";
import PopularMenu from "../componets/PopularMenu";
import CallUs from "../componets/CallUs";
import RecommendFood from "../componets/RecommendFood";
import Featured from "../componets/Featured";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Home</title>
            </Helmet>

            <Hero></Hero>
            <Category></Category>
            <div className="container">
                <Cover
                    bgColor='bg-white'
                    heading={"Bistro Boss"}
                    subContent={
                        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo."
                    }
                    imgUrl={'https://i.ibb.co/tqJNpnV/chef-service.jpg'}
                ></Cover>
            </div>
            <PopularMenu></PopularMenu>
            <CallUs
                Contact_number={'Call Us: +88 01892130194'}
            ></CallUs>
            <RecommendFood></RecommendFood>
            <Featured></Featured>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;
