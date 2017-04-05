export class RouterActionitem {
    HttpTypeKey: HttpType;
    ActionFunction; any;
    constructor(httpType: HttpType, action: any) {
        this.HttpTypeKey = httpType;
        this.ActionFunction = action;
    }
}

export enum HttpType {
    Get = 1,
    Post = 2
}