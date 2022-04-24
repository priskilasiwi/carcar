import { applyMiddleware, compose, createStore } from 'redux';
import rootReducer from './index';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'root',
    storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer);

const globalStore = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

const persistor = persistStore(globalStore);


export {globalStore, persistor};
