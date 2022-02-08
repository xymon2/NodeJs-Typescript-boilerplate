import express, { Express, Request, Response, NextFunction } from 'express';

export default async (): Promise<Express> => {
    const app = express();
    const urlPrefix = '/api';
    //db connection
    // if (process.env.NODE_ENV !== 'production') {
    // ~~~.createChannel
    // } else {
    // }

    //middleware connection

    //controller/router connection
    // app.use(`${urlPrefix}/foo`, fooController);

    app.get('/', (req: Request, res: Response, next: NextFunction) => {
        res.send('Hello, world!');
    });

    return app;
};
