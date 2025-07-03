const projects=[
    {
        id: 1,
        title: "MovieAI",
        description: "A website built on django that uses sklearn to recommend the user a set number of films based on a given film",
        image: "e",
        tags: ["Django", "Sklearn", "HTTPS", "TailWind"],
        URL: "http://3.106.221.224:8000/",
        Github_Link: "https://github.com/Bionic535/movieaisite",
        
    }
]

function ProjectsSection() {
    return (
        <>
            <div className="border-t-4 border-blue-500">
                {projects.map((project, key) => (
                    <div key={key} className="py-8 border-b-4 border-blue-500">
                        <div>
                            <h2 className="text-3xl">{project.title}</h2>
                            <p className="text-3xl">{project.description}</p>
                            <div className="flex flex-col">
                                <a className="text-3xl hover:text-blue-700" href={project.URL} target="_blank" rel="noopener noreferrer">URL: {project.URL}</a>
                                <a className="text-3xl hover:text-blue-700" href={project.Github_Link} target="_blank" rel="noopener noreferrer">GitHub URL: {project.Github_Link}</a>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectsSection