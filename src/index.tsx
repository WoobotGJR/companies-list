import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';

import './index.css';

import store from './redux/store';
import { Provider } from 'react-redux';

const rootEl = document.querySelector('#root');
if (!rootEl) throw new Error('Cannot find root element with that id');
const root = createRoot(rootEl);
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
