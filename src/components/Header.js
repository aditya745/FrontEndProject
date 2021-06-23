import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { searchedCountries } from '../redux/actions/actions';
import DrawerComponet from './DrawerComponet';
import { debounce } from '@material-ui/core';
import { ThemeContext, themes } from '../themes/themes-context';

const Header = () => {
    const dispatch = useDispatch();
    const { toggle, toggleFunction } = useContext(ThemeContext);

    const filteredCountriesPath = window.location.pathname.includes('/countries');
    console.log('path', filteredCountriesPath)

    return (
        <div className='header' style={toggle ? themes.dark : {}}>
            <div>
                <button className="toggle" onClick={toggleFunction}>{toggle ? 'dark' : 'light'}</button>
            </div>

            <div>
                <h1>List of Countries</h1>
            </div>

            {filteredCountriesPath ? null : <div>
                <input type="text" placeholder="Search country..." onChange={debounce((e) => dispatch(searchedCountries(e.target.value)), 500)}/>
            </div> 
}
            <div>
                <DrawerComponet />
            </div>
        </div>
    )
}

export default Header
