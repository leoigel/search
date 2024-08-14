import React from 'react';
import { Button } from '@/components/ui/button';
import { useTheme } from '@/context/ThemeContext';

export const Header = () => {
  const { darkMode, toggleDarkMode } = useTheme();
  return (
    <header className='flex justify-between items-center w-full shadow-custom-shadow  h-16 pt-2 pb-2 px-24 dark:bg-custom-gradient'>
      <span className='text-text-light dark:text-text-dark text-xl font-black hover:underline'>
        Where in the world?
      </span>
      <Button onClick={toggleDarkMode} className='custom-btn hover:bg-zinc-300'>
        <img src='/moon.svg' alt='moon' />
        <span>Dark Mode</span>
      </Button>
    </header>
  );
};
