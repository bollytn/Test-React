export default function Categorie({ filterItems, categories }) {
    return (
        <div className="btn-container">

            {/* function filter mapping */}

            {categories.map((categorie, index) => {
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
            })
            }
        </div>
    )
}