import { Router } from 'express';

const userRouter = Router();

const router = Router();

userRouter.use('/user', router);

router.get('/', (req, res) => {
  res.send('hello world USER AGORA');
});

router.get('/:name', (req, res) => {
  res.send('Nome do usuario');
});

export default userRouter;
