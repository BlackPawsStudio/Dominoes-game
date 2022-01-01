import React from 'react';
import {render} from 'react-dom';
import { store } from "./store/store";
import { Provider } from "react-redux";
import App from './components/App';
import reportWebVitals from './reportWebVitals';

render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementsByClassName('root')[0]
);

reportWebVitals();
