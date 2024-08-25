import './reviews.css'
import Review from "./Review";
export default function Reviews() {
    return (
        <main>
            <section className="container">
                <div className="title">
                    <h2>our reviws</h2>
                    <div className="underline"></div>
                </div>
                <Review/>
            </section>
        </main>
    )
}