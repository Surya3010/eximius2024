import YepCard from "./YepCard";
import RedText from "../utility/RedText";
import Container from "../utility/Container";

const Yep = () => {
  return (
    <Container>
      <div className="flex h-fit w-full flex-col items-center justify-center gap-16 rounded-[5px] border-white py-12 pt-0 transition-all duration-200 md:h-fit md:flex-row md:gap-6 md:border md:py-6 pos-relative">
        {/* AYUSH KRISHNA */}
        <div className="h-[200px] w-full bg-yep bg-cover bg-custom md:w-[300px] lg:bg-cover lg:bg-left"></div>
        <YepCard id="1">
          IIM Bangalore's <RedText>Young Entrepreneurship Program</RedText> (YEP) is a 3-day bootcamp equipping young minds with the knowledge, skills, and mindset to launch and grow businesses. 
          <br/>
          <br/>
          Through workshops, mentorships, and access to funding and networks, YEP empowers future entrepreneurs in idea generation, planning, marketing, finance, and leadership. <RedText>Fostering innovation, creativity, and social responsibility</RedText>, the program aims to:
          <ul style={{listStyle:'inside', lineHeight:'2rem'}}>
            <li>Create successful and empowered entrepreneurs. </li>
            <li>Champion sustainable and socially responsible businesses.</li>
            <li>Build a vibrant entrepreneurial ecosystem.</li>
            <li> Provide equal opportunity for diverse backgrounds.</li>
            <li>Encourage positive social impact.</li>
          </ul>
          <br/>
          With a legacy of over 250 participants last year, YEP is committed to leaving a lasting impression on the lives of young entrepreneurs and the communities they impact
        </YepCard>
      </div>
    </Container>
  );
};

export default Yep;
