import { compose, createStore, applyMiddleware } from 'redux'
import rootReducer from '../reducers'
// middleware
import thunk from 'redux-thunk';


const enhancer = compose(
    // Enables your middleware:
    applyMiddleware(thunk) // any Redux middleware, e.g. redux-thunk
);

export default function configureStore(initialState) {
    return createStore(rootReducer, initialState, enhancer);
}
