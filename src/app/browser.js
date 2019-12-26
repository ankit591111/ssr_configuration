import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { hydrate } from 'react-dom';
import App from './components/app';

//console.log(hydrate(<App/>));
hydrate(
    <BrowserRouter>
    <App />
</BrowserRouter>, document.getElementById('root'));