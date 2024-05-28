import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useAxioaSecure from "../hooks/useAxioaSecure";
import useCart from "../hooks/useCart";

const FoodItem = ({ item }) => {
    const { name, image, recipe, price, _id } = item;
    const {user} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const axiosSecure = useAxioaSecure();
    const [, refetch] = useCart();

    const handelAddToCart = (food) =>{
        if(user && user.email){
            // send cart item database
            const cartItem = {
                menuId: _id,
                email: user.email,
                name,
                image,
                price
            }
            axiosSecure.post('/carts', cartItem)
                .then(res => {
                    if(res.data.insertedId){
                        Swal.fire({
                            position: "top-center",
                            icon: "success",
                            title: `${name} : added to your cart`,
                            showConfirmButton: false,
                            timer: 2000
                          });
                          // refetch the cart to update count the cart
                          refetch();
                    }
                })
        }else{
            Swal.fire({
                title: "You are not Logged In",
                text: "Plase login to add to the cart ?",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Yes, login!"
              }).then((result) => {
                if (result.isConfirmed) {
                  // 
                  navigate('/login', {state: location.pathname});
                }
              });
        }
        
    }

    return (
        <div className="">
            <div className="relative">
                <img
                    className=" w-full object-cover aspect-[1/.7]"
                    src={image}
                    alt=""
                />
                <p className="absolute top-4 right-4 bg-slate-900 px-4 py-1 flex items-center justify-center text-white">${price}</p>
            </div>
            <div className="text-center bg-[#F3F3F3] p-6">
                <h5 className="mb-2">{name}</h5>
                <p>{recipe}</p>
                <button onClick={() => handelAddToCart(item)} className="inline-block uppercase bg-slate-200 border-b-2 border-secondary text-secondary text-center mt-4 hover:bg-light hover:border-transparent">
                    add to cart
                </button>
            </div>
        </div>
    );
};

export default FoodItem;
