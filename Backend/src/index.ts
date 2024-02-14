import { Prisma, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export interface User {
  username: string;
  password: string;
  email: string;
  Name: string;
  MobileNo: number;
}

export async function InsertUser(user: User) {
  const res = await prisma.user.create({
    data: {
      username: user.username,
      password: user.password,
      email: user.password,
      Name: user.Name,
      MobileNo: user.MobileNo,
    },
    select: {
      Id: true,
    },
  });
}
