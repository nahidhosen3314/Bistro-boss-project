import { Outlet, useLocation } from "react-router-dom";
import Footer from "../pages/Footer";
import Navbar from "../componets/Navbar";
import { Toaster } from "react-hot-toast";


const Root = () => {

    const location = useLocation();
    const noHaderFooter = location.pathname.includes('login') || location.pathname.includes('register');
    console.log(location);

    return (
        <div>
            <Toaster
                position="top-center"
                reverseOrder={false}
            />
            {noHaderFooter || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noHaderFooter || <Footer></Footer>}
        </div>
    );
};

export default Root;