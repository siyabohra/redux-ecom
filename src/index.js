import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import  store  from './app/store';
import { Auth0Provider } from '@auth0/auth0-react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
  <Auth0Provider
    domain="dev-775dga2vf0iiwp4a.us.auth0.com"
    clientId="b1LDoF7neDGI4YIXFk8lvYbDuavhWfz2"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  > 
      <App />
   
  </Auth0Provider>
  </Provider>



);
