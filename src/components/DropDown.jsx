import { useState } from "react"
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";


export const DropDown = ({getCountriesByRegion}) => {
    const [isOpen, setIsOpen] = useState(false)
    const regions = ["Africa","America","Asia","Europe","Oceania"]
    return (

        <div className="mt-10 px-4 md:px-16">
            <button
            onClick={() => setIsOpen(!isOpen)} 
            className="flex items-center gap-10 bg-lightEle shadow-md py-3 px-6 rounded-md dark:bg-darkEle dark:text-lightEle"
            >
                Filter by Region
                {!isOpen ? <AiOutlineDown /> : < AiOutlineUp />}
            </button>
            {
                isOpen && (
                    <div className="bg-lightEle shadow-md px-4 rounded-md mt-2 absolute w-[13.5rem] dark:bg-darkEle">
                        {regions.map((region, index) => (
                           <button 
                           key={index} 
                           className="leading-loose block hover:text-blue-300"
                           onClick={() => {
                            getCountriesByRegion(regions[index].toLocaleLowerCase())
                            setIsOpen(!isOpen)
                           }}
                           >
                            {region}
                           </button> 
                        ))}
                    </div>
                )
            }
        </div>

    )
}