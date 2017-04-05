import { RouterActionitem, HttpType } from './express-common';
import { Request, Response, Router } from 'express'
export class ExpressRouter {
    static newRouterActionItem(type: HttpType, action: any) {
        return new RouterActionitem(type, action);
    }
    static expressRouterMapDefault: { [key: string]: RouterActionitem[] } = {
        [`/`]: [
            ExpressRouter.newRouterActionItem(HttpType["Get"],
                (req, res) => { res.sendfile('./www/index.html') }
            )],
        [`/home/:userId`]: [
            ExpressRouter.newRouterActionItem(HttpType["Get"],
                (req:Request, res:Response) => { 
                    console.log(req.params.userId)
                    res.send('hello home') 
                }
            )]
    }
}




