import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLoaderData, useNavigate } from "react-router-dom";

const UpdateMyList = () => {

    const mylistSingleItem = useLoaderData();
    const navigate = useNavigate();

    console.log("updated item", mylistSingleItem);

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        
        fetch(`http://localhost:5000/update-mylist/${mylistSingleItem?._id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(data),
        })
        .then((res) => res.json())
            .then((result) => {
                console.log(result)
                if (result.modifiedCount > 0) {
                    toast.success("Updated Tourist Spot Successfully!");
                    navigate(`/all-tourist-sport`)
                }
            });

    }


    return (
        <div className="py-10 md:py-20">
        <div className="container">
            <div className="bg-primary/10 p-5 lg:p-10 rounded">
                <h3 className="mb-3">Update Touris Spot</h3>
                <form
                    onSubmit={handleSubmit(onSubmit)}
                    className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-10"
                >
                    <label className="">
                        <div className="mb-2">Spot Image URL</div>
                        <input
                            {...register("areaImage", {
                                required: "Spot Image URL is required.",
                            })}
                            defaultValue={mylistSingleItem?.areaImage}
                            type="text"
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                        {errors.areaImage && (
                            <div className="text-red-500">
                                {errors.areaImage.message}
                            </div>
                        )}
                    </label>
                    <label className="">
                        <div className="mb-2">Spot Name</div>
                        <input
                            {...register("area", {
                                required: "Area name is required.",
                            })}
                            defaultValue={mylistSingleItem?.area}
                            type="text"
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                        {errors.area && (
                            <div className="text-red-500">
                                {errors.area.message}
                            </div>
                        )}
                    </label>
                    <label className="">
                        <div className="mb-2">Country Name</div>
                        <input
                            {...register("country", {
                                required: "Country name is required.",
                            })}
                            defaultValue={mylistSingleItem?.country}
                            type="text"
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                        {errors.country && (
                            <div className="text-red-500">
                                {errors.country.message}
                            </div>
                        )}
                    </label>
                    <label className="">
                        <div className="mb-2">Location</div>
                        <input
                            {...register("location", {
                                required: "Location is required.",
                            })}
                            defaultValue={mylistSingleItem?.location}
                            type="text"
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                        {errors.location && (
                            <div className="text-red-500">
                                {errors.location.message}
                            </div>
                        )}
                    </label>
                    <label className="col-span-full">
                        <div className="mb-2">Short Description</div>
                        <textarea
                            {...register("description")}
                            defaultValue={mylistSingleItem?.description}
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800 h-32"
                        ></textarea>
                    </label>
                    <label className="">
                        <div className="mb-2">Average Cost</div>
                        <input
                            type="text"
                            {...register("avg_cost")}
                            defaultValue={mylistSingleItem?.avg_cost}
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                    </label>
                    <label className="">
                        <div className="mb-2">Seasonality</div>
                        <input
                            type="text"
                            {...register("seasonality")}
                            defaultValue={mylistSingleItem?.seasonality}
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                    </label>
                    <label className="">
                        <div className="mb-2">Travel Duration</div>
                        <input
                            type="text"
                            {...register("duration")}
                            defaultValue={mylistSingleItem?.duration}
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                    </label>
                    <label className="">
                        <div className="mb-2">Total visitos per year</div>
                        <input
                            type="text"
                            {...register("total_visitors")}
                            defaultValue={mylistSingleItem?.total_visitors}
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                    </label>
                    <label className="">
                        <div className="mb-2">Email Address</div>
                        <input
                            {...register("email", {
                                required: "Email Address is required",
                                pattern: {
                                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                    message: "Invalid email address format",
                                },
                            })}
                            defaultValue={mylistSingleItem?.email}
                            readOnly
                            aria-invalid={errors.email ? "true" : "false"}
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                        {errors.email && (
                            <div className="text-red-500">
                                {errors.email.message}
                            </div>
                        )}
                    </label>
                    <label className="">
                        <div className="mb-2">Full Name</div>
                        <input
                            {...register("fullname", {
                                required: "User Name is required.",
                            })}
                            defaultValue={mylistSingleItem?.fullname}
                            readOnly
                            type="text"
                            className="border-2 rounded border-gray-400 p-2.5 w-full dark:bg-slate-800"
                        />
                        {errors.fullname && (
                            <div className="text-red-500">
                                {errors.fullname.message}
                            </div>
                        )}
                    </label>
                    <div className="col-span-full text-center mt-5">
                        <button className="tw-btn tw-btn-primary">
                            Update Tourist Spot
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    );
};

export default UpdateMyList;