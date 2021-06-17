import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';



const makeStore = () => {
    let composeEnhancer = compose;
    const middleware = [thunk];

    if (process.env.NODE_ENV === 'development') {
        if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
            composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
                trace: true
            })
        }
    }
    const store = createStore(
        rootReducer,
        composeEnhancer(applyMiddleware(...middleware)));
        return store;
}



export default makeStore;