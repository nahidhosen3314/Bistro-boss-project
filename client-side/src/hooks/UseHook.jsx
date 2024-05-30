// import { useEffect, useState } from "react";



    // const [menu, setMenu] = useState([]);
    // const [loading, setLoading] = useState(true);

    // useEffect(() => {
    //     fetch("http://localhost:5000/menu")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             setMenu(data)
    //             setLoading(false)
    //         });
    // }, []);


import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "./useAxiosPublic";

const useMenu = () =>{

    const axiosPublic = useAxiosPublic();
    const {data: menu = [], refetch} = useQuery({
        queryKey: ['menu'],
        queryFn: async() =>{
            const res = await axiosPublic.get('/menu')
            return res.data;
        }
    })

    return [menu, refetch]
}
export default useMenu;