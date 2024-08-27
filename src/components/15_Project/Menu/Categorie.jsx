export default function Categorie({ filterItems, categories }) {
    return (
        <div className="btn-container">
            <button className="filter-btn" onClick={() => filterItems('all')}>
                all
            </button>
            {categories && categories.map((categorie, index) => {
                return (
                    <button
                        type="button"
                        className="filter-btn"
                        key={index}
                        onClick={() => filterItems(categorie)}
                    >
                        {categorie}
                    </button>
                )
            })}
        </div>
    )
}