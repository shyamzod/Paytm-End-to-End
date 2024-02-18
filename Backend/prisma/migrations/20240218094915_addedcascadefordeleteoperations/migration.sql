-- DropForeignKey
ALTER TABLE "UserBalance" DROP CONSTRAINT "UserBalance_UserId_fkey";

-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE CASCADE ON UPDATE CASCADE;
