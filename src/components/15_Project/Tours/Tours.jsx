import { useEffect, useState } from 'react';
import './tours.css'
import Loading from './Loading';
import Tour from './Tour'
const url = 'https://www.course-api.com/react-tours-project';

export default function Tours() {
    const [loading, setLoading] = useState()
    const [tours, setTours] = useState([])

    const removeTour = (id) => {
        const newTours = tours.filter((tour) => tour.id !== id)
        setTours(newTours)
    }

    const fetchTours = async () => {
        setLoading(true);
        try {
            const response = await fetch(url);
            const tours = await response.json();
            setLoading(false);
            setTours(tours);
            console.log(tours);

        } catch (error) {
            setLoading(false);
            console.log(error);
        }
    };

    useEffect(() => {
        fetchTours();
    }, [])

    if (loading) {
        return (
            <main>
                <Loading></Loading>
            </main>
        )
    }
    if (tours.length === 0) {
        return (
            <main>
                <div className="title">
                    <h2>no tours left</h2>
                    <button className='btn' onClick={fetchTours}>refresh</button>
                </div>
            </main>
        )
    }
    return (
        <main>
            <Tour tours={tours} removeTour={removeTour} />
        </main>
    )
}