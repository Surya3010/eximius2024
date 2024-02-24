import Heading from "../utility/Heading";

const YepCard = (props) => {
  return (
    <div className="h-fit w-full ">
      <Heading>Young Entrepreneurship Program</Heading>
      <div className="space-y-4 px-6 md:px-0">
        <article className="leading-tight md:w-[90%]">{props.children}</article>
      </div>
    </div>
  );
};

export default YepCard;
