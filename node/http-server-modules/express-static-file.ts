import { Express } from 'Express';
import * as express from 'express';
export class ExpressStaticFile {
    static SetupStaticFile(
        filesFolder: string[] = [
            'www','node_modules','app'
        ]) {
        return (app: Express) => {
            filesFolder.forEach(folderName => {
                app.use(`/${folderName}`,express.static(folderName))
            })
        }
    }
}