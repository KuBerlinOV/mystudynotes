import { createStore, combineReducers } from 'redux';

//import-reducers
import notesReducer from '../reducers/notes';
import filtersReducer from '../reducers/filters';
import styleReducer from '../reducers/styles'

const configureStore = () => {
    const store = createStore(combineReducers({
        notes: notesReducer,
        filters: filtersReducer,
        styles: styleReducer
    }))
    return store
}

export default configureStore;