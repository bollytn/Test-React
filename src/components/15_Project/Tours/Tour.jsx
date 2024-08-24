import Tour_item from "./Tour_item"

export default function Tour({tours}) {
    return (
        <section>
            <div className="title">
                <h2>Ours Tours</h2>
                <div className="underline"></div>
            </div>
            <div>
                {tours.map((tour) => {
                    return <Tour_item key={tour.id} {...tour}/>
                })}
            </div>
        </section>
    )
}