import { Router } from 'express';
import contentRouter from './contentRouter';
import ticketRouter from './ticketRouter';

const router: Router = Router();

router.use('/contents', contentRouter);
router.use('/ticket', ticketRouter);

export default router;
