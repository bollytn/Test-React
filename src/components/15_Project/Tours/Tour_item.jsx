export default function Tour_item ({id,image,price,name,info}) {
    return (
        <article className="single-tour">
            <img src={image} alt={name} />
            <footer>
                <div className="tour-info">
                    <h4>{name}</h4>
                    <h4 className="tour-price">${price}</h4>
                </div>
                <p>{info}</p>
                <button className="delete-btn">not intersted</button>
            </footer>
        </article>
    )
}