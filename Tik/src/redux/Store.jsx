import { createStore } from 'redux' ;
import { AppRe } from './reducers/AppRe';
import {persistStore,persistReducer} from "redux-persist"
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key:'root',
    storage,
}
 const pr = persistReducer(persistConfig,AppRe)
 const enhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
 const store = createStore(pr , enhancer())
 const pr2 = persistStore(store)

 export default store

 