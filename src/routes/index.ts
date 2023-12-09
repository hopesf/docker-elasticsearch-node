import { Router } from 'express';

// controllers
import controller from '../controllers/index.ts';

const router = Router();

// find users, crud
router.get('/', controller.homePage);

router.get('/users', controller.users);

export default router;
