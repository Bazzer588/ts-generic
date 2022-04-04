import express, {NextFunction, Request, Response} from 'express';

const PORT = 3033;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req: Request, res: Response) => {
  return res.send({ text: 'Hello', date: new Date() });
});

// error handler
app.use((err: Error, req: Request, res: Response, next: NextFunction) => { // eslint-disable-line  @typescript-eslint/no-unused-vars
  console.error(err.stack);
  res.status(500).send('Server Error');
});

app.listen(3033, () => {
  console.log('TS Server ' + PORT + ' ' + new Date());
});
