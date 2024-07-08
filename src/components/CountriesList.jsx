import { CountrieItem } from "./CountrieItem"

export const CountriesList = ({countries}) => {

    return (
        <div className="mt-14 px-16 grid grid-cols-1 md:grid-cols-4 gap-16">
            {
                countries.map((countrie,index) => (
                    < CountrieItem countrie={countrie} key={index} />
                ))
            }
        </div>
    )
}