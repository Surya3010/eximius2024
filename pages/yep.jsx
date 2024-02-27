import YepCard from "../components/Yep/YepCard";
import RedText from "../components/utility/RedText";
import Container from "../components/utility/Container";
import Heading from "../components/utility/Heading";

const Yep = () => {
  return (
    <Container>
      <Heading>Young Entrepreneurship Program</Heading>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6 pos-relative">
        <div className="h-[200px] w-full bg-yep bg-cover bg-custom md:w-[250px] lg:bg-cover lg:bg-left"></div>
        <YepCard id="1">
          IIM Bangalore's <RedText>Young Entrepreneurship Program</RedText> (YEP) is a 3-day bootcamp equipping young minds with the knowledge, skills, and mindset to launch and grow businesses.
          <br />
          <br />
          Through workshops, mentorships, and access to funding and networks, YEP empowers future entrepreneurs in idea generation, planning, marketing, finance, and leadership. <RedText>Fostering innovation, creativity, and social responsibility</RedText>, the program aims to:
          <ul style={{ listStyle: 'inside', lineHeight: '2rem' }}>
            <li>Create successful and empowered entrepreneurs. </li>
            <li>Champion sustainable and socially responsible businesses.</li>
            <li>Build a vibrant entrepreneurial ecosystem.</li>
            <li> Provide equal opportunity for diverse backgrounds.</li>
            <li>Encourage positive social impact.</li>
          </ul>
          <br />
          With a legacy of over 250 participants last year, YEP is committed to leaving a lasting impression on the lives of young entrepreneurs and the communities they impact
        </YepCard>
      </div>
      <br />
      <br />
      <h1 className="ml-[25px] select-none text-5xl font-[200] uppercase max-sm:py-5 md:ml-[32px] md:pb-10 lg:ml-0 lg:pb-10 lg:text-[32px]">
        Eligibilty
      </h1>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6 pos-relative">
      <div className="h-[200px] w-full bg-eligibility bg-cover bg-custom md:w-[250px] lg:bg-cover lg:bg-left"></div>
        <YepCard id="2">
            Mandatory attendance during the opening and closing ceremonies
            <br />
            <br />
            Attendance in at least 6 sessions (speaker session/ panel discussion/workshops) across both the days of the summit (excluding mandatory attendance in opening and closing ceremonies)
        </YepCard>
      </div>
    </Container>
  );
};

export default Yep;
