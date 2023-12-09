import { Request, Response } from 'express';
import services from '../services';

const homePageController = (_req: Request, res: Response) => {
  res.send('Hello World');
};

const filterController = async (req: Request, res: Response) => {
  try {
    const { keyword } = req.body;

    const result = await services.filter(keyword);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const addProductController = async (req: Request, res: Response) => {
  try {
    const { productName, price, description } = req.body;

    const result = await services.addProduct(productName, price, description);
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllProductsController = async (_req: Request, res: Response) => {
  try {
    const result = await services.getAllProducts();
    res.status(200).json(result);
  } catch (error) {
    res.status(500).json({ message: 'Internal server error' });
  }
};

const controller = {
  homePage: homePageController,
  filter: filterController,
  addProduct: addProductController,
  getAllProducts: getAllProductsController,
};

export default controller;
