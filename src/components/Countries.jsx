import debounce from "just-debounce-it";
import { useCallback} from "react";
import { DropDown } from "./DropDown";
import { CountriesList } from "./CountriesList";
import { useCountries } from "../hooks/useCountries";
import { SearchFilterBar } from "./SearchFilterBar";

export const Countries = () => {

    const {countries, getCountriesByName, getCountriesByRegion} = useCountries()
    
    const debouncedGetCountriesByName = useCallback(
        debounce(country => {
            getCountriesByName(country)
        },300)
        ,[getCountriesByName]
    )

    return (
        <main>

        <div className="flex flex-col md:items-center md:flex-row md:justify-between dark:text-lightEle">
            
            < SearchFilterBar debouncedGetCountriesByName={debouncedGetCountriesByName} />
            < DropDown getCountriesByRegion={getCountriesByRegion} />
        </div>

        < CountriesList countries={countries} />

        </main>
    )
}