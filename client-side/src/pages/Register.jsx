import { NavLink, useNavigate } from "react-router-dom";
import SocialLogin from "../componets/SocialLogin";
import { useContext, useState } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import toast from "react-hot-toast";
import { useForm } from "react-hook-form";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";

const Register = () => {
    const { user, userCreate, loading, setLoading } = useContext(AuthContext);
    const navigate = useNavigate();
    const [showPass, setShowpass] = useState(false);
    const axiosPublic = useAxiosPublic();

    const handleShowPass = () => {
        setShowpass(!showPass);
    };

    if (user) {
        navigate("/");
    }

    const {
        register,
        watch,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (newData) => {
        const { fname, lname, email, password, photo } = newData;
        console.log(newData);

        userCreate(email, password)
            .then((result) => {
                updateProfile(result.user, {
                    displayName: `${fname} ${lname}`,
                    photoURL: photo,
                });
                const userInfo = {
                    name: `${fname} ${lname}`,
                    userId: result.user?.uid,
                    email: result.user?.email,
                };

                // create user entry in the database

                axiosPublic.post("/users", userInfo).then((res) => {
                    if (res.data.insertedId) {
                        toast.success("User created successfully!");
                        setLoading(false);
                        reset();
                    }
                    console.log("user added to the database", res.data);
                });
            })
            .catch((error) => {
                setLoading(false);
                toast.error(error.message);
            });
    };

    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Register</title>
            </Helmet>
            <div className="container py-14 font-medium">
                <div className="max-w-xl mx-auto">
                    <div className="bg-gray-100 rounded p-10">
                        <h4 className="mb-5">Create an account</h4>
                        <form
                            className="flex flex-col gap-7"
                            onSubmit={handleSubmit(onSubmit)}
                        >
                            <div className="">
                                <input
                                    type="text"
                                    {...register("fname", {
                                        required: "First name is required*",
                                    })}
                                    placeholder="First Name"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                                {errors.fname && (
                                    <p className="text-red-500">
                                        {errors.fname.message}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    {...register("lname")}
                                    placeholder="Last Name"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <div className="">
                                <input
                                    type="email"
                                    {...register("email", {
                                        required: "Email is required*",
                                    })}
                                    placeholder="Email address"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                                {errors.email && (
                                    <p className="text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>
                            <div className="relative">
                                <div
                                    className="absolute top-2 right-2 cursor-pointer"
                                    onClick={handleShowPass}
                                >
                                    {showPass ? (
                                        <IoIosEye className="text-xl" />
                                    ) : (
                                        <IoIosEyeOff className="text-xl" />
                                    )}
                                </div>
                                <input
                                    type={showPass ? "text" : "password"}
                                    {...register("password", {
                                        required: "Password is required*",
                                        minLength: {
                                            value: 6,
                                            message:
                                                "Password must be at least 6 character",
                                        },
                                        maxLength: {
                                            value: 8,
                                            message:
                                                "Password must be at most 8 characters",
                                        },
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z]).*$/,
                                            message:
                                                "Password must contain at least one lowercase letter, one uppercase letter",
                                        },
                                    })}
                                    placeholder="Password"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                                {errors.password && (
                                    <p className="text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <input
                                    type={showPass ? "text" : "password"}
                                    placeholder="Confirm Password"
                                    {...register("cpassword", {
                                        required:
                                            "Confirm password is required *",
                                        validate: (value) => {
                                            if (value !== watch("password")) {
                                                return "Password don't match";
                                            }
                                        },
                                    })}
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                                {errors.cpassword && (
                                    <p className="text-red-500">
                                        {errors.cpassword.message}
                                    </p>
                                )}
                            </div>
                            <div className="">
                                <input
                                    type="text"
                                    {...register("photo")}
                                    placeholder="Photo URL"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                className="tw-btn tw-btn-primary w-full"
                            >
                                {loading ? (
                                    <span className="loading loading-spinner loading-md"></span>
                                ) : (
                                    "Create an account"
                                )}
                            </button>
                            <div className="text-center">
                                Already have an account? &nbsp;
                                <NavLink
                                    to="/login"
                                    className="text-primary underline hover:no-underline"
                                >
                                    Login
                                </NavLink>
                            </div>
                        </form>
                    </div>
                    <div className="flex flex-wrap gap-x-5 items-center mx-auto max-w-md my-5">
                        <div className="border-b border-gray-400 bg-transparent flex-1"></div>
                        <span>Or</span>
                        <div className="border-b border-gray-400 bg-transparent flex-1"></div>
                    </div>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default Register;
