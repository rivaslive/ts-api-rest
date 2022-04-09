import express from 'express';

import getConfig from 'config';
import initializeDB from './db';

const { port } = getConfig();

const app = express();
type OptionsType = { bootstrap?: () => Promise<any> };

const initializeServer = async (routes, opts?: OptionsType) => {
  // initialize DB
  await initializeDB();

  // json parse
  app.use(express.json());

  // set urls
  app.use(routes);

  if (opts?.bootstrap) {
    await opts.bootstrap();
  }

  // create express app
  app.listen(port, () => {
    console.log(`Example app listening on http://localhost:${port}`);
  });
};

export default initializeServer;
