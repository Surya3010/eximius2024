
import Container from "../utility/Container";
import RedText from "../utility/RedText";

const AboutTheme = () => {
  return (
    <Container section="about_theme">
      <article className="mb-8 flex w-full items-center justify-center pt-2 text-center md:px-[5%] pos-relative">
        <p className="para block px-2 text-left md:px-0 md:text-center" style={{color: 'white'}}>
          Eximius, IIM Bangalores’s Entrepreneurship and Innovation summit, is one of the most celebrated festivals hosted in the Indian B-school community. Eximius is an <RedText>expression for excellence</RedText>, a platform and opportunity for individuals to transcend the ordinary and ride on the waves of the emerging startup culture.
          <br /> 
          <br />
          This year is the 17th edition of our annual summit Eximius 2024 – <RedText> Ideate to Elevate </RedText>Last year was proof that Eximius is a success irrespective of the medium it’s taking place.When has anything prevented us from unleashing our minds ? We promise to bring a global startup experience to you.
          Please join us in making this grander than ever before!
        </p>
      </article>
    </Container>
  );
};

export default AboutTheme;
