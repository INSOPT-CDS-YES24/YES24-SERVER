import _ from 'lodash';
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

const getContentsDetails = async (contentId: number) => {
  const data = await prisma.content.findUnique({
    where: {
      id: contentId,
    },
  });

  return data;
};

const getYesPick = async (userId: number, genre: string) => {
  let data = await prisma.likeContent.findMany({
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
  let dataArray = [];
  data = { ...data };
  for (let i = 0; i < Object.keys(data).length; i++) {
    dataArray.push(data[i].content);
  }
  const randomData = _.shuffle(dataArray);
  return randomData;
};

const getRecentContents = async (userId: number) => {
  let data = await prisma.likeContent.findMany({
    where: {
      userId,
    },
    select: {
      content: {
        select: {
          title: true,
        },
      },
    },
  });
  let dataArray = [];
  data = { ...data };
  for (let i = 0; i < Object.keys(data).length; i++) {
    dataArray.push(data[i].content);
  }
  const randomData = _.shuffle(dataArray);
  return randomData;
};

const contentService = {
  getLikeContents,
  getContentsDetails,
  getYesPick,
  getRecentContents,
};

export default contentService;
