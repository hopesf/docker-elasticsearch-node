import esClient from '../helper/elasticDb';

const addProductService = async () =>
  esClient.index({
    index: 'my_index',
    id: 'my_document_id',
    document: {
      foo: 'foo',
      bar: 'bar',
    },
  });

const getProductService = () =>
  esClient.get({
    index: 'my_index',
    id: 'my_document_id',
  });

const deleteProductService = () =>
  esClient.delete({
    index: 'my_index',
    id: 'my_document_id',
  });

const services = {
  addProduct: addProductService,
  getProductService,
  deleteProductService,
};

export default services;
