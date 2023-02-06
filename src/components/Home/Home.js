import { Input } from "../Control/index.js"
import { useState } from 'react'

const arr =
    [
        {
            id: 1,
            name: "A"
        },
        {
            id: 2,
            name: "B"
        },
        {
            id: 3,
            name: "C"
        }
    ]



const Home = (props) => {
    const [job, setJob] = useState('');
    const [jobs, setJobs] = useState([]);

    const handleAdd = (job) => {
        if (!jobs.includes(job)) {
            setJobs(prev => {

                const newJobs = [...prev, job]
                return newJobs
            })
        setJob('')
    }

        console.log(jobs)
    }

    return (
        <div style={{ padding: 32 }}>
            <input
                value={job}
                onChange={e => setJob(e.target.value)}
            />
            <button onClick={() => handleAdd(job)}>Add</button>

            <ul>
                {
                    jobs.map((job, key) => (
                        <li key={key}>{job}</li>
                    ))
                }
            </ul>
        </div>

    )
}

export default Home    