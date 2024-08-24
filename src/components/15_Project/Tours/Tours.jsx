import { useEffect, useState } from 'react';
import './tours.css'
import Loading from './Loading';
import Tour from './Tour'
const url = 'https://www.course-api.com/react-tours-project';

export default function Tours() {
    const [loading, setLoading] = useState()
    const [tours, setTours] = useState([])

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
    return (
        <main>
            <Tour />
        </main>
    )
}