-- AddForeignKey
ALTER TABLE "UserBalance" ADD CONSTRAINT "UserBalance_UserId_fkey" FOREIGN KEY ("UserId") REFERENCES "User"("Id") ON DELETE RESTRICT ON UPDATE CASCADE;
