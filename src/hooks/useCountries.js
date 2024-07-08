import { useCallback,useState, useRef, useEffect} from "react"

export function useCountries()  {
    const [countries, setCountries] = useState([])
    const originalCountries = useRef([])
    
    const getCountriesByName = useCallback( async (country) => {
        try {
            if(country !== ''){
                const response = await fetch(`https://restcountries.com/v3.1/name/${country}`)
                if(!response.ok) return
                const data = await response.json()
                setCountries(data)
    
            }else setCountries(originalCountries.current)
            
        } catch (error) {
            console.log(error)
        }
        
    },[])

    const getCountriesByRegion = useCallback( async (region) => {
        try {
                const response = await fetch(`https://restcountries.com/v3.1/region/${region}`)
                if(!response.ok) return
                const data = await response.json()
                setCountries(data)
        } catch (error) {
            console.log(error)
        }
    },[])

    useEffect(() => {
        const callApi = async () => {
            try {
                    const response = await fetch("https://restcountries.com/v3.1/all")
                    const data = await response.json()
                    originalCountries.current = data
                    setCountries(data)
            } catch (error) {
                console.log(error)
            }
        }
        callApi()
    },[])

    return {
        countries,
        getCountriesByName,
        getCountriesByRegion
    }
}