import { Router } from 'express';
import { contentController } from '../controller';

const router: Router = Router();

//GET /api/like/:userId
router.get('/like/:userId', contentController.getLikeContents);

//GET /api/contents/:contentId/detail
router.get('/:contentId/detail', contentController.getContentsDetails);

//GET /api/contents/:userId?genre=
router.get('/:userId', contentController.getYesPick);

export default router;
