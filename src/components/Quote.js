import { Button } from 'react-bootstrap'
import React, { useState } from 'react'

function Quote() {
    const [name,setName] = useState('"Small chnages in context can lead to large chnages in behaviour overtime"')
    const getone=()=>{
        const r=['"Continue to plant wonderful seeds of thoughts in the garden of your mind and you will reap glorious harvest " -Joseph Murphy',
        '"Great Opportunities are not seen with your eyes ,They are seen with your Mind"',
'"Life is a best Teacher of all."',
'"Each push in life saying wake up.There is something I want your learn  "',
'"Habits creats the foundation for Mastery"'
        ];
        setName(r[Math.floor(Math.random() * r.length)]);
    }
    return (
        <div data-aos="fade-left">
            <div className="q-container">
            <div className="q-in"><h1>{name}</h1></div>
            <Button className="btn" onClick={getone}>One More</Button>
            </div>
        </div>
    )
}

export default Quote

