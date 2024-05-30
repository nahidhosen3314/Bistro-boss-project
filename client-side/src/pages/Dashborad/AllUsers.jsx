import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../componets/SectionTitle";
import useAxioaSecure from "../../hooks/useAxioaSecure";
import { FaTrashAlt, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxioaSecure();
    const { data: users = [], refetch } = useQuery({
        queryKey: ["users"],
        queryFn: async () => {
            const res = await axiosSecure.get("/users");
            return res.data;
        },
    });

    const handelMakeAdmin = (user) => {
        axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
            console.log(res.data);
            if (res.data.modifiedCount > 0) {
                refetch();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `<b>${user.name}</b> is an Admin Now!`,
                    showConfirmButton: false,
                    timer: 1500,
                });
            }
        });
    };

    const handelDelate = (user) => {
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
                axiosSecure.delete(`/users/${user._id}`).then((res) => {
                    if (res.data.deletedCount > 0) {
                        Swal.fire({
                            title: "Deleted!",
                            text: "Your file has been deleted.",
                            icon: "success",
                        });
                        refetch();
                    }
                });
            }
        });
    };

    return (
        <div className="py-16 ">
            <SectionTitle
                subHading={"My cart"}
                heading={"WANNA ADD MORE?"}
            ></SectionTitle>
            <div className="bg-white p-8">
                <div className="mb-3">
                    <h4>Total Users : {users.length}</h4>
                </div>
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="bg-secondary rounded-tr-full text-white">
                                <tr>
                                    <th>Nunber</th>
                                    <th>Name</th>
                                    <th>Email</th>
                                    <th>Role</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {users.map((user, index) => (
                                    <tr key={user._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="">{user.name}</div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">
                                                {user.email}
                                            </span>
                                        </td>
                                        <td>
                                            {user.role === "admin" ? (
                                                "Admin"
                                            ) : (
                                                <button
                                                    onClick={() =>
                                                        handelMakeAdmin(user)
                                                    }
                                                    className="btn btn-ghost"
                                                >
                                                    <FaUsers className="text-secondary text-lg" />
                                                </button>
                                            )}
                                        </td>
                                        <th>
                                            <button
                                                onClick={() =>
                                                    handelDelate(user)
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

export default AllUsers;
