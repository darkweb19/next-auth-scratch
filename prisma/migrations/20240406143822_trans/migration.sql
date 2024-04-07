-- CreateEnum
CREATE TYPE "TransactionType" AS ENUM ('PURCHASE', 'DEPOSIT', 'WITHDRAW');

-- CreateTable
CREATE TABLE "Transaction" (
    "id" SERIAL NOT NULL,
    "authorId" TEXT NOT NULL,
    "transaction_type" "TransactionType",
    "trans_amount" INTEGER NOT NULL,
    "merchant_username" TEXT NOT NULL,
    "merchant_acc_number" INTEGER NOT NULL,
    "merchant_bank_info" TEXT NOT NULL,
    "remarks" TEXT,
    "category" TEXT,
    "trans_date" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Transaction_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Transaction_authorId_key" ON "Transaction"("authorId");

-- AddForeignKey
ALTER TABLE "Transaction" ADD CONSTRAINT "Transaction_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
