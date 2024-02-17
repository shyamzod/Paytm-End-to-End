import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface User {
  username: string;
  password: string;
  email: string;
  MobileNo: string;
}

export async function InsertUser(user: User) {
  const resp = await prisma.user.create({
    data: {
      username: user.username,
      password: user.password,
      email: user.email.toLowerCase(),
      MobileNo: user.MobileNo,
    },
    select: {
      Id: true,
    },
  });
  return resp;
}
export async function DeleteUsers() {
  await prisma.user.deleteMany();
}
export async function ReadUsers() {
  const res = await prisma.user.findMany();
  return res;
}
export async function FindUser(email: string, password: string) {
  try {
    const res = await prisma.user.findFirst({
      where: { email, password },
      select: { Id: true, username: true },
    });
    if (res != undefined) {
      return { Id: res.Id, username: res.username };
    }
  } catch (e) {}
}
