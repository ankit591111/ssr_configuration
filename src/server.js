import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter,Route } from 'react-router-dom';
import App from "./app/components/app";
import template from "./template";
import {getUrl,fetchData} from "./models/loadData";

const server =  express();

server.use('/assets', express.static('assets'));

server.get('/*',async (req,res)=>{
    const url = await getUrl('article',{id:1768253});
   fetchData(url).then((response)=>{
       const context = response['data'];
       const appHtml = renderToString(
           <StaticRouter location={req.url} context={context}>
               <App />
           </StaticRouter>
       );
       res.send(template({
           body:appHtml,
           preloadState:JSON.stringify(context),
           title:"Financial Express Server Side"
       }));
   })

 });
server.listen(8081);
console.log('listening at 8081');