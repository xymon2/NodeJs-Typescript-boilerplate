if (process.env.NODE_ENV !== 'production') {
    require('./config');
    // this should be imported before importing any ohter files
}

import express, { Express, Request, Response, NextFunction } from 'express';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const appSetting = async (): Promise<Express> => {
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

// run nodejs server
const initServer = async () => {
    try {
        const app: Express = await appSetting();
        const server = app
            .listen(PORT, () => {
                console.log(`
        ################################################
        🛡️  Server listening on port: ${PORT}🛡️
        ################################################
        `);
            })
            .on('error', (err: Error) => {
                console.error(err);
                process.exit(1);
            });
        process.on('SIGINT', () => {
            console.log('\n Received SIGINT/Ctrl+C, shutting down...');
            server.close();

            // db 연결해제 추가하셈;
            process.exit(130);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};
initServer();
