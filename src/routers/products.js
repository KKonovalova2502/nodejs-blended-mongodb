import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  patchProductController,
} from '../controllers/products.js';

const router = Router();

router.get('/', getAllProductsController);

router.get('/:productId', getProductByIdController);

router.post('/', createProductController);

router.patch('/:productId', patchProductController);

router.delete('/:productId', deleteProductController);

export default router;
