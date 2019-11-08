import React from 'react'
import { render } from 'react-dom'
import { applyMiddleware, createStore } from 'redux';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux'
import { createLogger } from 'redux-logger';
import { AsyncStorage } from 'AsyncStorage';
import { persistStore, persistReducer } from 'redux-persist';
import thunk from 'redux-thunk'
import rootReducer from './reducers/RootReducer'
import './css/styles.css'
import App from "./components/App"

const persistConfig = {
  // Root
  key: 'root',
  // Storage Method (React Native)
  storage: AsyncStorage,
  // Whitelist (Save Specific Reducers)
  whitelist: [
    'reducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  // blacklist: [
  //   'counterReducer',
  // ],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
  persistedReducer,
  applyMiddleware(
    thunk,
    createLogger(),
  ),
);

let persistor = persistStore(store);

render(
  <Provider store={store}>
   <PersistGate loading={null} persistor={persistor}>
      <App />
   </PersistGate>
  </Provider>,
  document.getElementById('root')
)
