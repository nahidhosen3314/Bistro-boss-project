import { CgMail } from "react-icons/cg";
import {
    FaCalendarAlt,
    FaListUl,
    FaShoppingCart,
    FaUsers,
    FaUtensils,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdHome } from "react-icons/io";
import { MdPreview, MdShoppingBag } from "react-icons/md";
import { TbBrandBooking } from "react-icons/tb";
import { Link, NavLink, Outlet } from "react-router-dom";
import logo from "../../src/assets/logo2.png";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const DashBoard = () => {
    const [cart] = useCart();

    // TODO: get isAdmin value from the database
    const isAdmin = useAdmin();

    return (
        <>
            <div className="flex">
                {/* dashboard side bar */}
                <div className="w-64 min-h-screen bg-secondary">
                    <div className="mt-8 ml-6">
                        <Link to="/">
                            <img className="max-w-36" src={logo} alt="" />
                        </Link>
                    </div>
                    <ul className="menu">
                        {isAdmin ? (
                            <>
                                <li>
                                    <NavLink to="/dashboard/adminHome">
                                        <IoMdHome />
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/addItem">
                                        <FaUtensils />
                                        Add Items
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/manageItem">
                                        <FaListUl />
                                        Manage Item
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/manageBooking">
                                        <TbBrandBooking />
                                        Manage Booking
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/allUsers">
                                        <FaUsers />
                                        All Users
                                    </NavLink>
                                </li>
                            </>
                        ) : (
                            <>
                                <li>
                                    <NavLink to="/dashboard/userHome">
                                        <IoMdHome />
                                        User Home
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/reservation">
                                        <FaCalendarAlt />
                                        Reservation
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/cart">
                                        <FaShoppingCart />
                                        My cart ({cart?.length})
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink to="/dashboard/review">
                                        <MdPreview />
                                        Add a Review
                                    </NavLink>
                                </li>
                                <li>
                                    <NavLink to="/dashboard/booking">
                                        <TbBrandBooking />
                                        My Booking
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* shear nav links */}
                        <div className="divider"></div>
                        <li>
                            <NavLink to="/">
                                <IoMdHome />
                                Home
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/order/salad">
                                <GiHamburgerMenu />
                                Menu
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/OurMenu">
                                <MdShoppingBag />
                                Hsop
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">
                                <CgMail />
                                Contact
                            </NavLink>
                        </li>
                    </ul>
                </div>
                {/* dashboard content */}
                <div className="flex-1 bg-slate-300">
                    <div className="max-w-4xl mx-auto ">
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DashBoard;
