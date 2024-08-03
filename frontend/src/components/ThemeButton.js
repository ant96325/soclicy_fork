import React from 'react';
import { useState, useEffect } from 'react';
import { FloatButton } from 'antd';
import { SunFilled } from '@ant-design/icons';

const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Load theme preference from localStorage on component mount
  useEffect(() => {
    const storedTheme = localStorage.getItem('color-theme');
    if (storedTheme === 'dark' || (!storedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
  }, []);

  const toggleTheme = () => {
    if (isDarkMode) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('color-theme', 'light');
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('color-theme', 'dark');
    }
    setIsDarkMode(!isDarkMode);
  };

  return (
    <FloatButton icon={<SunFilled />} className="fixed bottom-12 left-8 bg-blue-800 hover:bg-white h-[62px] w-[62px]" onClick={toggleTheme} />
  );
};
export default ThemeButton;