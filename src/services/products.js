import { ProductModel } from '../db/models/Product.js';

export const getAllProductsService = async () => {
  const products = await ProductModel.find();
  return products;
};

export const getProductByIdService = async (productId) => {
  const product = await ProductModel.findById(productId);
  return product;
};

export const createProductService = async (payload) => {
  const product = await ProductModel.create(payload);
  return product;
};

export const updateProductService = async (
  productId,
  payload,
  options = {},
) => {
  const rawResult = await ProductModel.findByIdAndUpdate(
    { _id: productId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    product: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteProductService = async (productId) => {
  const product = await ProductModel.findByIdAndDelete({ _id: productId });

  return product;
};
