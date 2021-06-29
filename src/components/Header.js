import React, { useContext } from 'react'
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import Brightness4Icon from '@material-ui/icons/Brightness4';
import Brightness7Icon from '@material-ui/icons/WbSunny';


import { searchedCountries } from '../redux/actions/actions';
import DrawerComponent from './DrawerComponent';
import { debounce } from '@material-ui/core';
import { ThemeContext, themes } from '../themes/themes-context';

const Header = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const { toggle, toggleFunction } = useContext(ThemeContext);

    const filteredCountriesPath = window.location.pathname.includes('/countries');

    return (
        <div className='header' style={toggle ? themes.dark : { background: '#5791AA' }}>
            <div>

                <h1>List of Countries</h1>
            </div>

            <div>
                {filteredCountriesPath ? null : <div>
                    <input type="text" className='input' placeholder="Search country..." onChange={debounce((e) => dispatch(searchedCountries(e.target.value)), 500)} />
                </div>

                }
            </div>

            <div className="header-actions">
                <div className="toggle">
                    <span onClick={toggleFunction}>{toggle ? <Brightness7Icon fontSize='medium' /> : <Brightness4Icon fontSize='default' />}</span>
                </div>
                <div className="toggle">
                    <DrawerComponent />
                </div>
            </div>

        </div>
    )
}

export default Header
