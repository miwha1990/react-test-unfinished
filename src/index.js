import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import './styles.css';

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<App />, wrapper) : false;
