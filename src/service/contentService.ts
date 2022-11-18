import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getLikeContents = async (userId: number) => {
  const data = await prisma.likeContent.findMany({
    where: {
      userId,
    },
    select: {
      content: {
        select: {
          title: true,
          genre: true,
        },
      },
    },
  });
  return data;
};
const contentService = { getLikeContents };

export default contentService;
