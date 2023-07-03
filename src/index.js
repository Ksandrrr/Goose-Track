import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { App } from 'App';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './redux/store';
import AuthLayout from 'components/AuthLayout/AuthLayout';
import './styles/styles.scss';
import './styles/container.scss';
import './styles/normalize.scss';
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<h1>Loading</h1>} persistor={persistor}>
        <AuthLayout>
          <App />
        </AuthLayout>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
