import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { updateProfile } from "firebase/auth";
import toast from "react-hot-toast";

const UpdateProfile = () => {
    const { user } = useContext(AuthContext);

    const handelSubmit = (e) => {
        e.preventDefault();

        const form = e.target;
        const fullname = form.name.value;
        const photo = form.photo.value;
        const number = form.number.value;

        updateProfile(user, {
            displayName: fullname,
            photoURL: photo,
            phoneNumber: number,
        })
            .then(() => {
                toast.success("User Updated Successfully!");
            })
            .catch((error) => {
                toast.error(error.message);
            });
    };

    return (
        <div>
            <div className="container py-14 font-medium">
                <div className="max-w-xl mx-auto">
                    <div className="bg-gray-100 rounded p-10">
                        <h4 className="mb-5">Update your profile</h4>
                        <form
                            onSubmit={handelSubmit}
                            className="flex flex-col gap-7"
                        >
                            <div className="">
                                <input
                                    defaultValue={user?.displayName}
                                    type="text"
                                    name="name"
                                    placeholder="Full Name"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <div className="">
                                <input
                                    disabled
                                    readOnly
                                    defaultValue={user?.email}
                                    type="email"
                                    name="email"
                                    placeholder="Email address"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary bg-gray-200 cursor-not-allowed"
                                />
                            </div>
                            <div className="">
                                <input
                                    defaultValue={user?.photoURL}
                                    type="text"
                                    name="photo"
                                    placeholder="Photo URL"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <div className="">
                                <input
                                    defaultValue={user?.phoneNumber}
                                    type="text"
                                    name="number"
                                    placeholder="Phone Number"
                                    className="border-b border-gray-400 bg-transparent w-full py-2 font-medium !outline-none focus:border-primary"
                                />
                            </div>
                            <button
                                type="submit"
                                className="tw-btn tw-btn-primary w-full"
                            >
                                Update Profile
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UpdateProfile;
