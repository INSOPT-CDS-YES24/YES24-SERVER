import { Router } from 'express';
import { contentController } from '../controller';

const router: Router = Router();

router.get('/like/:userId', contentController.getLikeContents);
router.get('/:contentId/detail', contentController.getContentsDetails);

export default router;
