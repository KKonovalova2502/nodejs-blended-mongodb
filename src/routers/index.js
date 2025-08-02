import { Router } from 'express';
import productsRouter from './products.js';
import userRouter from './user.js';

const router = Router();

router.use('/users', userRouter);
router.use('/products', productsRouter);

export default router;
