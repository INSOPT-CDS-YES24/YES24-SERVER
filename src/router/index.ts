import { Router } from 'express';
import contentRouter from './ContentRouter';
const router: Router = Router();

router.use('/contents', contentRouter);

export default router;
