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

const getContentsDetails = async (req: Request, res: Response) => {
  const { contentId } = req.params;

  if (!contentId) {
    return res
      .status(400)
      .json({ status: 400, message: '필요한 값이 없습니다.' });
  }

  const data = await contentService.getContentsDetails(+contentId);
  return res
    .status(200)
    .json({ status: 200, message: '상세정보 조회 성공', data });
};

const getYesPick = async (req: Request, res: Response) => {
  const { userId } = req.params;
  const { genre } = req.query;

  let type: 'genre' | null;
  if (genre) {
    type = 'genre';
  } else {
    type = null;
  }

  if (!userId) {
    return res.status(400).json({ status: 400, message: '콘텐츠 조회 실패' });
  }
  switch (type) {
    case 'genre': {
      const data = await contentService.getYesPick(+userId, genre as string);
      return res
        .status(200)
        .json({ status: 200, message: 'YesPick 조회 성공', data });
    }
    case null: {
      const data = await contentService.getRecentContents(+userId);
      return res
        .status(200)
        .json({ status: 200, message: '최근 본 콘텐츠 조회 성공', data });
    }
  }
};

const contentController = { getLikeContents, getContentsDetails, getYesPick };
export default contentController;
