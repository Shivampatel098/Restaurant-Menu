import React from "react";

const Navbar = ({ filterItem, menuListProp }) => {
  return (
    <>
    <nav className='navbar'>
      {/* here also we don't want these buttons to repeat, there is only one change in this the onclick event is changing, so to do that we can make a separate component for Nav. */}
      <div className='btn-group'>
        {/* now here we want that when a user click on a breakfast it should display items related to that category. so we are calling a filterItem function and passing a Breakfast as an Argument. we are using aero function because we don't want function to call itself again and again. */}
        {
            menuListProp.map((curElem) => {
                return(
                    <button className='btn-group__item' onClick={() => filterItem(curElem)}>{curElem}</button> 

                );
            })
        }
        {/* <button className='btn-group__item' onClick={() => setMenuData(Menu)}>All</button> */}

      </div>
    </nav>
    </>
  )
}

export default Navbar;