// import * as http from 'http';
// import * as url from 'url';
// import { HttpServer } from './http-server-modules/http-server';




// var createServer = HttpServer.CreateHttpServer();
// createServer(()=>{
//   console.log('server is running');
// });

import { ExpressApp } from './http-server-modules/express-server';

let app = ExpressApp.CreateExpressApp()
app();