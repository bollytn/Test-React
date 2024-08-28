import { useEffect } from "react"
import { useState } from "react"
import './style.css'
import { FaAngleDoubleRight } from "react-icons/fa";
const url = 'https://www.course-api.com/react-tabs-project';

export function Tabs() {
    const [loading, setLoading] = useState(true)
    const [jobs, setJobs] = useState([])
    const [value, setValue] = useState(0)

    const fetchJobs = async () => {
        setLoading(true)
        try {
            const responce = await fetch(url)
            const newJobs = await responce.json()
            setJobs(newJobs)
            setLoading(false)
            console.log(newJobs);

        } catch (error) {
            console.log(error)
            setLoading(false)
        }
    }

    useEffect(() => {
        fetchJobs()
    }, [])

    if (loading) {
        return <section className="section loading">
            <h1>loading</h1>
        </section>
    }

    const { company, dates, duties, title } = jobs[value]

    return (
        <section className="section">
            <div className="title">
                <h2>experience</h2>
                <div className="underline"></div>
            </div>
            <div className="job-center">
                <div className="btn-container">
                    {
                        jobs.map((job, index) => {
                            return (
                                <button key={job.id} className={value === index ? 'active-btn job-btn' : 'job-btn'}
                                    onClick={() => setValue(index)}>
                                    {job.company}
                                </button>
                            )
                        })
                    }
                </div>
                {/* job info */}
                <article className="job-info">

                </article>
                <article className="job-info">
                    <h3>{title}</h3>
                    <h4>{company}</h4>
                    <p className="job-date">{dates}</p>
                    {duties.map((duty, index) => (
                        <div key={index} className="job-desc">
                            <FaAngleDoubleRight className="job-icon" />
                            <p>{duty}</p>
                        </div>
                    )
                    )}
                </article>
            </div>
            <button type="button" className="btn">
                more info
            </button>
        </section>
    )
}