import { createStore , compose , applyMiddleware} from  'redux'
import thunk from 'redux-thunk'
import storage from 'redux-persist/lib/storage';
import rootReducers from './RootReducer'
import { persistStore, persistReducer } from 'redux-persist';

const persistConfig = {
	key: 'root',
	storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducers);

function configurestore () {
    let store = createStore(persistedReducer,compose(applyMiddleware(thunk)))
    let persistor = persistStore(store);
	return { store, persistor };
}

export default configurestore

