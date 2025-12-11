import { Button } from "./components/ui/button"
import { useNavigate } from 'react-router-dom';
function Education(){
    const navigate = useNavigate();
    return(
       <>
        <div className="fixed top-4 left-4">
            <Button onClick={() => navigate('/')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Go to Home</Button>
        </div>
        <div className="min-h-screen flex items-center justify-center px-32">
            <div className="border-4 rounded-lg p-8 flex flex-col gap-4" style={{ borderColor: 'var(--border-color)' }}>
                <p className="text-3xl font-bold" style={{ color: 'var(--border-color)' }}>Bachelor of Computing Major in Computer Science - Curtin University (2024 - 2026)</p>
                <p className="text-3xl" style={{ color: 'var(--border-color)' }}>Weighted Average Mark: 73.94</p>
                <p className="text-3xl" style={{ color: 'var(--border-color)' }}>Concepts Learned:</p>
                <ul className="list-disc list-inside text-3xl" style={{ color: 'var(--border-color)' }}>
                    <li>Data Structures (Stacks, Heaps, Queues, Linked Lists, Trees)</li>
                    <li>Java</li>
                    <li>C</li>
                    <li>Git</li>
                    <li>MYSQL</li>
                    <li>Design Patterns in Java (Strategy, Observer, State, etc)</li>
                    <li>Neural Network Basics</li>
                </ul>
            </div>
        </div>
       </>
    )
}

export default Education