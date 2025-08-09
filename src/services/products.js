import { ProductModel } from '../db/models/Product.js';

export const getAllProductsService = async ({ filter, userId }) => {
  const productsQuery = ProductModel.fin({ userId });

  if (filter.category) {
    productsQuery.where('category').equals(filter.category);
  }
  if (filter.minPrice) {
    productsQuery.where('price').gte(filter.minPrice);
  }
  if (filter.maxPrice) {
    productsQuery.where('price').lte(filter.maxPrice);
  }
  return productsQuery;
};

export const getProductByIdService = async (productId, userId) => {
  const product = await ProductModel.findOne({ _id: productId, userId });
  return product;
};

export const createProductService = async (payload) => {
  const product = await ProductModel.create(payload);
  return product;
};

export const updateProductService = async (
  productId,
  userId,
  payload,
  options = {},
) => {
  const rawResult = await ProductModel.findOneAndUpdate(
    { _id: productId, userId },
    payload,
    { new: true, includeResultMetadata: true, ...options },
  );

  if (!rawResult || !rawResult.value) return null;

  return {
    product: rawResult.value,
    isNew: Boolean(rawResult?.lastErrorObject?.upserted),
  };
};

export const deleteProductService = async (productId, userId) => {
  const product = await ProductModel.findOneAndDelete({
    _id: productId,
    userId,
  });

  return product;
};
