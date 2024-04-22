// import { useState } from 'react';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import ParticlesBackground from '../components/particlesBackground';

export default function Layout({ children }) {

  return (
    // <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
    <div className={`h-screen bg-theme flex flex-col select-none font-circular`}>
        {/* top of screen */}
        <Navbar />
      <div className='flex relative h-full justify-between gap-x-3'>
        {/* middle of screen */}
        <ParticlesBackground />
        <div className='w-full h-auto lg:w-12/12 shadow-2xl bg-transparent relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>
      </div>
    </div>
  );
}
