import Categorie from "./Categorie";
import Menu from "./Menu"
import items from "./data"
import "./Menu.css"
import { useState } from "react";
export default function Menus() {
    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState([])

    const AllCategories = items.map((item) => item.category)
    const uniqueCategories = [...new Set(AllCategories)]
    console.log(uniqueCategories);


    const filterItems = (categorie) => {
        if (categorie === 'all') {
            return setMenuItems(items)
        }
        const newItems = items.filter(item => item.category === categorie)
        setMenuItems(newItems)
    }

    return (
        <main>
            <section className="menu section">
                <div className="title">
                    <h2>our menu</h2>
                    <div className="underline"></div>
                </div>
                <Categorie filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}