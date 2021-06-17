export const getCountries = (countries) => {
    return async (dispatch) => {
        const response = await fetch('https://restcountries.eu/rest/v2/all');
        const data = await response.json();
        dispatch(getCountriesSuccess(data));
    }
}

export const getCountriesSuccess = (countries) => {
    return {
        type: 'GET_COUNTRIES_SUCCESS',
        payload: countries
    }
}

export const searchedCountries = (countries) => {
    return {
        type: 'SEARCHED_COUNTRIES',
        payload: countries
    }
}