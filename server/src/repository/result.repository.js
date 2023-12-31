import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function create(
  score,
  authorId,
  testId,
  ){
  return prisma.result.create({
    data:{ 
      score: score,
      authorId: authorId,
      testId: testId
    }
  });
}
export async function findByTestId(testId){
  return prisma.result.findMany({
    where: {
      testId: testId
    },
  });
}