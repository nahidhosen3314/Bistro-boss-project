import { useContext, useEffect } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";

const PriviteRouts = ({children}) => {
    const {user, loading} = useContext(AuthContext);

    const location = useLocation()

    const navigate = useNavigate()

    useEffect(()=> {
        if( !user && !loading ){
            navigate('/login', {state: location.pathname})
        }
    }, [user, loading, navigate, location])

    return user ? children : null


};

export default PriviteRouts;