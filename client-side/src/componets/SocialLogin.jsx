import { useContext } from "react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";


const SocialLogin = () => {

    const {singInWithGoogle, singInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate()
    const location = useLocation()

    const handelGoogleLogin = () =>{
        singInWithGoogle()
            .then(result =>{
                console.log(result.user)
                toast.success("User Logged in Successfully!")
                navigate(location.state ? location.state : "/");
            })
            .catch((error) =>{
                toast.error(error.message)
            })
    }

    const handelGithubLogin = () =>{
        singInWithGithub()
            .then(result =>{
                console.log(result.user)
                toast.success("User Logged in Successfully!")
                navigate(location.state ? location.state : "/");
            })
            .catch((error) =>{
                toast.error(error.message)
            })
    }
     

    return (
        <div className="max-w-md mx-auto flex flex-col gap-3">
            <button
                onClick={handelGoogleLogin}
                className="flex items-center bg-white gap-2 border border-gray-300 rounded-full p-1 w-full text-center hover:bg-gray-50 duration-200"
            >
                <FcGoogle className="text-4xl" />
                <span className="flex-1 text-heading text-base font-normal">Continue with Google</span>
            </button>
            <button
                onClick={handelGithubLogin}
                className="flex items-center bg-white gap-2 border border-gray-300 rounded-full p-1.5 w-full text-center hover:bg-gray-50 duration-200"
            >
                <FaGithub className="text-3xl text-heading"></FaGithub>
                <span className="flex-1 text-heading text-base font-normal">Continue with Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;