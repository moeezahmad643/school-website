import React from 'react'
import "./feature.css"
import grand from "./images/grand.png"
import student from "./images/student.png"
import winner from "./images/winner.png"
import work from "./images/work.png"
import team from "./images/team.png"
import lead from "./images/lead.png"

export const Feature = () => {
    return (
        <section id='feature-box'>

            <div className='Feature-card'>
                <img src={grand} alt="" />
                <p> Enhance knowledge and critical thinking through science fairs, math contests, and spelling bees.</p>
            </div>
            <div className='Feature-card'>
                <img src={student} alt="" />
                <p>Promote physical health and teamwork via intramural sports, track and field events, and fitness challenges.</p>
            </div>
            <div className='Feature-card'>
                <img src={winner} alt="" />
                <p>  Foster creativity and cultural awareness through art exhibitions, music recitals, and theater performances.</p>
            </div>
            <div className='Feature-card'>
                <img src={work} alt="" />
                <p> Instill a sense of responsibility and empathy with volunteer work and social service initiatives.</p>
            </div>
            <div className='Feature-card'>
                <img src={team} alt="" />
                <p>Expand horizons with expert talks, skill-building workshops, and career guidance sessions.</p>
            </div>
            <div className='Feature-card'>
                <img src={lead} alt="" />
                <p> Develop leadership and organizational skills through student council, debate clubs, and leadership camps.</p>
            </div>

        </section>
    )
}
