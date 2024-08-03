import {useState, useEffect} from "react";

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
        <div id="themeButton" className="fixed flex w-[62px] h-[62px] items-center justify-center left-[30px] bottom-[50px] 
        rounded-[50px]  bg-[#041d4c] dark:bg-slate-200 cursor-pointer transition-all duration-700 
        hover:shadow-lg hover:shadow-['rgb(0,0,0, 0.25)'] hover:bg-white shadow-gray-700 hover:scale-110"
        onClick={() => toggleTheme()}>
            <div className="w-[25px] h-[25px] bg-center bg-contain bg-no-repeat bg-[url('https://ik.imagekit.io/2zlgs27bjo/public/icons/lamp-dark.svg')]">
            </div>
        </div>
    )
}

export default ThemeButton