import { Router } from 'express';
import { contentController } from '../controller';

const router: Router = Router();

router.get('/like/:userId', contentController.getLikeContents);

export default router;
