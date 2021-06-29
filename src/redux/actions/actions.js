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

export const searchedCountries = (searchInput) => {
    return {
        type: 'SEARCHED_COUNTRIES',
        payload: searchInput
    }
}

export const favouriteCountries = (country) => {
    return {
        type: 'FAVOURITE_COUNTRIES',
        payload: country
    }
}

export const deleteFavouriteCountry = (country) => {
    return {
        type: 'DELETE_FAVOURITE_COUNTRIES',
        payload: country
    }
}