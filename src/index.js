import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "../node_modules/react-redux";
import store from "./store";
import App from './App';
import './style/App.scss';
import "./index";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Provider store={store} >< App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();