import { useEffect, useState } from "react";
import FoodItem from "./FoodItem";
import SectionTitle from "./SectionTitle";

const RecommendFood = () => {
    const [food, setFood] = useState([]);

    useEffect(() => {
        fetch("menu.json")
            .then((res) => res.json())
            .then((data) => {
                const foodItem = data.filter(
                    (item) => item.category === "popular"
                );
                setFood(foodItem);
            });
    }, []);

    return (
        <div className="pb-16">
            <div className="container">
                <SectionTitle
                    heading={"Should Try"}
                    subHading={"Chef Recommends"}
                ></SectionTitle>

                <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4">
                    {food.slice(0, 3).map((item) => (
                        <FoodItem key={item._id} item={item}></FoodItem>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default RecommendFood;
