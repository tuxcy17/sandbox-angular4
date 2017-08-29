import { Request, Response, NextFunction, Router } from 'express';

const router = Router();

router.use(function timeLog(req: Request, res: Response, next: NextFunction) {
  console.log('Time: ', Date.now());
  next();
});

router.get('/', function(req: Request, res: Response) {
  res.send('Birds home page');
});

router.get('/about', function(req: Request, res: Response) {
  res.send('About birds');
});

router.put('/about', function(req: Request, res: Response) {
  res.send('About birds');
});

router.post('/about', function(req: Request, res: Response) {
  res.send('About birds');
});

router.delete('/about', function(req: Request, res: Response) {
  res.send('About birds');
});

export { router as HeroesEndpoint };
