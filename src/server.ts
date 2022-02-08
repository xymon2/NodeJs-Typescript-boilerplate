if (process.env.NODE_ENV !== 'production') {
    require('./config');
    // this should be imported before importing any ohter files
}

import { Express } from 'express';

const PORT = process.env.PORT ? parseInt(process.env.PORT) : 5000;

const initServer = async () => {
    try {
        const app: Express = await require('./app').default();
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
            console.log('Received SIGINT/Ctrl+C, shutting down...');
            server.close();

            // db 연결해제;
            process.exit(130);
        });
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

initServer();
