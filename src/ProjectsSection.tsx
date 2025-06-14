const projects=[
    {
        id: 1,
        title: "MovieAI",
        description: "A website built on django that uses sklearn to recommend the user a set number of films based on a given film",
        image: "e",
        tags: ["Django", "Sklearn", "HTTPS", "TailWind"],
        URL: "https://bionic535.pythonanywhere.com/",
        Github_Link: "#",
        
    }
]

function ProjectsSection() {
    return (
        <>
            <div className="py-8">
                {projects.map((project, key) => (
                    <div key={key} className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover py-8">
                        <div>
                            <h2 className="text-3xl">{project.title}</h2>
                            <a className="text-3xl text-blue-500 hover:text-blue-700" href={project.URL} target="_blank" rel="noopener noreferrer">{project.URL}</a>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}

export default ProjectsSection