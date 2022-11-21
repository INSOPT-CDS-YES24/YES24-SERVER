import { Request, Response } from "express";
import { ticketService } from "../service";

//* 마이티켓 정보 조회
const getAllTicket = async ( req: Request, res: Response ) => {
  const { userId } = req.params;

  const data = await ticketService.getAllTicket(+userId);

  if (!data) {
    return res.status(404).json({ status: 404, message: "NOT_FOUND" });
  }
  return res.status(200).json({ status: 200, message: "마이티켓 정보 조회 성공", data });
};

const ticketController = { getAllTicket };

export default ticketController;