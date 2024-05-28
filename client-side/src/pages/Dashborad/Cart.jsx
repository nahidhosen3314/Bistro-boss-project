import { FaTrashAlt } from "react-icons/fa";
import SectionTitle from "../../componets/SectionTitle";
import useCart from "../../hooks/useCart";
import Swal from "sweetalert2";
import useAxioaSecure from "../../hooks/useAxioaSecure";

const Cart = () => {
    const [cart, refetch] = useCart();
    const totalPrice = cart.reduce(
        (prev, currentItem) => prev + currentItem.price,
        0
    );
    const axiosSecure = useAxioaSecure();

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
                axiosSecure.delete(`/carts/${id}`).then((res) => {
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
                <div className="flex justify-between mb-3">
                    <h4>Items: {cart.length}</h4>
                    <h4>Total Price: ${totalPrice}</h4>
                    <button className="bg-secondary">pay</button>
                </div>
                <div className="">
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead className="">
                                <tr>
                                    <th>Nunber</th>
                                    <th>Item Image</th>
                                    <th>Item Name</th>
                                    <th>Price</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {cart.map((itme, index) => (
                                    <tr key={itme._id}>
                                        <th>{index + 1}</th>
                                        <td>
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="mask mask-squircle w-12 h-12">
                                                        <img src={itme.image} />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td>
                                            <span className="badge badge-ghost badge-sm">
                                                {itme.name}
                                            </span>
                                        </td>
                                        <td>${itme.price}</td>
                                        <th>
                                            <button
                                                onClick={() =>
                                                    handelDelate(itme._id)
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

export default Cart;
