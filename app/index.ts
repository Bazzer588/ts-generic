// import {Express} from 'express';
import app from './app';

const PORT = process.env.PORT || 3033;

app.listen(3033, () => {
  console.log(`TS Server ${PORT} ${new Date().toISOString()}`); // eslint-disable-line no-console
});
