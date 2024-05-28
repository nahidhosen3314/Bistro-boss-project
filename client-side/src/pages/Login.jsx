import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogin from "../componets/SocialLogin";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet-async";

// capther
import {
    loadCaptchaEnginge,
    LoadCanvasTemplate,
    validateCaptcha,
} from "react-simple-captcha";

const Login = () => {
    // capther
    useEffect(() => {
        loadCaptchaEnginge(6);
    }, []);

    const [disabled, setDisabled] = useState(true);


    const { userSign } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log("login location: ", location);

    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        userSign(email, password)
            .then((result) => {
                console.log("hello user", result.user);
                toast.success("Successful user logged");
                navigate(location.state ? location.state : "/");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    const handelValidateCaptcha = (e) =>{
        const user_capther_value = e.target.value;
        if(validateCaptcha(user_capther_value)){
            setDisabled(false);
        }else{
            setDisabled(true);
        }
    }



    return (
        <div>
            <Helmet>
                <title>Bistro boss | login</title>
            </Helmet>
            <div className="container py-14 font-medium">
                <div className="max-w-xl mx-auto">
                    <div className="bg-gray-100 rounded p-10">
                        <h4 className="mb-5">Login</h4>
                        <form
                            onSubmit={handleSubmit(onSubmit)}
                            method="post"
                            className="flex flex-col gap-7"
                        >
                            <div className="">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email address is required*",
                                    })}
                                    placeholder="Email address"
                                    className="bg-transparent border-b border-gray-400 w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <input
                                    type="password"
                                    {...register("password", {
                                        required: "Password is required*",
                                    })}
                                    placeholder="Password"
                                    className="bg-transparent border-b border-gray-400 w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>



                            <div className="">
                                <div className="mb-2"> <LoadCanvasTemplate /></div>
                                <input
                                onBlur={handelValidateCaptcha}
                                    type="text"
                                    name="'captcha'"
                                    placeholder="Type the captcha above"
                                    className="bg-transparent border-b border-gray-400 w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>



                            <button
                                disabled={disabled}
                                type="submit"
                                className={`tw-btn tw-btn-primary w-full ${disabled ? 'bg-slate-300 cursor-not-allowed' : 'bg-primary'}`}
                            >
                                Login
                            </button>

                            <div className="text-center">
                                Do not have an account? &nbsp;
                                <NavLink
                                    to="/register"
                                    className="text-primary underline hover:no-underline"
                                >
                                    Create an account
                                </NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-wrap gap-x-5 items-center mx-auto max-w-md my-5">
                        <div className="border-b border-gray-400 flex-1"></div>
                        <span>Or</span>
                        <div className="border-b border-gray-400 flex-1"></div>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Login;
