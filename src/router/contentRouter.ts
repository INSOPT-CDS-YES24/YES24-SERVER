import { Router } from 'express';
import { contentController } from '../controller';

const router: Router = Router();

router.get('/like/:userId', contentController.getLikeContents);
//GET /api/contents/:userId?genre=
router.get('/:userId', contentController.getYesPick);
router.get('/:contentId/detail', contentController.getContentsDetails);

export default router;
