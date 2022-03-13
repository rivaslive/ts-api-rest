import express from 'express';

import getConfig from '../config';
import initializeDB from './db';

const { port } = getConfig;

const app = express();

// creating server
const initializeServer = async (routes) => {
  // initialize DB
  // await initializeDB();

  app.use(routes);

  // create express app
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
};

export default initializeServer;
