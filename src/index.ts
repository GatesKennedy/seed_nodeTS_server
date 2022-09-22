import cors from 'cors';
import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import http from 'http';

dotenv.config();
const app = express();

//~~~~~~~~~~~~~~~~~~~~~~~
//      MIDDLE
//~~~~~~~~~~~~~~~~~~~~~~~
app.use(cors());
app.use(express.json());

//~~~~~~~~~~~~~~~~~~~~~~~
//      ROUTES
//~~~~~~~~~~~~~~~~~~~~~~~
app.get('/', (req: Request, res: Response) => {
    res.send('Sup, Chunks?')
});

//~~~~~~~~~~~~~~~~~~~~~~~
//    Server Init
//~~~~~~~~~~~~~~~~~~~~~~~
const PORT: string = process.env.PORT || '5555';
const NODE_ENV: string = process.env.NODE_ENV || 'development';

const server: http.Server = http.createServer(app);
server.listen({ port: PORT }, () => {

  console.log(`
        ~~~~~~~~~ server.js ~~~~~~~~~
        (^=^)   ${NODE_ENV} Env 
          listening on port ${PORT}
        ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
  `);
});

module.exports = server;