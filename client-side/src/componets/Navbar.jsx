import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { RxAvatar } from "react-icons/rx";
import { TiShoppingCart } from "react-icons/ti";
import useCart from "../hooks/useCart";

const Navbar = () => {
    const { user, logOut, loading, setLoading } = useContext(AuthContext);
    const [cart] = useCart();

    const handelLogout = () => {
        logOut()
            .then(() => {
                toast.success("Logged Out Successfully!");
                setLoading(false);
            })
            .catch((error) => {
                toast.error(error.message);
                setLoading(false);
            });
    };

    const navItems = (
        <>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/OurMenu">Our Menu</NavLink>
            </li>
            <li>
                <NavLink to="/order/salad">Order Food</NavLink>
            </li>
            <li>
                <NavLink to="/contact">Contact Us</NavLink>
            </li>
            {/* <li>
                <NavLink to="/all-tourist-sport">All Tourist Sport</NavLink>
            </li> */}

            {user && (
                <>
                    <li>
                        <NavLink to="/update">Update Profile</NavLink>
                    </li>
                    {/* <li>
                        <NavLink to="/add-tourist-sport">
                            Add Tourist Sport
                        </NavLink>
                    </li>
                    <li>
                        <NavLink to={`/my-list/${user.email}`}>My List</NavLink>
                    </li> */}
                </>
            )}
        </>
    );

    return (
        <div className="bg-red-100 py-2 ">
            <div className="container">
                <div className="navbar p-0 ">
                    <div className="navbar-start">
                        <div className="dropdown">
                            <div
                                tabIndex={0}
                                role="button"
                                className="btn btn-ghost lg:hidden"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h8m-8 6h16"
                                    />
                                </svg>
                            </div>
                            <ul
                                tabIndex={0}
                                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                {navItems}
                            </ul>
                        </div>
                        <Link to="/" className="btn btn-ghost text-xl">
                            Bistro Boss
                        </Link>
                    </div>
                    <div className="navbar-center hidden lg:flex">
                        <ul className="menu menu-horizontal px-1">
                            {navItems}
                        </ul>
                    </div>

                    <div className="navbar-end">
                        {/* cart */}
                        <Link to='/dashboard/cart'>
                            <div className="mr-4 relative">
                                <TiShoppingCart className="text-3xl h-10 w-10 rounded-full p-2 bg-[#006837] text-center text-white" />
                                <p className="text-xm absolute left-6 top-4 h-6 w-6 bg-red-700 text-white rounded-full flex items-center justify-center">
                                    +{cart.length}
                                </p>
                            </div>
                        </Link>

                        {loading && (
                            <span className="loading loading-spinner loading-lg"></span>
                        )}
                        {!loading && user && (
                            <div className="dropdown dropdown-end">
                                <div
                                    tabIndex={0}
                                    role="button"
                                    className="btn btn-ghost btn-circle avatar"
                                >
                                    <div className="w-10 rounded-full">
                                        {user.photoURL ? (
                                            <img
                                                src={user.photoURL}
                                                alt={user.displayName}
                                            />
                                        ) : (
                                            <RxAvatar className="w-10 h-10" />
                                        )}
                                    </div>
                                </div>
                                <ul
                                    tabIndex={0}
                                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
                                >
                                    {user.displayName && (
                                        <li>
                                            <div className="font-bold">
                                                {user.displayName}
                                            </div>
                                        </li>
                                    )}
                                    <li>
                                        <div
                                            className=""
                                            onClick={handelLogout}
                                        >
                                            Logout
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        )}
                    </div>

                    {!loading && !user && (
                        <Link
                            to="/login"
                            className="tw-btn py-2 px-5 rounded-md tw-btn-primary"
                        >
                            Login
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Navbar;
