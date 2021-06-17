const initialState = {
    countries: []
};

const countriesReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case 'GET_COUNTRIES_SUCCESS': 
            return {
                ...state,
                countries: payload
                };
        case 'SEARCHED_COUNTRIES':
            const searchedCountries = state.countries.filter((country) => country.name.toLowerCase().indexOf(payload.toLowerCase()) !== -1)
            return {
                ...state,
                countries: searchedCountries
            }
        default: 
            return state;    
        
    }
}

export default countriesReducer;