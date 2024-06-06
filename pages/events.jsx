import CardLayout from "../components/Common/CardLayout";
import Competitions from "../components/Events/competitions";
import SpeakerSessions from "../components/Events/speaker_sessions";
import Workshops from "../components/Events/workshops";
import Container from "../components/utility/Container";
import Heading from "../components/utility/Heading";

const Events = () => {
  return (
    <Container>
      <Heading>Events’24</Heading>
      <div className="grid  justify-items-center grid-cols-2 md:grid-cols-4 gap-4 px-2 md:px-8 pt-2 pb-4">

        <CardLayout>
          <div className="flex flex-col justify-between h-full hover:transition-all hover:scale-[1.2] ease-linear">
            <a className="flex  flex-col justify-between items-center" href="#Competitions">
              <img src='images/competitions_icon.png' width='150px' />
              <span className="text-[20px]" style={{ textAlign: 'center' }}>Competitions</span>
            </a>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col justify-between h-full hover:transition-all hover:scale-[1.2] ease-linear">
            <a className="flex flex-col justify-between items-center" href="#Workshops">
              <img src='images/workshops_icon.png' width='150px' />
              <span className="text-[20px]" style={{ textAlign: 'center' }}>Workshops</span>

            </a>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col justify-between h-full hover:transition-all hover:scale-[1.2] ease-linear">
            <a className="flex flex-col justify-between items-center" href="#Speaker Sessions">
              <img src='images/speakers_icon.png' width='150px' />
              <span className="text-[20px]" style={{ textAlign: 'center' }}>Speaker Sessions</span>
            </a>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col justify-between h-full hover:transition-all hover:scale-[1.2] ease-linear">
            <div className="flex flex-col justify-between items-center">
              <img src='images/campus_ambassador.png' width='150px' />
              <span className="text-[20px]" style={{ textAlign: 'center' }}>Campus Ambassador</span>
            </div>
          </div>
        </CardLayout>
      </div>
      <h1 style={{ fontSize: '28px', margin: '50px 0px 25px', textTransform: 'uppercase' }} id='Competitions'>Competitions</h1>
      <Competitions />
      <h1 style={{ fontSize: '28px', margin: '50px 0px 25px', textTransform: 'uppercase' }} id='Workshops'>Workshops</h1>
      <Workshops />
      <h1 style={{ fontSize: '28px', margin: '50px 0px 25px', textTransform: 'uppercase' }} id='Speaker Sessions'>Speaker Sessions</h1>
      <SpeakerSessions />
    </Container>
  );
};

export default Events;
