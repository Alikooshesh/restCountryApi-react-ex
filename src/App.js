import CountryCard from "./components/countryCard";
import { useEffect, useState } from "react";
import axios from "axios";


function App() {

  const [allCountryData , setAllCountryData] = useState(null)

  useEffect(()=>{
    axios.get("https://restcountries.com/v3.1/all")
      .then((data) => setAllCountryData(data.data))
      .catch((err)=> console.log(err))
  },[])

  return (
    <div>
      {allCountryData && allCountryData.map(country => {
        return <CountryCard key={country.cca3}
        name={country.name.common}
        capitalName={country.capital && country.capital[0]}
        flagImageLink={country.flags && country.flags.svg}
      />
      })}
    </div>
  );
}

export default App;
