import Categorie from "./Categorie";
import Menu from "./Menu"
import items from "./data"
import "./Menu.css"
import { useState } from "react";
export default function Menus() {

    const AllCategories = items.map((item) => item.category)
    const uniqueCategories = ['all', ...new Set(AllCategories)]

    const [menuItems, setMenuItems] = useState(items)
    const [categories, setCategories] = useState(uniqueCategories)


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
                <Categorie filterItems={filterItems} categories={categories} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}