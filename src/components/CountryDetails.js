import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

import useCountries from '../customHooks/countryHook';
import { ThemeContext, themes } from '../themes/themes-context';
import CountryCard from './CountryCard';

const useStyles = makeStyles({
    root: {
        height: '100vh',
        paddingTop: 200,
        overflowY: 'hidden',
        width: '100vw'
    },
});

const CountryDetails = () => {
    const allCountries = useCountries();
    const { name } = useParams();
    const { toggle } = useContext(ThemeContext);
    const classes = useStyles();
    
   
    return (
        <div style={toggle ? themes.dark: {}} className="container" className={classes.root}>
            {allCountries.countries.filter(country => country.name === name).map(country => (
                <CountryCard country={country} key={country.name}/>
            ))}
        </div>
    )
}

export default CountryDetails
