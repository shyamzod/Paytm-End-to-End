import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface User {
  username: string;
  password: string;
  email: string;
  Name: string;
  MobileNo: string;
}

export async function InsertUser(user: User) {
  const res = await prisma.user.create({
    data: {
      username: user.username,
      password: user.password,
      email: user.email,
      Name: user.Name,
      MobileNo: user.MobileNo,
    },
    select: {
      Id: true,
    },
  });
  return res.Id;
}
export async function DeleteUsers() {
  await prisma.user.deleteMany();
}
export async function ReadUsers() {
  const res = await prisma.user.findMany();
  console.log(res);
  return res;
}
export async function FindUser(username: string, password: string) {
  try {
    const res = await prisma.user.findFirst({
      where: { username, password },
      select: { Id: true },
    });
    if (res != undefined) {
      return res.Id;
    }
  } catch (e) {}
}
