import { Request, Response } from 'express';
import services from '../services';

const homePageController = (_req: Request, res: Response) => res.send('Hello World');

const addProductController = async (_req: Request, res: Response) => {
  try {
    const result = await services.addProduct();
    console.log(result);
    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getProductController = async (_req: Request, res: Response) => {
  try {
    const result = await services.getProductService();
    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const deleteProductController = async (_req: Request, res: Response) => {
  try {
    const result = await services.deleteProductService();
    console.log(result);

    res.status(200).json(result);
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const controller = {
  homePage: homePageController,
  addProduct: addProductController,
  getProduct: getProductController,
  deleteProduct: deleteProductController,
};

export default controller;
