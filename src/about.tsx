import logo from './assets/IMG_2685.jpg';
import linkedin from './assets/icons8-linkedin-150.png'
import github from './assets/icons8-github-150.png'
function AboutMe() {
    return(
        <>
        <h1 className="text-5xl">Hi My Name is Lachlan Bruce</h1>
        <ul className="inline-grid grid-cols-6 w-full justify-center bg-gray-700 gap-4 py-10">
            
            <li className="border rounded-lg flex flex-col items-center p-4 bg-[oklch(0.8839 0.175747 169.6)]">
                <img className="justify-center" src={linkedin} alt="linkedin"></img>
                <span className="text-3xl">LinkedIn</span>
            </li>
            <li className="border rounded-lg flex flex-col items-center p-4 bg-[oklch(0.8839 0.175747 169.6)]">
                <img src={github} alt="github"></img>
                <span className="text-3xl">GitHub</span>
            </li>
        </ul>
        </>
    );
}

export default AboutMe