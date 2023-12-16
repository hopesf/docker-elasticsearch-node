import { Router } from 'express';
// controllers
import controller from '../controllers';

const router: Router = Router();

// find users, crud
router.get('/', controller.homePage);
router.get('/addProduct', controller.addProduct);
router.get('/product', controller.getProduct);
router.get('/deleteProduct', controller.deleteProduct);

export default router;
