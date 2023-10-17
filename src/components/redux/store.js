// import { combineReducers } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
// import contactsReduser from './contacts-actions/contacts-reducer';
import {
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
// import storage from 'redux-persist/lib/storage';

import { persistedContactReducer } from '../redux/contactsSlise';
import { filterReducer } from '../redux/filterSlise';
import {contactsApi} from '../services/contactsApi'
import { setupListeners } from '@reduxjs/toolkit/dist/query';

// const contactsPersistConfig = {
//     key: 'contacts',
//     storage,
//     blacklist: ['filter'],
// };

// const middleware = getDefaultMiddleware({
//     serializableCheck: {
//         ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
       
//     },
//     contactsApi,
    
    
// });


// const rootReducer = combineReducers({
//     contacts: contactsReduser,
// });
// const store = createStore(rootReducer, composeWithDevTools());

// const persistedReducer = persistReducer(contactsPersistConfig, rootReducer)

export const store = configureStore({
    reducer: {
        // contacts: persistedContactReducer,
        filter: filterReducer,
        [contactsApi.reducerPath]: contactsApi.reducer,

    },
    // middleware: getDefaultMiddleware => [
    //     ...getDefaultMiddleware(),
    //     contactsApi.middleware  
    // ]
      middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(contactsApi.middleware),
});

// export const persistor = persistStore(store);

setupListeners(store.dispatch)

// eslint-disable-next-line import/no-anonymous-default-export
