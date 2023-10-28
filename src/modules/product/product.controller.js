import { Router } from 'express';

const productRouter = Router();

const router = Router();

productRouter.use('/product', router);

router.get('/', (req, res) => {
  res.send('PRODUTO');
});

export default productRouter;
