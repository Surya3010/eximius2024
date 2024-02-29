import CardLayout from "../components/Common/CardLayout";
import Competitions from "../components/Events/competitions";
import Container from "../components/utility/Container";
import Heading from "../components/utility/Heading";

const Events = () => {
  return (
    <Container>
      <Heading>Events 2024</Heading>
      <div className="w-full grid  justify-items-center grid-flow-col gap-4 px-2 md:px-8 pt-2 pb-4">

        <CardLayout>
          <div className="flex flex-col justify-between h-full">
            <a className="flex  flex-col justify-between items-center" href="#Competitions">
              <img src='images/competitions_icon.png' width='200px' />
              <span className="text-[20px]">Competitions</span>
            </a>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col justify-between h-full">
            <a className="flex flex-col justify-between items-center" href="#Workshops">
              <img src='images/workshops_icon.png' width='200px' />
              <span className="text-[20px]">Workshops</span>

            </a>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col justify-between h-full">
            <a className="flex flex-col justify-between items-center" href="#Speaker Sessions">
              <img src='images/speaker_session.png' width='200px' />
              <span className="text-[20px]">Speaker Sessions</span>
            </a>
          </div>
        </CardLayout>
        <CardLayout>
          <div className="flex flex-col justify-between h-full">
            <div className="flex flex-col justify-between items-center">
              <img src='images/campus_ambassador.png' width='200px' />
              <span className="text-[20px]">Campus Ambassador</span>
            </div>
          </div>
        </CardLayout>
      </div>
      <h1 className="text-[32px] mt-4" id='Competitions'>Competitions</h1>
      <Competitions />
      <h1 className="text-[32px] mt-4" id='Workshops'>Workshops</h1>
      <Competitions />
      <h1 className="text-[32px] mt-4" id='Speaker Sessions'>Speaker Sessions</h1>
      <Competitions />
    </Container>
  );
};

export default Events;
