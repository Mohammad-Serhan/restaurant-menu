import React, {  useState } from "react";
import Menu from "../components/Menu";
import Categories from "../components/Categories";
import Button from "../components/General/Button";
import CreateItem from "../components/CreateItem";
import fakeItems from "../db";

const allCategories = [
  "all",
  ...new Set(fakeItems.map((item) => item.category)),
];
// console.log(allCategories);

const Home = () => {
  const [menuItems, setMenuItems] = useState(fakeItems);
  const [categories] = useState(allCategories);
  const [toggleShowItem, setToggleShowItem] = useState(false);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(fakeItems);
      return;
    }
    const newItems = fakeItems.filter((item) => item.category === category);
    setMenuItems(newItems);
  };


  const addItems = (item) => {
    item.id = fakeItems[fakeItems.length-1].id+1;
    fakeItems.push(item);
    setMenuItems(fakeItems);
    console.log(fakeItems);
  };


  const toggleShowAddButton = () => {
      setToggleShowItem(!toggleShowItem)
  };



  const editItem = (item) => {
    // fakeItems.push(item);
    // setMenuItems(fakeItems);
    console.log(fakeItems);
  };


  const deleteItem = (id) => {
    fakeItems.splice(id-1,1)
    setMenuItems((currentItems) =>
      currentItems.filter((item) => {
        // 👇️ remove object that has id equal to id
        return item.id !== id;
      })
    );
  };



// addItems({
//   id: fakeItems.length+1,
//   title: "zayton",
//   category: "launch",
//   price: 15,
//   img: "https://media.istockphoto.com/photos/homemade-meat-gyro-with-french-fries-picture-id486037149?b=1&k=20&m=486037149&s=612x612&w=0&h=xa9Z98kjA0czwLPraQ6krJIG7aGcVdt0S9LBDAbv-Q8=",
//   ingrediants: [ "parsley", ""],
//   calories: "",
//   reference: "",
// });

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
          {toggleShowItem ? <CreateItem addItems={addItems} /> : ""}
        </div>
      </div>
      <Categories categories={categories} filterItems={filterItems} />
      <Menu items={menuItems} deleteItem={deleteItem} editItem={editItem} />
    </main>
  );
};

export default Home;
