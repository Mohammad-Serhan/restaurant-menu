import React, { useEffect, useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Button from "../components/General/Button";
import CreateItem from "../components/CreateItem";
// import fakeItems from "../db";
import { getAllCategories, getMenu } from "../actions/menuItems.action"; 

// const allCategories = [
//   "all",
//   ...new Set(fakeItems.map((item) => item.category)),
// ];
// console.log(allCategories);

const Home = () => {
  const [menuItems, setMenuItems] = useState(null);
  const [categories, setAllCategories] = useState(null);
  const [toggleShowItem, setToggleShowItem] = useState(false);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(categories);
      return;
    }
    const newItems = categories.filter((item) => item.category === category);
    setMenuItems(newItems);
  };




  const toggleShowAddButton = () => {
    setToggleShowItem(!toggleShowItem);
  };



    useEffect( () => {
      const fetchData = async () => {
        const menu = await getMenu("/getMenuItems");
        setMenuItems(menu);


        const categories = await getAllCategories("/getCategories");
        setAllCategories(categories);
      }
        fetchData();
    }, []);



    if(categories === null) {
        return (
          <div className="h-screen flex flex-col">
            <div className="mt-12 min-h-3/4 flex-grow">
              <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white shadow-xl overflow-hidden rounded-lg ">
                  Loading...
                </div>
              </div>
            </div>
          </div>
        );
    }


  return (
    <main className="mx-auto flex flex-col my-6">
      <div className="text-center">
        <h2 className="text-3xl inline-block mr-5 ">Menu</h2>
        <div className="flex justify-center">
          {toggleShowItem ? (
            <div onClick={toggleShowAddButton}>
              <Button type="primaryClose" />
            </div>
          ) : (
            <div onClick={toggleShowAddButton}>
              <Button type="primaryPlus" text="add Item" />
            </div>
          )}
        </div>
        <div className="mx-auto md:w-1/2">
          {toggleShowItem ? <CreateItem  /> : ""}
        </div>
      </div>
          <Categories categories={categories} filterItems={filterItems} />
          <Menu items={menuItems}  />
    </main>
  );
};

export default Home;
