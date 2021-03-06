import React from 'react'


function ProjectCard({img, name, description, github, deployed}) {
    return (
        <div className="card text-center m-3 p-0">
            <div className="card-header bg-dark text-white mb-1">{name}</div>
            <img src={img} className="card-img-top" alt={name} />
            <div className="card-body">
                <p className="card-text">{description}</p>
                <a href={github} target="_blank" rel="noreferrer" className="btn">GitHub Repo</a>
                {deployed && <a href={deployed} target="_blank" rel="noreferrer" className="btn">Deployed Link</a> }
                
            </div>
        </div>
    )
}

export default ProjectCard
