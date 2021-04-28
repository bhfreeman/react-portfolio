import React from 'react'
import projects from '../utils/projects.json'
import ProjectCard from '../components/ProjectCard'

function Portfolio() {
    return (
        <>
        <div className="col-10">
            <div className="row justify-content-center">

            <div className="col-12 m-5 text-center">
                <h1><strong>Portfolio</strong></h1>
            </div>
        {projects.map(({img,name,description, github, deployed})=>{
            return <ProjectCard 
            key={name}
            img={img}
            name={name}
            description={description}
            github={github}
            deployed={deployed}
            />
        })}
        </div>
        </div>
        </>
    )
}

export default Portfolio
