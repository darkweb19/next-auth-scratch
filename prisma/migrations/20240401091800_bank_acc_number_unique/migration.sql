/*
  Warnings:

  - A unique constraint covering the columns `[acc_number]` on the table `BankDetails` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "BankDetails_acc_number_key" ON "BankDetails"("acc_number");
