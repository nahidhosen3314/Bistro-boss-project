import { useEffect, useState } from "react";
import { FaEdit, FaTimes } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const MyList = () => {
    const listData = useLoaderData();
    const [myList, setMyList] = useState(null);

    useEffect(() => {
        setMyList(listData);
    }, [listData]);

    const handelDelate = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/mylist/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            const remainSpots = listData.filter(
                                (item) => item._id !== id
                            );
                            setMyList(remainSpots);
                            Swal.fire({
                                title: "Deleted!",
                                text: "Item has been deleted.",
                                icon: "success",
                            });
                        }
                    })
                    .catch((error) => {
                        console.log("Error: ", error);
                        Swal.fire({
                            title: "Error",
                            text: error.message,
                            icon: "error",
                        });
                    });
            }
        });
    };

    return (
        <div className="py-8">
            <div className="container overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Area</th>
                            <th>Country</th>
                            <th>Avg Cost</th>
                            <th>Time</th>
                            <th>Actions</th>
                        </tr>
                    </thead>

                    <tbody>
                        {myList?.map((data) => {
                            return (
                                <tr key={data._id}>
                                    <td>
                                        <Link to={`/tourists/${data._id}`}>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img
                                                            src={
                                                                data?.areaImage
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                                <div>
                                                    <div className="font-bold">
                                                        {data?.area}
                                                    </div>
                                                    <div className="text-sm opacity-50">
                                                        {data?.location}
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    </td>

                                    <td>{data?.country}</td>
                                    <td>{data?.avg_cost}</td>
                                    <td>{data?.duration}</td>

                                    <th>
                                        <div className="flex items-center gap-3">
                                            <Link to={`/update-mylist/${data._id}`}>
                                                <button className="bg-primary  rounded-full flex items-center justify-center w-12 h-12">
                                                    <FaEdit className="" />
                                                </button>
                                            </Link>

                                            <button
                                                onClick={() =>
                                                    handelDelate(data._id)
                                                }
                                                className="bg-red-700  rounded-full flex items-center justify-center w-12 h-12"
                                            >
                                                <FaTimes />
                                            </button>
                                        </div>
                                    </th>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyList;
