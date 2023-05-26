import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import ProductsCard from "../../Shared/ProductsCard";

const Categories = () => {
    const [categories, setCategories] = useState([]);
    const [subId, setSubId] = useState(1);
    const [subCategoryData, setSubCategoryData] = useState([]);

    useEffect(() => {
        fetch("https://epic-rumble-server.vercel.app/subCategories")
            .then((res) => res.json())
            .then((data) => setCategories(data));
    }, []);

    useEffect(() => {
        fetch(`https://epic-rumble-server.vercel.app/subcategory/${subId}`)
            .then((res) => res.json())
            .then((data) => setSubCategoryData(data.slice(0, 3)));
    }, [subId]);

    const handleCategory = (id) => {
        setSubId(id);
    };

    return (
        <div className="min-h-[91vh] py-10">
            <h1 className="text-center lg:text-5xl text-2xl mb-10">
                Shop by Category
            </h1>
            <div className="max-w-6xl max-auto px-4 mx-auto">
                <Tabs>
                    <TabList className="text-center border-b text-info font-medium">
                        {categories.map((category) => (
                            <Tab
                                onClick={() =>
                                    handleCategory(category.subCategoryId)
                                }
                                key={category._id}
                            >
                                {category.subCategoryName}
                            </Tab>
                        ))}
                    </TabList>
                    {categories.map((category) => (
                        <TabPanel key={category._id}>
                            <h2 className="text-center my-5 text-xl font-medium lg:text-2xl">
                                {category.subCategoryName}
                            </h2>
                            <div className="grid lg:grid-cols-3 gap-10">
                                {subCategoryData.map((item) => (
                                    <ProductsCard
                                        key={item._id}
                                        product={item}
                                    ></ProductsCard>
                                ))}
                            </div>
                        </TabPanel>
                    ))}
                </Tabs>
            </div>
        </div>
    );
};

export default Categories;
