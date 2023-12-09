import esClient from '../helper/elasticDb';

const filterService = async (keyword: string) =>
  esClient.search({
    index: 'products',
    body: { query: { match: { productName: keyword } } },
  });

const addProductService = async (productName: string, price: number, description: string) => {
  const result = await esClient.index({
    index: 'products',
    body: {
      productName,
      price,
      description,
    },
  });

  return result;
};

const getAllProductsService = async () => {
  const result = await esClient.search({
    index: 'products',
    body: { query: { match_all: {} } },
  });

  return result;
};

const services = {
  filter: filterService,
  addProduct: addProductService,
  getAllProducts: getAllProductsService,
};

export default services;
