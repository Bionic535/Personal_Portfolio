import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
function home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center px-32">
            <div className="border-4 rounded-lg p-8 flex flex-col gap-4" style={{ borderColor: 'var(--border-color)' }}>
                <div className='flex-col'>
                    <p className="text-3xl font-bold" style={{ color: 'var(--border-color)' }}>Hi My Name is Lachlan Bruce</p>
                </div>
                <Button onClick={() => navigate('/experience')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Experience</Button>
                <Button onClick={() => navigate('/projects')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Projects</Button>
                <Button onClick={() => navigate('/hackathon')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Hackathon</Button>
                <Button onClick={() => navigate('/education')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Education</Button>
                <Button onClick={() => navigate('/socials')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Social Media</Button>
            </div>
        </div>
    );
}

export default home;