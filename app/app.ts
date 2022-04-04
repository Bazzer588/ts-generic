import express, { NextFunction, Request, Response } from 'express';

// create app and add middleware
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// main route
app.get('/', (req: Request, res: Response) => res.send({ text: 'Hello', date: new Date(), value: Math.random() }));

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line  @typescript-eslint/no-unused-vars
  console.error(err.stack); // eslint-disable-line no-console
  res.status(500).send('Server Error');
});

export default app;
