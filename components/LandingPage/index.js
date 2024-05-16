"use client";

import { useState } from "react";
import Container from "../utility/Container";
// import Graphics from "./Graphics";
import Details from "./Details";
import AboutTheme from '../About/AboutTheme'
import LandingEventsInfo from "../Events/LandingEventsInfo";
import VideoPlayer from "../videoPlayer/videoPlayer";
import PastSpeakers from "../HomeComponents/PastSpeakers";

const debounce = (func, delay) => {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => func.apply(this, args), delay);
  };
};

export default function LandingPage() {
  const windowWidth =
    typeof window !== "undefined" ? window?.innerWidth / 2 : 0;
  const screenOffset = windowWidth > 384 ? -120 : 0;
  const [pos, setPos] = useState({ x: screenOffset });

  const handleMouseMove = debounce((e) => {
    const xOffset = (windowWidth - e.clientX) / 10 + screenOffset;
    setPos({ x: xOffset });
  }, 10);

  return (
    <Container section="home">
      <div
        className="flex h-auto w-full flex-col content-center items-center"
        onMouseMove={handleMouseMove}
      >
        <Details />
        <a target="_blank" href="https://unstop.com/college-fests/eximius-2024-iim-bangalores-entrepreneurship-summit-indian-institute-of-management-iim-bangalore-245251" class="btn btn-lg">Register Now</a>
        <AboutTheme />
        <VideoPlayer />
        <LandingEventsInfo />
        {/* <PastSpeakers/> */}
      </div>
    </Container>
  );
}
