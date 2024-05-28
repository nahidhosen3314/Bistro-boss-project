import { Helmet } from "react-helmet-async";
import Cover from "../componets/Cover";
import useMenu from "../hooks/UseHook";
import SectionTitle from "../componets/SectionTitle";
import MenuCategory from "../componets/MenuCategory";

const OurMenu = () => {
    const [menu] = useMenu();
    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const offered = menu.filter((item) => item.category === "offered");

    console.log("soups", soup);

    return (
        <div className="">
            <Helmet>
                <title>Bistro boss | Our Menu</title>
            </Helmet>

            <Cover
                imgUrl={"https://i.ibb.co/f1M5HFB/ourmenu.jpg"}
                headingStyle={{ fontSize: "60px", color: "white" }}
                heading={"OUR MENU"}
                subContentStyle={{ color: "white" }}
                subContent={
                    "Would you like to try a dish? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, impedit sed molestiae atque deleniti reprehenderit eaque quis molestias nostrum, iusto ipsum, eligendi laboriosam quam animi facilis. Architecto quia sequi error! "
                }
            ></Cover>

            {/* offered */}
            <SectionTitle
                subHading="Don't miss"
                heading="TODAY' OFFER"
            ></SectionTitle>

            <MenuCategory item={offered}></MenuCategory>

            {/* dessert */}

            <Cover
                imgUrl={"https://i.ibb.co/rG8453k/dessert-bg.jpg"}
                heading={"dessert"}
                subContent={
                    "Would you like to try a dish? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, impedit sed molestiae atque deleniti reprehenderit eaque quis molestias nostrum, iusto ipsum, eligendi laboriosam quam animi facilis. Architecto quia sequi error! "
                }
                headingStyle={{ fontSize: "40px", color: "white" }}
                subContentStyle={{ color: "white" }}
            ></Cover>
            <MenuCategory item={dessert} title={'dessert'}></MenuCategory>

            {/* pizza */}
            <Cover
                imgUrl={"https://i.postimg.cc/TPyGr1Lb/pizza.jpg"}
                heading={"Pizza"}
                subContent={
                    "Would you like to try a dish? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, impedit sed molestiae atque deleniti reprehenderit eaque quis molestias nostrum, iusto ipsum, eligendi laboriosam"
                }
                headingStyle={{ fontSize: "40px", color: "white" }}
                subContentStyle={{ color: "white" }}
            ></Cover>
            <MenuCategory item={pizza} title={'pizza'}></MenuCategory>

            {/* salad */}
            <Cover
                imgUrl={"https://i.postimg.cc/zBZmKj1m/salad-bg.jpg"}
                heading={"salad"}
                subContent={
                    "Would you like to try a dish? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, impedit sed molestiae atque iusto ipsum, eligendi laboriosam"
                }
                headingStyle={{ fontSize: "40px", color: "white" }}
                subContentStyle={{ color: "white" }}
            ></Cover>
            <MenuCategory item={salad} title={'salad'}></MenuCategory>

            {/* soup */}
            <Cover
                imgUrl={"https://i.postimg.cc/9MjSrQGC/soup-bg.jpg"}
                heading={"soup"}
                subContent={
                    "Would you like to try a dish? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, impedit sed molestiae atque iusto ipsum, eligendi laboriosam"
                }
                headingStyle={{ fontSize: "40px", color: "white" }}
                subContentStyle={{ color: "white" }}
            ></Cover>
            <MenuCategory item={soup} title={'soup'}></MenuCategory>

        </div>
    );
};

export default OurMenu;
