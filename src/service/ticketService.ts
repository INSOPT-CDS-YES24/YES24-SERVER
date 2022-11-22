import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

//*마이티켓 정보 조회
const getAllTicket = async (userId: number) => {
  const data = await prisma.myTicket.findUnique({
    where: {
      userId: userId,
    },
  });

  return data;
};

const ticketService = { getAllTicket };

export default ticketService;
