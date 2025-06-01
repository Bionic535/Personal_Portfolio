
import logo from './assets/IMG_2685.jpg';
import linkedin from './assets/icons8-linkedin-150.png'
import github from './assets/icons8-github-150.png'
function AboutMe() {
    return(
        <>
        <h1>Hi My Name is Lachlan Bruce</h1>
        <img id="selfie" src={logo} alt="Selfie" />
        <ul className="vertical-list">
            <li>
                <img src={linkedin} alt="linkedin"></img>
                <span>LinkedIn</span>
            </li>
            <li>
                <img src={github} alt="github"></img>
                <span>GitHub</span>
            </li>
        </ul>
        </>
    );
}

export default AboutMe