import React, { useState } from 'react'
import "./style.css";
import Menu from './menuApi.js';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [
  ...new Set(Menu.map((curElem) => {
  // here we want a list of all the categories from a menuApi.
  return curElem.category;
})),
  "All",
];
// console.log(uniqueList);, so here we are able to get all the categories but it is repeating, we want unique data.
//A JavaScript Set is a collection of unique values. Each value can only occur once in a Set. Set objects are collections of values.
// so after adding new Set we will be able to get unique data. but it will be an object. so we have to convert it in Array.
// even after this we will be getting array of objects. we only want pure Data. so to do that we will use spread operator.
const Restaurant = () => {
  // we should always write hooks first before any components
  const [menuData, setMenuData] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueList);
  // console.log(menuData);
  // explaination: const [statevariable: it will be our current data, updated function] = useState(initialdata);

  // filterItem function creation.
  const filterItem = (category) => {
    if (category === "All") {
      setMenuData(Menu);
      return;
    }
    // we will get the current Element at Menu.filer(curElem)
    const updatedList = Menu.filter((curElem) => {
      // here curElem.category will match with the category
      return curElem.category === category;
    });

    setMenuData(updatedList);
    // whenever the setMenuData item i.e. updated function, values are updated it will change the values of the current state's values as well. 


  };

  return (
    <>
      <Navbar filterItem={filterItem} menuListProp={menuList} />
      {/* Passing data to component using props:-> */}
      <MenuCard menuDataProp={menuData} /> 
      {/* <nav className='navbar'> */}
      {/* here also we don't want these buttons to repeat, there is only one change in this the onclick event is changing, so to do that we can make a separate component for Nav. */}
      {/* <div className='btn-group'> */}

      {/* now here we want that when a user click on a breakfast it should display items related to that category. so we are calling a filterItem function and passing a Breakfast as an Argument. we are using aero function because we don't want function to call itself again and again. */}
      {/* <button className='btn-group__item' onClick={() => filterItem("Breakfast")}>Breakfast</button> 
        <button className='btn-group__item' onClick={() => filterItem("Lunch")}>Lunch</button>
        <button className='btn-group__item' onClick={() => filterItem("Evening")}>Evening</button>
        <button className='btn-group__item' onClick={() => filterItem("Dinner")}>Dinner</button>
        <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button> */}

      {/* </div> */}
      {/* </nav> */}
      {/* here we want that we receive Data from menuData to a MenuCard component. */}
      {/* How to pass props?: whatever data you have ex: menuData -> copy that and paste that after the componenet name as attribute, we can give anyname of attribute but the same name shoud be passed to  */}

    </>
  )
}

export default Restaurant
// after displaying the menu items based on the category, if we try to add new category to the menuApi, it will not  create a new category nav item. so to do this we can try creating a component for this.