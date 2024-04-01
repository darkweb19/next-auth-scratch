/*
  Warnings:

  - Added the required column `bank_balance` to the `BankDetails` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "BankDetails" ADD COLUMN     "bank_balance" INTEGER NOT NULL;
