import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function create(
  text,
  isCorrect,
  questionId
  ){
  return prisma.answer.create({
    data: {
      text: text,
      isCorrect: isCorrect,
      question: {
        connect: {
          id: questionId,
        },
      },
    },
  });
}

export async function findAllById(questionId){
  return prisma.answer.findMany({
    where:{
      questionId
    }
  });
}