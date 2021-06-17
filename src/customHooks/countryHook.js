import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCountries } from '../redux/actions/actions';

const useCountries = () => {
    const countries = useSelector(state => state.countriesReducer);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCountries())
    }, [dispatch])

    return countries
}

export default useCountries;
