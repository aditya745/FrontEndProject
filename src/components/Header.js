import React from 'react'
import { useDispatch } from 'react-redux';
import { searchedCountries } from '../redux/actions/actions';
import DrawerComponet from './DrawerComponet';
import { debounce } from '@material-ui/core';

const Header = () => {
    const dispatch = useDispatch();

    return (
        <div className="header">
            <div>

            </div>

            <div>
                <h1>List of Countries</h1>
            </div>

            <div>
                <input type="text" placeholder="Search country..." onChange={debounce((e) => dispatch(searchedCountries(e.target.value)), 500)} />
            </div>

            <div>
                <DrawerComponet />
            </div>
        </div>
    )
}

export default Header
