import { Helmet } from "react-helmet-async";
import Cover from "../componets/Cover";

import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../hooks/UseHook";
import OrderTab from "../componets/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
    const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks']
    const {category} = useParams();
    const initialIndex = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialIndex);

    console.log(category);


    const [menu] = useMenu();

    const dessert = menu.filter((item) => item.category === "dessert");
    const soup = menu.filter((item) => item.category === "soup");
    const salad = menu.filter((item) => item.category === "salad");
    const pizza = menu.filter((item) => item.category === "pizza");
    const drinks = menu.filter((item) => item.category === "drinks");

    return (
        <div>
            <Helmet>
                <title>Bistro boss | Order Food</title>
            </Helmet>

            <Cover
                imgUrl={"https://i.ibb.co/Sw3204T/Rectangle-1.jpg"}
                headingStyle={{ fontSize: "60px", color: "white" }}
                heading={"OUR SHOP"}
                subContentStyle={{ color: "white" }}
                subContent={"Would you like to try a dish?"}
            ></Cover>

            <div className="container">
                <Tabs
                    defaultIndex={tabIndex}
                    onSelect={(index) => setTabIndex(index)}
                >
                    <TabList>
                        <Tab>salad</Tab>
                        <Tab>pizza</Tab>
                        <Tab>soups</Tab>
                        <Tab>dessert</Tab>
                        <Tab>drinks</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab item={salad}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={pizza}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={soup}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={dessert}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab item={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;
