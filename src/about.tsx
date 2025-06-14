
import linkedin from './assets/icons8-linkedin-150.png'
import github from './assets/icons8-github-150.png'
function AboutMe() {
    return(
        <>
        <h1 className="text-5xl">Hi My Name is Lachlan Bruce</h1>
        <ul className="flex justify-center gap-4 py-10">
            
            <li className="border hover:border-8 rounded-lg flex flex-col items-center p-4 border-[oklch(0.8839_0.175747_169.6)]" onClick={() => window.open('https://www.linkedin.com/in/lachlan-bruce-19378b301/', '_blank')}>
                <img className="justify-center bg-gray-700" src={linkedin} alt="linkedin"></img>
                <span className="text-3xl">LinkedIn</span>
            </li>
            <li className="border hover:border-8 rounded-lg flex flex-col items-center p-4 border-[oklch(0.8839_0.175747_169.6)]" onClick={() => window.open('https://github.com/Bionic535', '_blank')}>
                <img className="justify-center bg-gray-700" src={github} alt="github"></img>
                <span className="text-3xl">GitHub</span>
            </li>
        </ul>
        </>
    );
}

export default AboutMe