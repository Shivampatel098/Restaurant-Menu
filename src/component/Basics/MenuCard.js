import React from 'react'

const MenuCard = ({ menuDataProp }) => {
    return (
        <>
        <div className='main-card--container'>
            {/* JSX elements directly inside a map() call always need keys!, Keys tell React which array item each component corresponds to, so that it can match them up later. */}
             {/* MAP() method creates a new array (using the existing array) with the results of calling a fucntion for every array element.
                - The map() method calls the provided fuction once for each element in an array, in order.
                - map() method is mostly used when we have to loop through array elements.
                - syntax: array.map(function(currentValue, index, arr), thisValue)
                    arr= the array object the current element belongs to.
                - map() method will not change the values of old array.  */}
            {menuDataProp.map((curElem) => {
                // Destructuring of objects, ie., we are using curElem.id, curElem.Name, we don't want that.
                const {id,image, name, category, description, price} = curElem;
                return (
                    <>
                        <div className="card-container" key={id}>
                            <div className="card">
                                <div className="card-body">
                                    <span className="card-number card-circle subtle">{id}</span>
                                    <span className="card-author subtle">{category}</span>
                                    <h2 className="card-title">{name}</h2>
                                    <span className="card-description subtle">
                                    {description}
                                    </span>
                                    <div className="card-read">Read</div>
                                </div>
                                <img src={image} alt="images" className='card-media' />
                                <span className="card-tag subtle">{price}</span>
                            </div>
                        </div>
                    </>
                )
            })}
            </div>
        </>
    )
}

export default MenuCard