import { useLoaderData } from "react-router-dom";
import TouristSpotCard from "../componets/TouristSpotCard";

const AllTouristsSpot = () => {
    const allTourists = useLoaderData();
    // console.log("data", allTourists);

    return (
        <div>
            <h2>all AddTouristSpot</h2>
            <div className="grid grid-cols-1 lg:grid-cols-3 sm:grid-cols-2 gap-7">
                {allTourists?.map((item, idx) => (
                    <TouristSpotCard key={idx} data={item}></TouristSpotCard>
                ))}
            </div>
        </div>
    );
};

export default AllTouristsSpot;
