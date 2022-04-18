import React, { useState } from 'react';
import Menu from './Menu';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


// const allCatValues = new Set(Menu.map((cur) => {
//     return cur.category;
// }))

const GalleryReact = () => {

    const [items, setItems] = useState(Menu);

    const filterItems = (cate) => {
        const updated = Menu.filter((celem) => {
            return celem.category == cate;
        });
        setItems(updated);
    }

    return ( 
        <>
            <h1 className="mt-5 text-center main-heading"> Order Your Favourite Dish </h1>
            <hr />

            <div className="menu-tabs container">
                <div className="menu-tab d-flex justify-content-around">
                    <button className="btn btn-warning" onClick={() => filterItems('breakfast')}>Breakfast</button>
                    <button className="btn btn-warning" onClick={() => filterItems('lunch')}>Lunch</button>
                    <button className="btn btn-warning" onClick={() => filterItems('dinner')}>Dinner</button>
                    <button className="btn btn-warning" onClick={() => setItems(Menu)}>All</button>
                </div>
            </div>

            {/* my main Items Section */}

            <div className="menu-items container-fluid mt-5">
                <div className="row">
                    <div className="col-11 mx-auto">
                        <div className="row my-5">

                            {
                                items.map((elem) => {
                                    const {id, name, imgsrc, description, price} = elem;

                                    return (
                                        <>
                                        <div className="item1 col-12 col-md-6 col-lg-6 col-xl-4 my-3" key={id}>
                                            <div className="row Item-inside">
                                                <div className="col-12 col-md-12 col-lg-4 img-div">
                                                    <img src={imgsrc} alt={name} className="img-fluid" />
                                                </div>
                                                <div className="col-12 col-md-12 col-lg-8">
                                                    <div className="main-title pt-4 pb-3">
                                                        <h1>{name}</h1>
                                                        <p>{description}</p>
                                                    </div>
                                                    <div className="menu-price-book">
                                                        <div className="price-book-divide d-flex justify-content-between">
                                                            <h2>{price}</h2>
                                                            <a href="#">
                                                                <button className="btn btn-primary">Order Now</button>
                                                            </a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        </>
                                    )
                                })
                            }

                            
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default GalleryReact
