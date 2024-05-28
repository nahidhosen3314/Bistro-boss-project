import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData } from "react-router-dom";

const TouristSpotDetail = () => {
    const spotDetails = useLoaderData();
    console.log("single data", spotDetails);
    const {
        area,
        areaImage,
        avg_cost,
        country,
        description,
        duration,
        location,
        seasonality,
        total_visitors,
    } = spotDetails;

    return (
        <div className="py-14 bg-primary/10">
            <div className="container">
                <img
                    src={areaImage}
                    className="aspect-video object-cover mb-10 w-full"
                />
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
                    <div className="bg-white dark:bg-slate-800 p-5 md:col-span-2">
                        <div className="flex flex-wrap gap-5 border-b mb-5 pb-5">
                            <div className="sm:flex-1">
                                <div className="capitalize text-sm bg-primary text-white px-2 py-1 inline-block mb-2">
                                    {seasonality}
                                </div>
                                <h3>{area}</h3>
                                <div className="text-sm flex gap-2 mt-3">
                                    <FaLocationDot />
                                    {location}
                                </div>
                            </div>
                            <div className="">
                                <h3 className="text-primary">{avg_cost}</h3>
                                <span>( Price only )</span>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                            <div className="">
                                <strong>Average Cost: </strong>
                                {avg_cost}
                            </div>
                            <div className="">
                                <strong>Country: </strong>
                                {country}
                            </div>
                            <div className="">
                                <strong>Time: </strong>
                                {duration}
                            </div>
                            <div className="">
                                <strong>Total visitos: </strong>
                                {total_visitors} / year
                            </div>
                        </div>
                        <div className="mt-10">
                            <h4 className="mb-3">Description</h4>
                            {description}
                        </div>
                    </div>
                    <div className="bg-white dark:bg-slate-800 p-5 w-full max-w-sm mx-auto">
                        <h4 className="mb-4 text-center">Get a free quote</h4>
                        <div className="flex flex-col gap-3">
                            <input
                                type="text"
                                placeholder="Full Name"
                                className="border w-full p-3"
                            />
                            <input
                                type="email"
                                placeholder="Email Address"
                                className="border w-full p-3"
                            />
                            <input
                                type="text"
                                placeholder="Contact Number"
                                className="border w-full p-3"
                            />
                            <textarea
                                className="border w-full p-3"
                                placeholder="Message"
                            ></textarea>
                            <input
                                type="submit"
                                value="Get a quote"
                                className="tw-btn-primary cursor-pointer tw-btn"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristSpotDetail;
