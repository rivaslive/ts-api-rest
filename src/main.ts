import 'dotenv/config';
import routes from './routes';
import initializeServer from './services/server';

const startServer = initializeServer(routes);

export default startServer;
