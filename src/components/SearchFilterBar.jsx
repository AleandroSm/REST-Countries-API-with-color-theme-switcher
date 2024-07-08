import { IoIosSearch } from "react-icons/io";

export const SearchFilterBar = ({debouncedGetCountriesByName}) => {

    return (
        <div className="px-4 md:px-16 mt-10">
            <div className="bg-lightEle shadow-md flex items-center dark:bg-darkEle">
                < IoIosSearch className="ml-4" />
                <input
                    onChange={(e) => debouncedGetCountriesByName(e.target.value)}
                    className="relative py-3 px-8 w-96  rounded-md outline-none  dark:bg-darkEle"
                    type="text"
                    placeholder="Search for a country..."
                />

            </div>
        </div>
    )
}