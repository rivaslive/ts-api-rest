import 'dotenv/config';
import routes from 'Routes';
import initializeServer from 'Server';

const startServer = initializeServer(routes, {
  async bootstrap() {
    // any bootstrap code goes here
    // this function is called when the server starts
    // util for example to create tables or users for system
  },
});

export default startServer;
