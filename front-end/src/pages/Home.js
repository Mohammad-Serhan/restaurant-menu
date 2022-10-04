import React, { useEffect, useState, useRef } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Button from "../components/General/Button";
import CreateItem from "../components/CreateItem";
import Navbar from "../components/General/Navbar";
// import fakeItems from "../db";
import {
  getAllCategories,
  getMenu,
  deleteItem,
  addItem,
} from "../actions/menuItems.action";

// const allCategories = [
//   "all",
//   ...new Set(fakeItems.map((item) => item.category)),
// ];
// console.log(allCategories);

const Home = () => {
  let AllItems = useRef(null);
  const [menuItems, setMenuItems] = useState(null);
  const [categories, setAllCategories] = useState(null);
  const [toggleShowItem, setToggleShowItem] = useState(false);

  const filterItems = (category) => {
    // console.log(menuItems);
    // console.log(AllItems.current);
    if (category === "all") {
      setMenuItems(AllItems.current);
      return;
    }

    const newItems = AllItems.current.filter(
      (item) => item.category === category
    );
    setMenuItems(newItems);
  };

  const toggleShowAddButton = () => {
    setToggleShowItem(!toggleShowItem);
  };

  const addMenuItem = async (item) => {
    try {
      // let response =
       await addItem(`/addItem`, item);
       fetchData();
       toggleShowAddButton();
      // console.log(response);
      // if (response.data.created) {
        // AllItems.current = [...categories, item];
        // console.log(AllItems.current);
      // }
    } catch (error) {
      console.log(" error ");
    }
  };


  const deleteMenuItem = async (id) => {
    try {
      // let response =
       await deleteItem("/deleteItem/", id);
       fetchData()
      // console.log(response);
     
    } catch (error) {
      console.log(" error ");
    }
  };



  useEffect(() => {
    fetchData();
  }, [ ]);



   const fetchData = async () => {
     const menu = await getMenu("/getMenuItems");
     if(menu.data){
      setMenuItems(menu.data.menuItems);
      AllItems.current = menu.data.menuItems;
     }
     // console.log(menu);

     const categories = await getAllCategories("/getCategories");
      // console.log(categories);
      if(categories.data) {
        setAllCategories(categories.data.allCategories);
      }
   };

  if (categories === null) {
    return (
      <div className="h-screen flex flex-col">
      <Navbar />
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
    <main className="mx-auto flex flex-col ">
    <Navbar />
      <div className="text-center my-6">
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
          {toggleShowItem ? <CreateItem addMenuItem={addMenuItem} /> : ""}
        </div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} deleteMenuItem={deleteMenuItem} />
    </main>
  );
};

export default Home;
