import { contentResponseDto } from './../interface/ContentResponseDto';
import _ from 'lodash';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

const getLikeContents = async (
  userId: number,
): Promise<contentResponseDto[]> => {
  const likeContents = await prisma.likeContent.findMany({
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
  const data = await Promise.all(
    likeContents.map((likeContent: any) => {
      const result = {
        title: likeContent.content.title,
        genre: likeContent.content.genre,
      };
      return result;
    }),
  );
  return data;
};

const getContentsDetails = async (contentId: number) => {
  const data = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
  });

  return data;
};

const getYesPick = async (
  userId: number,
  genre: string,
): Promise<contentResponseDto[]> => {
  const yesPicks = await prisma.likeContent.findMany({
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
          dueDate: true,
        },
      },
    },
  });
  const data = await Promise.all(
    yesPicks.map((yesPick: any) => {
      const result = {
        title: yesPick.content.title,
        genre: yesPick.content.genre,
        dueDate: yesPick.content.dueDate,
      };
      return result;
    }),
  );
  const randomData = _.shuffle(data);
  return randomData;
};

const contentService = {
  getLikeContents,
  getContentsDetails,
  getYesPick,
};

export default contentService;
