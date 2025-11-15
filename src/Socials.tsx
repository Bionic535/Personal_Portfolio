import { Button } from './components/ui/button';
import { useNavigate } from 'react-router-dom';
function Socials() {
    const navigate = useNavigate();
    return(
        <>
        <div className="min-h-screen flex items-center justify-center px-32">
            <div className="border-4 rounded-lg p-8 flex flex-row gap-4" style={{ borderColor: 'var(--border-color)' }}>
                <Button onClick={() => navigate('/')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Go to Home</Button>
                <Button onClick={() => window.open('https://www.linkedin.com/in/lachlan-bruce-19378b301/', '_blank')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>LinkedIn</Button>
                <Button onClick={() => window.open('https://github.com/Bionic535', '_blank')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>GitHub</Button>
            </div>
        </div>
        
        </>
    );
}

export default Socials;