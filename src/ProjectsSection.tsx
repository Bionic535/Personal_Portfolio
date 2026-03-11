import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom";

const projects=[
    {
        id: 1,
        title: "MovieAI",
        description: "A website built on django that uses sklearn to recommend the user a set number of films based on a given film",
        image: "e",
        tags: ["Django", "Sklearn", "HTTPS", "TailWind"],
        URL: "https://movieaisite.fly.dev/",
        Github_Link: "https://github.com/Bionic535/movieaisite",
        
    },
    {
        id: 2,
        title: "NewsBuddy",
        description: "An application built with electron that uses the openai api to summarise or fact check news articles for the user on manual input or with a keyboard shortcut",
        image: "e",
        tags: ["Electron", "TypeScript", "React", "TailWind"],
        Github_Link: "https://github.com/Bionic535/NewsBuddy",
        
    },
    {
        id: 3,
        title: "PokemonEbayBot",
        description: "An AI agent built with langgraph that helps a user search for pokemon card listings on ebay.",
        image: "e",
        tags: ["langgraph"],
        Github_Link: "https://github.com/Bionic535/PokemonEbayBot",
        
    },
    {
        id: 4,
        title: "PokeStats",
        description: "A website built on NextJs that will allow users to track the prices of pokemon cards.",
        image: "e",
        tags: ["NextJs", "TypeScript"],
        Github_Link: "https://github.com/Bionic535/PokeStats",
        
    }
    
]

function ProjectsSection() {
    const navigate = useNavigate();
    return (
        <>
        <div className="fixed top-4 left-4">
            <Button onClick={() => navigate('/')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Go to Home</Button>
        </div>
            <div className="min-h-screen flex items-center justify-center px-32">
                <div className="border-4 rounded-lg p-8" style={{ borderColor: 'var(--border-color)' }}>
                    <div className="grid grid-cols-2 gap-8 w-full">
                        {projects.map((project, key) => (
                            <div key={key} className="border-4 rounded-lg p-8" style={{ borderColor: 'var(--border-color)' }}>
                                <div>
                                    <h2 className="text-3xl font-bold" style={{ color: 'var(--border-color)' }}>{project.title}</h2>
                                    <p className="text-3xl" style={{ color: 'var(--border-color)' }}>{project.description}</p>
                                    <div className="flex flex-col mt-4">
                                        {project.URL && (
                                            <a 
                                                className="text-3xl block truncate w-full" 
                                                style={{ color: 'var(--border-color)' }} 
                                                href={project.URL} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                title={project.URL} // Shows full URL on hover
                                            >
                                                URL: {project.URL}
                                            </a>
                                        )}
                                        
                                        {project.Github_Link && (
                                            <a 
                                                className="text-3xl block truncate w-full" 
                                                style={{ color: 'var(--border-color)' }} 
                                                href={project.Github_Link} 
                                                target="_blank" 
                                                rel="noopener noreferrer"
                                                title={project.Github_Link} // Shows full URL on hover
                                            >
                                                GitHub URL: {project.Github_Link}
                                            </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            
        </>
    )
}

export default ProjectsSection