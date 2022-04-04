import express, {Request, Response} from 'express';

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/', (req: Request, res: Response) => {
    return res.send({text: 'Hello', date: new Date()});
});

app.listen(3033, () => {
    console.log('Hello ' + 3033 + ' ' + new Date());
});
