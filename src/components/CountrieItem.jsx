import { useNavigate } from "react-router-dom"


export const CountrieItem = ({ countrie }) => {

    const navigate = useNavigate()

    return (
        <div className="cursor-pointer" onClick={() => navigate(`country/${countrie.name.common}`)}>
            <picture>
                <img className="h-2/4 w-full" src={countrie.flags.png} alt="country image" />
            </picture>
            <div className="flex flex-col px-4 bg-lightEle shadow-md h-2/4 dark:text-lightEle dark:bg-darkEle">
                <h2 className="font-bold mt-5">{countrie.name.common}</h2>
                <span className="mt-2">Population: <small className="text-gray-400">{countrie.population}</small></span>
                <span>Region: <small className="text-gray-400">{countrie.region}</small></span>
                <span>Capital: <small className="text-gray-400">{countrie.capital}</small></span>
            </div>
        </div>
    )
}