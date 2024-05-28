import axios from "axios";

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000'
})
const useAxioaSecure = () => {
    return axiosSecure;
};

export default useAxioaSecure;