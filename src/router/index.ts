import { Router } from 'express';
import contentRouter from './contentRouter';
const router: Router = Router();

router.use('/contents', contentRouter);

export default router;
