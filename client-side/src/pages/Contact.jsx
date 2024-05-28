import { Helmet } from "react-helmet-async";
import Cover from "../componets/Cover";
import SectionTitle from "../componets/SectionTitle";
import { FaPhoneVolume } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";
import { MdAccessTime } from "react-icons/md";
import { FiSend } from "react-icons/fi";

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro boss | Contact</title>
            </Helmet>
            <Cover
                imgUrl={"https://i.ibb.co/jZTvNvZ/contact.jpg"}
                headingStyle={{ fontSize: "60px", color: "white" }}
                heading={"Contact us"}
                subContentStyle={{ color: "white" }}
                subContent={"Would you like to try a dish?"}
            ></Cover>
            <SectionTitle
                subHading={"Visit Us"}
                heading={"OUR LOCATION"}
            ></SectionTitle>
            <div className="container">
                <div className="pb-16">
                    <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
                        <div className="border border-[#F3F3F3]">
                            <div className="bg-[#D1A054] py-4 flex justify-center text-white">
                                <FaPhoneVolume />
                            </div>
                            <div className="bg-[#F3F3F3] text-center mx-5 mb-5">
                                <div className="p-12">
                                    <h4 className="uppercase mb-2">PHONE</h4>
                                    <p>+38 (012) 34 56 789</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-[#F3F3F3]">
                            <div className="bg-[#D1A054] py-4 flex justify-center text-white">
                                <IoLocationSharp />
                            </div>
                            <div className="bg-[#F3F3F3] text-center mx-5 mb-5">
                                <div className="p-12">
                                    <h4 className="uppercase mb-2">ADDRESS</h4>
                                    <p>+38 (012) 34 56 789</p>
                                </div>
                            </div>
                        </div>
                        <div className="border border-[#F3F3F3]">
                            <div className="bg-[#D1A054] py-4 flex justify-center text-white">
                                <MdAccessTime />
                            </div>
                            <div className="bg-[#F3F3F3] text-center mx-5 mb-5">
                                <div className="p-12">
                                    <h4 className="uppercase mb-2">
                                        WORKING HOURS
                                    </h4>
                                    <p>Mon - Fri: 08:00 - 22:00</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <SectionTitle
                        subHading={"Send Us a Message"}
                        heading={"CONTACT FORM"}
                    ></SectionTitle>
                    <div className="bg-[#F3F3F3] p-12">
                        <form>
                            <div className="flex gap-5">
                                <input
                                    type="text"
                                    placeholder="Enter Your Name"
                                />
                                <input
                                    type="email"
                                    name=""
                                    placeholder="Enter Your Email"
                                />
                            </div>
                            <div className="my-5">
                                <input
                                    type="phone"
                                    placeholder="Enter Your Phone"
                                />
                            </div>
                            <div className="">
                                <textarea
                                    rows="8"
                                    placeholder="Enter Your Message"
                                ></textarea>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <input className="w-4" type="checkbox" name="" id="" 
                                />
                                <p>I am not roboto</p>
                            </div>
                            <div className="text-center mt-10">
                                <button className="mx-auto flex items-center gap-3 bg-secondary">Send Message <FiSend/></button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
