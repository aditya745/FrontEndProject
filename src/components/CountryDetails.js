import React from 'react';
import { useParams } from 'react-router-dom';

import useCountries from '../customHooks/countryHook';
import CountryCard from './CountryCard';


const CountryDetails = () => {
    const allCountries = useCountries();
    const { name } = useParams();
   
    return (
        <div>
            {allCountries.countries.filter(country => country.name === name).map(country => (
                <CountryCard country={country} key={country.name}/>
            ))}
        </div>
    )
}

export default CountryDetails
