import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();


export async function findAll(){
  return prisma.user.findMany({
    include: {
      tests: true,
    },
  });
}

export async function create(
  email,
  name,
  password,
  ){
  return prisma.user.create({
    data:{ 
      email: email,
      name: name,
      password: password
    }
  });
}

export async function deleteUser(email){
  return prisma.user.delete({
    where: {
      email: email
    }
  });
}
export async function login(email){
  return prisma.user.findUnique({
    where: {
      email : email
    }
  });
}