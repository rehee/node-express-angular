import * as http from 'http';
import * as url from 'url';
export class HttpServer {
    static HostName: string = '127.0.0.1';
    static Port: number = 3000;

    static CreateHttpServer(requestHandler: any =
        HttpServer.CreateHttpRequestHandl(
            HandleHttpOnRequest,
            HttpServer.CreateRouter(Routermap, RouterFunction)
        )
        , hostName: string = HttpServer.HostName, port: number = HttpServer.Port) {
        return (serverListenFunction: any) => {
            var server = http.createServer(requestHandler);
            server.listen(port, hostName, serverListenFunction);
        }
    }

    static CreateHttpRequestHandl(
        httpRequestHandlFunction: any,
        router: any
    ) {
        return (request: http.IncomingMessage, response: http.ServerResponse) => {
            return httpRequestHandlFunction(request, response, router);
        }
    }

    static CreateRouter(routermap: { [key: string]: any }, routerFunction: any) {
        return routerFunction(routermap);
    }

}



let HandleHttpOnRequest = function (request: http.IncomingMessage, response: http.ServerResponse, router: any) {
    router(url.parse(request.url).pathname, response);
}


let RouterFunction = function (routermap: { [key: string]: any }) {
    return (path: string, response: http.ServerResponse) => {
        try {
            routermap[path](response);
        } catch (e) {
            response.statusCode = 200;
            response.setHeader('Content-Type', 'text/plain');
            response.end(`Hello W123orl1d ${e} \n`);
        }

    }
}


let Routermap: { [key: string]: any } = {
    ['/']: (response: http.ServerResponse) => {
        console.log('home');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(`Hello W123orl1d home \n`);
    },
    ['/upload']: (response: http.ServerResponse) => {
        console.log('upload');
        response.statusCode = 200;
        response.setHeader('Content-Type', 'text/plain');
        response.end(`Hello W123orl1d upload \n`);
    }
}