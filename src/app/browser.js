import React from 'react';
import { render,hydrate } from 'react-dom';
import App from './components/app';

//console.log(hydrate(<App/>));
hydrate(<App />, document.getElementById('root'));