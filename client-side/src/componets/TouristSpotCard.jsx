import { Link } from "react-router-dom";


const TouristSpotCard = ({data}) => {
    const {_id, avg_cost, area, areaImage, total_visitors, location, seasonality, duration} = data
    return (
        <div>
            <div className="relative z-10">
                <span className="text-white top-3 right-3 bg-primary font-bold absolute px-2 py-1 z-10">
                    {avg_cost}
                </span>
                <img
                    src={areaImage}
                    alt=""
                    className="w-full object-cover aspect-[1/0.8]"
                />
                <div className="absolute h-1/2 w-full bottom-0 left-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-5">
                    <h4 className="text-white">{area}</h4>
                    <div className="w-14 border-b"></div>
                </div>
            </div>
            <div className="">
                <div className="bg-gray-200 dark:bg-slate-800 relative z-10 p-5">
                    <div className="flex flex-wrap gap-3">
                        <div className="flex gap-1 items-center">
                            <b>Cost:</b> {avg_cost}
                        </div>
                        <div className="flex gap-1 items-center">
                            <b>Visitors:</b> {total_visitors} <span className="text-sm">/year</span>
                        </div>
                        <div className="flex gap-1 items-center">
                            <b>Time:</b> {duration}
                        </div>
                        <div className="flex gap-1 items-center">
                            <b>Season:</b> {seasonality}
                        </div>
                        <div className="flex gap-1 items-center">
                            <b>Location:</b> {location}
                        </div>
                    </div>
                    <Link to={`/tourists/${_id}`} className="tw-btn tw-btn-primary mt-5">View Details</Link>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotCard;