import {createStore, applyMiddleware} from 'redux'
import rootReducer from '../reducers/rootReducer'
import createSagaMiddleware from 'redux-saga'
import rootSaga from '../sagas/rootSaga'

const sagaMiddleware = createSagaMiddleware();
// , applyMiddleware(sagaMiddleware)
const configureStore = () => {
    const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))
    sagaMiddleware.run(rootSaga)
    return store
}

export default configureStore