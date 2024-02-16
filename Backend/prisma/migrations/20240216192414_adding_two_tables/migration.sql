-- AlterTable
ALTER TABLE "User" ADD CONSTRAINT "User_pkey" PRIMARY KEY ("Id");

-- CreateTable
CREATE TABLE "Transactions" (
    "TransactionId" SERIAL NOT NULL,
    "From" INTEGER NOT NULL,
    "To" INTEGER NOT NULL,
    "Amount" DECIMAL(65,30) NOT NULL
);

-- CreateTable
CREATE TABLE "UserBalance" (
    "UserId" INTEGER NOT NULL,
    "Amount" DECIMAL(65,30) NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Transactions_TransactionId_key" ON "Transactions"("TransactionId");

-- CreateIndex
CREATE UNIQUE INDEX "UserBalance_UserId_key" ON "UserBalance"("UserId");
