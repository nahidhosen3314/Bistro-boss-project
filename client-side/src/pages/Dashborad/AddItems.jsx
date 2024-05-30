import { useForm } from "react-hook-form";
import SectionTitle from "../../componets/SectionTitle";
import { FaUtensils } from "react-icons/fa";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAxioaSecure from "../../hooks/useAxioaSecure";
import Swal from "sweetalert2";

const image_hosting_key = import.meta.env.VITE_IMAGE_HOSTING_KEY;
const image_hosting_api = `https://api.imgbb.com/1/upload?key=${image_hosting_key}`

const AddItems = () => {
    const {
        handleSubmit,
        reset,
        formState: { errors },
        register,
    } = useForm();
    const axiosPublic = useAxiosPublic();
    const axiosSecure = useAxioaSecure();

    const onSubmit = async (data) => {
        console.log('reacipe item',data);
        
        // image upload to imgbb then get an url
        const imageFile = {image : data.image_file[0]}
        const res = await axiosPublic.post(image_hosting_api, imageFile, {
            headers: {
                'content-type': 'multipart/form-data'
            }
        });
        console.log('image-url',res.data);
        if (res.data.success) {
            const menuItem = {
                name: data.name,
                category: data.category,
                price: parseInt(data.price),
                image: res.data.data.display_url,
            };

            const menuRes = await axiosSecure.post('/menu', menuItem);
            console.log("menu Item", menuRes.data);
            if (menuRes.data.insertedId) {
                // show success popup
                reset();
                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: `${data.name} is added to the menu`,
                    showConfirmButton: false,
                    timer: 1500
                  });
                  
            }
        }

    };

    
    return (
        <div className="py-16">
            <SectionTitle
                subHading={"What's new?"}
                heading={"ADD AN ITEM"}
            ></SectionTitle>
            <div className="">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className=" mb-3">
                        <p className="mb-2">Recip Name*</p>


                        <input {...register("name", {
                            required: "Recip Name is required*.",
                        })} placeholder="Name" />

                        {errors.name && (
                                <div className="text-red-500">
                                    {errors.name.message}
                                </div>
                            )}


                    </div>
                    <div className="grid grid-cols-2 gap-4 mb-3">


                        <div className="">
                            <p className="mb-2">Category</p>
                            <select defaultValue=''
                                {...register("category", {
                                    required: 'Category is required*'
                                })}
                                className=""
                            >
                                
                                <option value='' disabled >
                                    Select Category
                                </option>
                                <option value="salad">Salad</option>
                                <option value="pizza">Pizza</option>
                                <option value="soups">Soups</option>
                                <option value="dessert">Dessert</option>
                                <option value="drinks">Drinks</option>
                            </select>
                            {errors.category && (
                                <div className="text-red-500">
                                    {errors.category.message}
                                </div>
                            )}
                        </div>



                        <div className="">
                            <p className="mb-2">Pirce*</p>
                            <input {...register("price",{
                                required: "Price is required*.",
                            })} type="number" placeholder="Price"/>

                            {errors.price && (
                                <div className="text-red-500">
                                    {errors.price.message}
                                </div>
                            )}

                        </div>
                    </div>
                    <div className="">
                        <p className="mb-2">Recipe Details*</p>
                        <textarea {...register('recipeDetails',{
                            required: 'Recipe Details is required*'
                        })} className="w-full" rows="6" placeholder="Recipe Details"></textarea>
                        {errors.recipeDetails && (
                            <div className="text-red-500">
                                {errors.recipeDetails.message}
                            </div>
                        )}
                    </div>
                    <div className="flex items-center gap-3 mt-4">

                        <input {...register("image_file",{
                             required: "Image is required*.",
                        })} type="file" className="w-full max-w-xs bg-transparent"  />
                    </div>
                        {errors.image_file && (
                            <div className="text-red-500">
                                {errors.image_file.message}
                            </div>
                        )}

                    <div className="mt-5">
                        <button className="bg-[#835D23] text-lg flex items-center gap-2">Add Item
                            <FaUtensils />
                        </button>
                    </div>

                </form>
            </div>
        </div>
    );
};

export default AddItems;
