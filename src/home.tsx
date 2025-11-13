import { Link } from 'react-router-dom';

function home() {
    return (
        <div>
            <div>
                <Link to="/socials" className="m-4 inline-block px-6 py-3 bg-green-500 text-black font-bold text-lg rounded hover:bg-green-400">
                    Go to Socials
                </Link>
            </div>
        </div>
    );
}

export default home;