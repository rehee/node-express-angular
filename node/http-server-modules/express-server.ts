import * as express from 'express';
import { Express } from 'Express';


import { ExpressRouter } from './express-router';
import { RouterActionitem, HttpType } from './express-common';
import { ExpressStaticFile } from './express-static-file';
import { ExpressWebSocket } from './express-websocket';
export class ExpressApp {
    static Port: number = 3000;
    static CreateExpressApp(setupStaticFileFolder: any = ExpressStaticFile.SetupStaticFile, expressRouterFunction: any = expressRouterFunctionDefault()) {
        return (port: number = ExpressApp.Port, startFuncton: any = serverStartFunction) => {
            let app = express();
            expressRouterFunction(app);
            setupStaticFileFolder()(app);
            app.post('/', (a, n) => { })
            ExpressWebSocket.CreateWebsocker(app);
            app.listen(port, serverStartFunction);
        }
    }
}



let serverStartFunction = function () {
    console.log('Example app listening on port 3000!')
}

let expressRouterFunctionDefault = function (routerMap: { [key: string]: RouterActionitem[] } = ExpressRouter.expressRouterMapDefault) {
    return (app: Express) => {
        Object.keys(routerMap).map((key) => {
            routerMap[key].forEach(
                item => {
                    switch (item.HttpTypeKey) {
                        case HttpType.Get:
                            app.get(key, item.ActionFunction);
                            break;
                        case HttpType.Post:
                            app.post(key, item.ActionFunction);
                            break;
                    }
                }
            )
        })
    }
}








