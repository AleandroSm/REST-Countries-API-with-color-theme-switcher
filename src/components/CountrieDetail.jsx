import { IoIosArrowRoundBack } from "react-icons/io";
import { useNavigate } from "react-router-dom";

export const CountrieDetail = ({country}) => {

    const navigate = useNavigate()

    return (
        <div className="px-6 mt-8 md:px-16 dark:text-lightEle">
            <button 
            className="flex items-center gap-2 bg-lightEle dark:bg-darkEle shadow-md rounded-md py-1 px-6"
            onClick={() => navigate(-1)}
            >
                {< IoIosArrowRoundBack />}
                Back
            </button>
            {
                country.map((ele,index) => (
                    <div key={index} className="mt-10 md:grid md:grid-cols-2 gap-20">
                        <picture>
                            <img src={ele.flags.png} alt="country image" className="w-full "/>
                        </picture>
                        <div className="mt-6">
                            <h2 className="font-bold text-2xl">{ele.name.common}</h2>
                            <div className="md:flex md:justify-between">
                                <div className="mt-6">
                                    <p className="py-1">Native Name: <small className="text-gray-400">{Object.values(ele.name.nativeName)[0].official}</small> </p>
                                    <p className="py-1">Population: <small className="text-gray-400">{ele.population}</small></p>
                                    <p className="py-1">Region: <small className="text-gray-400">{ele.region}</small></p>
                                    <p className="py-1">Sub Region: <small className="text-gray-400">{ele.subregion}</small></p>
                                    <p className="py-1">Capital: <small className="text-gray-400">{ele.capital}</small></p>
                                </div>
                                <div className="mt-6">
                                    <p className="py-1">Top Level Domain: <small className="text-gray-400">{ele.tld}</small></p>
                                    <p className="py-1">Currencies: <small className="text-gray-400">{Object.values(ele.currencies)[0].name}</small></p>
                                    <p className="py-1">Languages: <small className="text-gray-400">{Object.values(ele.languages).map(languaje => languaje + " ")}</small></p>
                                </div>
                            </div>
                                <div className="mt-6 gap-4">
                                    <h2 className="font-bold ">Border Countries:</h2>
                                    <div className="mt-2 flex flex-wrap gap-1">
                                        {ele.borders && ele.borders.map((border,index) => (
                                            <button key={index} className="bg-lightEle dark:bg-darkEle mt-1 shadow-md py-1 px-10 text-xs">{border}</button>
                                        ))}
                                    </div>
                                </div>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}