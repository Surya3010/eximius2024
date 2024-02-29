import LandingPage from '../components/LandingPage';
import PastSpeakers from '../components/HomeComponents/PastSpeakers';
const home = () => {
    return (
        <div className="Home-Page -z-10">
            <LandingPage />
            <PastSpeakers />
        </div>
    )
}

export default home