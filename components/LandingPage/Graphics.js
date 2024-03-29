import RedText from "../utility/RedText";

export default function Graphics({ pos }) {
  const style1 = {
    transform: `translateX(${pos.x / 3}px)`,
    transition: "transform 0.3s ease",
  };
  return (
    <div className="relative h-[320px] w-full overflow-hidden rounded-xl md:w-screen lg:w-full">
      <div
        // className="absolute left-0 top-0 flex h-full w-screen bg-swirls_home bg-cover "
        className="absolute left-0 top-0 flex h-full w-screen bg-cover "
        style={{ ...style1 }}
      ></div>
      <div className="absolute bottom-3 left-0 lg:left-3">
        <div className="theme_text flex flex-col justify-end pl-[40px] uppercase">
          <div className="select-none text-[30px] font-bold leading-[85%] lg:text-[30px]">
            creating
          </div>
          <div className="flex select-none flex-col text-[80px] font-bold leading-[85%] md:flex-row md:text-[96px] lg:text-[136px]">
            <div>SOCIAL</div>
            <div><RedText>IMPACT</RedText></div>
          </div>
        </div>
      </div>
    </div>
  );
}
