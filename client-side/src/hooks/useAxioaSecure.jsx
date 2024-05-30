import axios from "axios";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const axiosSecure = axios.create({
    baseURL: "http://localhost:5000",
});
const useAxioaSecure = () => {
    const navigate = useNavigate();
    const {logOut} = useContext(AuthContext);
    //request intercepter to add authorization header for every secure call to teh api
    axiosSecure.interceptors.request.use(
        function (confin) {
            const token = localStorage.getItem("access-token");
            // console.log("request stopped by interceptors", token);
            confin.headers.authorization = `Bearer ${token}`;
            return confin;
        },
        function (error) {
            // Do something with request error
            return Promise.reject(error);
        }
    );

    // intercepts 401 and 403 status
    axiosSecure.interceptors.response.use(function(response){
        return response;
    }, async (error) =>{
        const status = error.response.status;
        // console.log('status error interceptors', status);

        // for 401 or 403 logout the user and moce the user to the login
        if(status === 401 || status === 403){
            await logOut();
            navigate('/login');
        }
        return Promise.reject(error);
    })

    return axiosSecure;
};

export default useAxioaSecure;
