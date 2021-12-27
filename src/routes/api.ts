import { Router, Request, Response, NextFunction } from "express";

const router = Router();

router.get('/ping', (req: Request, res: Response) => {
    res.json({ pong: true })
});

router.get('/random', (req: Request, res: Response) => {
    let random: number = Math.floor(Math.random() * 10);
    res.json({ number: random })
});

router.get('/name/:name', (req: Request, res: Response) => {
    let name: string = req.params.name;
    res.json({ name: `Nome digitado no parametro = ${name}` })
});

router.all('*', function (req: Request, res: Response, next: NextFunction) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

export default router;
