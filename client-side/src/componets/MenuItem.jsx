const MenuItem = ({ item }) => {
    const { name, image, price, recipe } = item;

    return (
        <div className="">
            <div className="lg:flex items-center gap-4">
                <img className="w-24 h-24 object-cover rounded-b-full rounded-tr-full" src={image} alt="" />
                <div className="">
                    <div className="flex flex-wrap justify-between items-center">
                        <h4>{name} -------- </h4>
                        <p className="text-secondary">${price}</p>
                    </div>
                    <p className="mt-2">{recipe}</p>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
