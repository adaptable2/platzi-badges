import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';
// import BadgeNew from './pages/BadgeNew.js';
import Badges from './pages/Badges.js';

import './global.css';
// import App from './components/App';

const container = document.getElementById('app');

ReactDOM.render(<Badges />, container);
