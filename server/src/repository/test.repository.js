import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export async function create(
  name,
  description,
  authorId
  ){
  return prisma.test.create({
    data: {
      name: name,
      description: description,
      author: {
        connect: {
          id: authorId,
        },
      },
    },
  });
}
export async function findAll(){
  return prisma.test.findMany({
    include: {
      question: true,
    },
  });
}
export async function deleteTest(id){
  return prisma.test.delete({
    where: {
      id
    }
  });
}
export async function findById(id){
  return prisma.test.findFirst({
    where: {
      id
    },
    include: {
      question: true,
    },
  });
}