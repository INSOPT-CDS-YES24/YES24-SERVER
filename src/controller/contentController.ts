import { Request, Response } from 'express';
import { contentService } from '../service';

const getLikeContents = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    return res
      .status(400)
      .json({ status: 400, message: '필요한 값이 없습니다.' });
  }

  const data = await contentService.getLikeContents(+userId);
  return res
    .status(200)
    .json({ status: 200, message: '관심공연 조회 성공', data });
};

const contentController = { getLikeContents };

export { contentController };
