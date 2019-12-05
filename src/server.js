import express from 'express';
import React from 'react';
const indexHtml = require('./app/index.html');
import { renderToString } from 'react-dom/server';
import { ServerLocation } from "@reach/router";
import App from "./app/components/app";
//import template from "./template";
import fs from 'fs';
const server =  express();
server.use('/assets', express.static('assets'));
const html = indexHtml.toString();
const parts = html.split("Not Rendered");
server.use((req,res)=>{
    const reactMarkup = (
        <ServerLocation url={req.url}>
            <App />
        </ServerLocation>
    );

    res.send(`${parts[0]}${renderToString(reactMarkup)}${parts[1]}`);
    res.end();
})
// server.get('/',(req,res)=>{
//     const appHtml = renderToString(<App/>)
//     res.send(template({
//         body:appHtml,
//         title:"Financial Express Server Side"
//     }));
// });
server.listen(8081);
console.log('listening at 8081');