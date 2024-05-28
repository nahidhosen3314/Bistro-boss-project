import { Link } from "react-router-dom";
import MenuItem from "./MenuItem";

const MenuCategory = ({ item, title }) => {
    return (
        <div className="pb-16">
            <div className="container">
                <div className="grid md:grid-cols-2 gap-5">
                    {item.map((item) => (
                        <MenuItem key={item._id} item={item}></MenuItem>
                    ))}
                </div>
                <div className="text-center mt-10">
                    <Link to={`/order/${title}`}>
                        <button className="hover:text-secondary hover:bg-light uppercase bg-white text-heading border-b-2 border-heading hover:border-transparent">
                            Order Now
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default MenuCategory;
