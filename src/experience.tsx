import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom";

const experiences=[
    {
        id: 1,
        title: "RichMindWA Software Engineer Intern",
        description: "Developed an azure function with c# to automatically sync 2 api's",
        Duration: "June 2025 - July 2025",
        
    }
]

function experience() {
    const navigate = useNavigate();
    return (
        <>
        <div className="fixed top-4 left-4">
            <Button onClick={() => navigate('/')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Go to Home</Button>
        </div>
            <div className="min-h-screen flex items-center justify-center px-32">
                <div className="border-4 rounded-lg p-8" style={{ borderColor: 'var(--border-color)' }}>
                    <div className={`grid ${experiences.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-8 w-full`}>
                        {experiences.map((experience, key) => (
                            <div key={key} className="border-4 rounded-lg p-8" style={{ borderColor: 'var(--border-color)' }}>
                                <div>
                                    <h2 className="text-3xl font-bold" style={{ color: 'var(--border-color)' }}>{experience.title}</h2>
                                    <p className="text-3xl" style={{ color: 'var(--border-color)' }}>{experience.description}</p>
                                    <p className="text-3xl" style={{ color: 'var(--border-color)' }}>{experience.Duration}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                </div>
            
        </>
    )
}

export default experience