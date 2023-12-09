import { Request, Response } from 'express';

const homePageController = (req: Request, res: Response) => {
  res.send('Hello World');
};

const usersController = (req: Request, res: Response) => {
  res.send('get all users');
};

const controller = {
  homePage: homePageController,
  users: usersController,
};

export default controller;
