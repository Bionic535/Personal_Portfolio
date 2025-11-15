import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
function home() {
    const navigate = useNavigate();
    return (
        <div className="min-h-screen flex items-center justify-center px-32">
            <div className="border-4 rounded-lg p-8 flex flex-row gap-4" style={{ borderColor: 'var(--border-color)' }}>
                <Button onClick={() => navigate('/socials')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Social Media</Button>
                <Button onClick={() => navigate('/projects')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Projects</Button>
                <Button onClick={() => navigate('/education')} style={{ borderColor: 'var(--border-color)', color: 'var(--border-color)' }} className='border-2 rounded-lg'>Education</Button>
            </div>
        </div>
    );
}

export default home;