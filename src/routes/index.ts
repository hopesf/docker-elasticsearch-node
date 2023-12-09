import { Router } from 'express';
// controllers
import controller from '../controllers';

const router: Router = Router();

// find users, crud
router.get('/', controller.homePage);
router.post('/filter', controller.filter);
router.post('/add-product', controller.addProduct);
// get all products
router.get('/product', controller.getAllProducts);

export default router;
