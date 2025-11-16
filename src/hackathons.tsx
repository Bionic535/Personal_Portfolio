import { Button } from "./components/ui/button"
import { useNavigate } from "react-router-dom";

const hackathons=[
    {
        id: 1,
        title: "EcoPulse Hackathon 2025",
        Place: "1st Place",
        Amount_Won: "3000 AUD For The Team",
        Submission: "https://github.com/Bionic535/Ecopulse-Hackathon-Submission"
        
    }
]

function hackathon() {
    const navigate = useNavigate();
    return (
        <>
        <div className="fixed top-4 left-4">
            <Button onClick={() => navigate('/')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Go to Home</Button>
        </div>
            <div className="min-h-screen flex items-center justify-center px-32">
                <div className="border-4 rounded-lg p-8" style={{ borderColor: 'var(--border-color)' }}>
                    <div className={`grid ${hackathons.length > 1 ? 'grid-cols-2' : 'grid-cols-1'} gap-8 w-full`}>
                        {hackathons.map((hackathon, key) => (
                            <div key={key} className="border-4 rounded-lg p-8" style={{ borderColor: 'var(--border-color)' }}>
                                <div>
                                    <h2 className="text-3xl font-bold" style={{ color: 'var(--border-color)' }}>{hackathon.title}</h2>
                                    <p className="text-3xl" style={{ color: 'var(--border-color)' }}>{hackathon.Place}</p>
                                    <p className="text-3xl" style={{ color: 'var(--border-color)' }}>{hackathon.Amount_Won}</p>
                                    <div className="text-3xl" style={{ color: 'var(--border-color)' }}>
                                        My Submission: <a href={hackathon.Submission} target="_blank" rel="noopener noreferrer" className="underline">{hackathon.Submission}</a>
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

export default hackathon