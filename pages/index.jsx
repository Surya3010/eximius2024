import LandingPage from '../components/LandingPage';
import AboutTheme from '../components/About/AboutTheme';
import Yep from '../components/Yep';
import Speakers from '../components/Speakers';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <LandingPage />
            <AboutTheme />
            <Speakers/>
            <Yep />
        </div>
    )
}

export default home