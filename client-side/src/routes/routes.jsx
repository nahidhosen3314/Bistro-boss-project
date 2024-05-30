import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root"
import Home from "../pages/Home";
import UpdateProfile from "../pages/UpdateProfile";
import ErrorPage from "../pages/ErrorPage";
import Login from "../pages/Login";
import Register from "../pages/Register";
import PriviteRouts from "./PriviteRouts";
// import AddTouristSpot from "../pages/AddTouristSpot";
// import MyList from "../pages/MyList";
// import AllTouristsSpot from "../pages/AllTouristsSpot";
// import TouristSpotDetail from "../pages/TouristSpotDetail";
// import UpdateMyList from "../pages/UpdateMyList";
import OurMenu from "../pages/OurMenu";
import Order from "../pages/Order";
import Contact from "../pages/Contact";
import DashBoard from "../Layout/DashBoard";
import Cart from "../pages/Dashborad/Cart";
import AllUsers from "../pages/Dashborad/AllUsers";
import AddItems from "../pages/Dashborad/AddItems";
import AdminRoutes from "./AdminRoutes";
import ManageItem from "../pages/Dashborad/ManageItem";
import UpdateItem from "../pages/Dashborad/UpdateItem";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/OurMenu',
            element: <OurMenu></OurMenu>
        },
        {
            path: `/order/:category`,
            element: <Order></Order>
        },
        {
            path: '/contact',
            element: <Contact></Contact>
        },
        {
            path: '/update',
            element: <PriviteRouts> <UpdateProfile></UpdateProfile> </PriviteRouts>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        },
        // {
        //     path: '/all-tourist-sport',
        //     element:<AllTouristsSpot></AllTouristsSpot>,
        //     loader: () => fetch('http://localhost:5000/tourists')
        // },
        // {
        //     path: "/tourists/:id",
        //     element: <PriviteRouts> <TouristSpotDetail></TouristSpotDetail> </PriviteRouts>,
        //     loader: ({ params }) =>
        //         fetch(`http://localhost:5000/tourists/${params.id}`),
        // },
        // {
        //     path: '/add-tourist-sport',
        //     element: <PriviteRouts> <AddTouristSpot></AddTouristSpot> </PriviteRouts>
        // },
        // {
        //     path: '/my-list/:email',
        //     element: <PriviteRouts> <MyList></MyList> </PriviteRouts>,
        //     loader: ({ params }) => fetch(`http://localhost:5000/mylist/${params.email}`)
        // },
        // {
        //     path: '/update-mylist/:id',
        //     element: <PriviteRouts> <UpdateMyList></UpdateMyList> </PriviteRouts>,
        //     loader: ({ params }) => fetch(`http://localhost:5000/update-mylist/${params.id}`)
        // },
        
      ]
    },
    {
        path: 'dashboard',
        element: <PriviteRouts> <DashBoard></DashBoard> </PriviteRouts>,
        children: [
            // normal user routes
            {
                path: 'cart',
                element: <Cart></Cart>
            },

            // admin user routes
            {
                path: 'allUsers',
                element: <AdminRoutes> <AllUsers></AllUsers> </AdminRoutes>
            },
            {
                path: 'addItem',
                element: <AdminRoutes> <AddItems></AddItems> </AdminRoutes>
            },
            {
                path: 'manageItem',
                element: <AdminRoutes> <ManageItem></ManageItem> </AdminRoutes>
            },
            {
                path: 'updateItem/:id',
                element: <AdminRoutes> <UpdateItem></UpdateItem> </AdminRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/menu/${params.id}`)
            }
        ]
    }
  ]);

  export default router;