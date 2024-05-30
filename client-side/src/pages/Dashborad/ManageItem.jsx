import { FaRegEdit, FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../componets/SectionTitle";
import useMenu from "../../hooks/UseHook";
import Swal from "sweetalert2";
import useAxioaSecure from "../../hooks/useAxioaSecure";
import { Link } from "react-router-dom";

const ManageItem = () => {
    const [menu, refetch] = useMenu();
    const axiosSecure = useAxioaSecure();

    // console.log("all menus", menu);

    const handelDelate = (item) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = await axiosSecure.delete(`/menu/${item._id}`);
                // console.log("Manage menu", res.data);
                if (res.data.deletedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title:  `${item.name} has been saved`,
                        showConfirmButton: false,
                        timer: 2000
                      });
                      refetch();
                }
            }
        });
    };

    return (
        <div className="py-16">
            <SectionTitle
                subHading={"Hurry Up!"}
                heading={"MANAGE ALL ITEMS"}
            ></SectionTitle>
            <div className="bg-white p-8">
                <div className="mb-3">
                    <h4>Total items: {menu.length}</h4>
                </div>
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-secondary rounded-tr-full text-white">
                                <tr>
                                    <th>Nunber</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Update</th>
                                    <th>Delete</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {menu.map((item, index) => (
                                    <tr key={item._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="avatar">
                                                <div className="mask mask-squircle w-12 h-12">
                                                    <img src={item.image} />
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">
                                                {item.name}
                                            </span>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">
                                                {item.price}
                                            </span>
                                        </td>
                                        <td>
                                            <Link to={`/dashboard/updateItem/${item._id}`}>
                                                <button
                                                    className="btn btn-ghost"
                                                >
                                                    <FaRegEdit className="text-secondary text-lg" />
                                                </button>
                                            </Link>
                                        </td>
                                        <th>
                                            <button
                                                onClick={() =>
                                                    handelDelate(item)
                                                }
                                                className="btn btn-ghost"
                                            >
                                                <FaTrashAlt className="text-red-600 text-lg" />
                                            </button>
                                        </th>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageItem;
