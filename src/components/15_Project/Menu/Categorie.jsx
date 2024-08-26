const Categorie = ({ filterItems, categories }) => {
    return (
        <div className="btn-container">
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

export default Categorie;