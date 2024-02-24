import { useState } from 'react';
import Navbar from '../components/Navbar';

export default function Layout({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [intro, setIntro] = useState(false);
  const [navbarText, setNavbarText] = useState('Home');

  return (
    <div className={`h-screen lg:p-[0.8rem] flex flex-col select-none font-circular`}>
        {/* top of screen */}
        <Navbar />
      <div className='flex relative h-full justify-between gap-x-3'>
        {/* middle of screen */}
        <div className='w-full h-auto lg:w-12/12 shadow-2xl bg-transparent relative overflow-auto overflow-x-hidden no-scrollbar'>{children}</div>
      </div>
    </div>
  );
}
