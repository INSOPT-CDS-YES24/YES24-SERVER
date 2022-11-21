import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getLikeContents = async (userId: number) => {
  const data = await prisma.likeContent.findMany({
    where: {
      userId,
    },
    select: {
      Content: {
        select: {
          title: true,
          genre: true,
        },
      },
    },
  });
  return data;
};

const getContentsDetails = async (contentId: number) => {
  const data = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
  });

  return data;
}

const contentService = { getLikeContents, getContentsDetails };

export default contentService;
