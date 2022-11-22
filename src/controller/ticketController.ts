import { Request, Response } from 'express';
import { ticketService } from '../service';

//* 마이티켓 정보 조회
const getAllTicket = async (req: Request, res: Response) => {
  const { userId } = req.params;

  if (!userId) {
    return res
      .status(400)
      .json({ status: 400, message: '마이티켓 정보 조회 실패' });
  }
  const data = await ticketService.getAllTicket(+userId);
  return res
    .status(200)
    .json({ status: 200, message: '마이티켓 정보 조회 성공', data });
};

const ticketController = { getAllTicket };

export default ticketController;
