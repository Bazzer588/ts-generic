import { Express, NextFunction, Request, Response } from 'express';

function log(level: string, message: object | string, start: number) : boolean {
  console.log(JSON.stringify({
    level,
    message,
    ts: new Date().toISOString(),
    took: (Date.now() - start) / 1000,
  }));
  return true;
}

export default (app: Express) => {
  app.use((req: Request, res: Response, next: NextFunction) => {
    const start = Date.now();
    // req.logger = {
    //   debug: (x: object | string) => log('debug', x, start),
    //   error: (x: object) => log('error', x, start),
    //   info: (x: object) => log('info', x, start),
    // };
    next();
  });
};
