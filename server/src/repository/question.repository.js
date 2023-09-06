import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function create(
  text,
  type,
  testId
  ){
  return prisma.question.create({
    data: {
      text: text,
      type: type,
      test: {
        connect: {
          id: testId,
        },
      },
    },
  });
}
