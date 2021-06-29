const initialState = {
    countries: [],
    filteredCountries: [],
    favouriteCountries: []
};

const countriesReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case 'GET_COUNTRIES_SUCCESS':
            return {
                ...state,
                countries: payload
            };
        case 'SEARCHED_COUNTRIES':
            console.log('payload', payload)
            const searchedCountries = state.countries.filter((country) => country.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1)
            return {
                ...state,
                filteredCountries: searchedCountries
            };
        case 'FAVOURITE_COUNTRIES':
            return {
                ...state,
                favouriteCountries: [...state.favouriteCountries, payload]
            };
        case 'DELETE_FAVOURITE_COUNTRIES':
            const deleteCountry = state.favouriteCountries.filter((country) => country !== payload)
            return {
                ...state,
                favouriteCountries: deleteCountry
            };
        default:
            return state;

    }
}

export default countriesReducer;