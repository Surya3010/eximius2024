import LandingPage from '../components/LandingPage';
import AboutTheme from '../components/About/AboutTheme';
import Yep from '../components/Yep';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <LandingPage />
            <AboutTheme />
            <Yep />
        </div>
    )
}

export default home