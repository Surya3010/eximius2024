import Link from "next/link";
import Image from "next/image";
import RedText from "../utility/RedText";
import './globals.css';

export default function Details() {
  return (
    <article className="mb-24 flex w-full -translate-y-[50px] flex-col items-center justify-center gap-24 text-center md:translate-y-0 lg:mb-32 lg:mt-[75px] lg:flex-row lg:gap-0 ">
      <div className="flex-1 text-[60px] font-extralight leading-[90%] lg:text-left" style={{ color: 'white' }}>
        EXIMIUS
      </div>
      <div className="text-shape flex-1 select-none text-center font-extralight leading-none" style="background-color: #C32630;">
        <div className="text-[80px]" style={{ color: 'white' }}>6-7</div>
        <div className="text-[30px]" style={{ color: 'white' }}>JUL '24</div>
      </div>
      <div className="flex-1 text-[30px] font-extralight leading-none lg:text-right">
        <div className="text-[30px] flex items-center justify-center">
          <Image
            src="/images/IIMB_NSRCEL.png"
            height={24}
            width={200}
            loading="eager"
            alt="IIMB,NSRCEL"
          />
          </div>
        <div>
        </div>
      </div>
    </article>
  );
}
