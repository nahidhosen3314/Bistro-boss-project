import { useQuery } from "@tanstack/react-query";
import useAxioaSecure from "./useAxioaSecure";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";


const useCart = () => {
   // ten stack query
   const axiosSecure = useAxioaSecure();
   const {user} = useContext(AuthContext);
   const {refetch, isLoading, data: cart = [] } = useQuery({
    queryKey: ['cart', user?.email],
    queryFn: async () =>{
        const res = await axiosSecure.get(`/carts?email=${user.email}`);
        return res.data;
    }
        
      
  })
  return [cart, refetch, isLoading]
};

export default useCart;