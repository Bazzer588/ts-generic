import express, { NextFunction, Request, Response } from 'express';
import loggerMiddleware from './middleware/app-logger';

// create app and add middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

loggerMiddleware(app);

// main route
app.get('/', (req: Request, res: Response) => {
  res.send({ text: 'Hello', date: new Date(), value: Math.random() });
  // req.logger.info('Here we go');
});

interface Logger {
  error(message: object) : void
  debug(message: string) : void
}

interface ReqWithLogger extends Request {
  logger: Logger
}

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line  @typescript-eslint/no-unused-vars
  console.error(err.stack); // eslint-disable-line no-console
  // req.logger.debug('Woot');
  res.status(500).send('Server Error');
});

export default app;
