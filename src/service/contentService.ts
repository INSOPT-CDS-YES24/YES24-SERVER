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

const getYesPick = async (userId: number, genre: string) => {
  const data = await prisma.likeContent.findMany({
    where: {
      userId,
      content: {
        genre,
      },
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
const contentService = { getLikeContents, getYesPick };

const getContentsDetails = async (contentId: number) => {
  const data = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
  });

  return data;
}

const contentService = { getLikeContents, getYesPick, getContentsDetails };

export default contentService;
