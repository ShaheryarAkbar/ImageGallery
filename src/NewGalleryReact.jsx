import React, { useState } from 'react';
import Menu from './Menu';
import './index.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import NewCatMenu from './NewCatMenu';
import NewMenu from './NewMenu';

const allCatValues = [...new Set(Menu.map((cur) => cur.category )), "all"];

console.log(allCatValues);

const NewGalleryReact = () => {

    const [items, setItems] = useState(Menu);
    const [catItems, setCatItems] = useState(allCatValues);

    const filterItems = (cate) => {

        if (cate === "all") {
            setItems(Menu);
            return;
        }

        const updated = Menu.filter((celem) => {
            return celem.category === cate;
        });

        setItems(updated);
    }

    return ( 
        <>
            <h1 className="mt-5 text-center main-heading"> Order Your Favourite Dish </h1>
            <hr />

            <NewCatMenu filterItems={filterItems} catItems={catItems} />

            {/* my main Items Section */}

            <NewMenu items={items} />
        </>
    )
}

export default NewGalleryReact
