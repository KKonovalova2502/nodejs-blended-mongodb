import { Router } from 'express';
import {
  createProductController,
  deleteProductController,
  getAllProductsController,
  getProductByIdController,
  patchProductController,
} from '../controllers/products.js';
import {
  createProductSchema,
  updateProductSchema,
} from '../validation/products.js';
import { validationBody } from '../middlewares/validationBody.js';
import { isValidId } from '../middlewares/isValidId.js';
import { authenticate } from '../middlewares/authenticate.js';

const router = Router();

router.use(authenticate);

router.get('/', getAllProductsController);

router.get('/:productId', isValidId, getProductByIdController);

router.post('/', validationBody(createProductSchema), createProductController);

router.patch(
  '/:productId',
  isValidId,
  validationBody(updateProductSchema),
  patchProductController,
);

router.delete('/:productId', isValidId, deleteProductController);

export default router;
