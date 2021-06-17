import React from 'react'
import { useDispatch } from 'react-redux';
import { searchedCountries } from '../redux/actions/actions';
import DrawerComponet from './DrawerComponet';
import {getCountries} from '../redux/actions/actions';
import { debounce } from '@material-ui/core';

import useCountries from '../customHooks/countryHook';

const Header = () => {
    //const countries = useCountries();
    const dispatch = useDispatch();
    // const updateSearch = (e) => {
    //const searchedCountries = countries.filter((country) => country.name.toLowerCase().indexOf((e.target.value).toLowerCase()) !== -1)
    //return
    // console.log('search', searchedCountries)
    //dispatch(searchedCountries(e.target.value))
    // }

    return (
        <div className="header">
            <div>

            </div>

            <div>
                <h1>List of Countries</h1>
            </div>

            <div>
                <input type="text" placeholder="Search country..." onChange={debounce((e) => e.target.value ? dispatch(searchedCountries(e.target.value)) : dispatch(getCountries()), 500)} />
            </div>

            <div>
                <DrawerComponet />
            </div>
        </div>
    )
}

export default Header
