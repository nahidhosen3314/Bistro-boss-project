
import SectionTitle from "./SectionTitle";
import MenuItem from "./MenuItem";
import useMenu from "../hooks/UseHook";

const PopularMenu = () => {

    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')


    return (
        <div className="mb-16">
            <div className="container">
                <SectionTitle
                    heading={"Check it out"}
                    subHading={"From our menu"}
                ></SectionTitle>

                <div className="grid md:grid-cols-2 gap-5">
                    {popular.map((item) => (
                        <MenuItem key={item._id} item={item}></MenuItem>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <button className="hover:text-secondary hover:bg-light uppercase bg-white text-heading border-b-2 border-heading hover:border-transparent">View Full  Menu</button>
                </div>
            </div>
        </div>
    );
};

export default PopularMenu;
