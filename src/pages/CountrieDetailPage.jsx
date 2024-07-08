import { CountrieDetail } from "../components/CountrieDetail"
import { Header } from "../components/Header"
import { useParams } from "react-router-dom"
import { useCountries } from "../hooks/useCountries"

export const CountrieDetailPage = () => {

    const {name} = useParams()
    const {countries} = useCountries()

    const country = countries.filter(country => country.name.common === name)
    
    
    return (
        <>
            < Header />

            < CountrieDetail country={country} />

        </>
    )

}