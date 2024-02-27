import LandingPage from '../components/LandingPage';
import AboutTheme from '../components/About/AboutTheme';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <LandingPage />
            <AboutTheme />
        </div>
    )
}

export default home