// import { useContext } from "react";
// import useAdmin from "../hooks/useAdmin";
// import { AuthContext } from "../Provider/AuthProvider";
// import { Navigate, useLocation } from "react-router-dom";

// const AdminRoutes = ({Children}) => {
//     const [user, Loading] = useContext(AuthContext);
//     const [isAdmin, isAdminLoading] = useAdmin();
//     const location = useLocation();
    
//     if (Loading || isAdminLoading) {
//         return <progress className="progress w-56"></progress>;
//     }

//     if (user && isAdmin) {
//         return Children;
//     }
//     return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
// };

// export default AdminRoutes;



import { useContext } from "react";
import useAdmin from "../hooks/useAdmin";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoutes = ({ children }) => {
    const { user, loading } = useContext(AuthContext);
    const [isAdmin, isAdminLoading] = useAdmin();
    const location = useLocation();

    if (loading || isAdminLoading) {
        return <progress className="progress w-56 text-center"></progress>;
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to="/" state={{ from: location }} replace />;
};

export default AdminRoutes;
