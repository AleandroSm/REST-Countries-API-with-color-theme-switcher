import { IoMoonOutline } from "react-icons/io5";

export const Header = () => {

    return (
        <header className="flex justify-between items-center h-24 px-4 md:px-16 bg-lightEle shadow-md dark:bg-darkEle dark:text-lightEle">
            <h1 className="font-bold md:text-xl">Where in the world?</h1>
            <div 
                className="flex items-center gap-2"
                onClick={() => {
                    document.documentElement.classList.toggle("dark")
                }}
            >
                < IoMoonOutline className="cursor-pointer" />
                <span >Dark Mode</span>
            </div>
        </header>
    )
}