import createHttpError from 'http-errors';
import {
  createProductService,
  deleteProductService,
  getAllProductsService,
  getProductByIdService,
  updateProductService,
} from '../services/products.js';

export const getAllProductsController = async (req, res, next) => {
  try {
    const products = await getAllProductsService();
    res.status(200).json({
      status: 200,
      message: 'Successfully found products!',
      data: products,
    });
  } catch (error) {
    next(error);
  }
};

export const getProductByIdController = async (req, res, next) => {
  try {
    const { productId } = req.params;
    const product = await getProductByIdService(productId);

    if (!product) {
      throw createHttpError(404, 'Product not found');
    }

    res.status(200).json({
      status: 200,
      message: `Successfully found product with id ${productId}!`,
      data: product,
    });
  } catch (error) {
    next(error);
  }
};

export const createProductController = async (req, res) => {
  const product = await createProductService(req.body);

  res.status(201).json({
    status: 201,
    message: 'Successfully created a product!',
    data: product,
  });
};

export const patchProductController = async (req, res) => {
  const { productId } = req.params;
  const result = await updateProductService(productId, req.body);

  if (!productId) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(200).json({
    status: 200,
    message: 'Successfully patched a product!',
    data: result.product,
  });
};

export const deleteProductController = async (req, res) => {
  const { productId } = req.params;

  const product = await deleteProductService(productId);

  if (!product) {
    throw createHttpError(404, 'Product not found');
  }

  res.status(204).send();
};
