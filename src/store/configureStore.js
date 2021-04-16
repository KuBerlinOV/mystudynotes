import { createStore, combineReducers } from 'redux';

//import-reducers
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';

const configureStore = () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        filters: filtersReducer
    }))
    return store
}

export default configureStore;