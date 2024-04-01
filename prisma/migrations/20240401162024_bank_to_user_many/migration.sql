/*
  Warnings:

  - Made the column `user_id` on table `BankDetails` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "BankDetails" DROP CONSTRAINT "BankDetails_user_id_fkey";

-- AlterTable
ALTER TABLE "BankDetails" ALTER COLUMN "user_id" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "BankDetails" ADD CONSTRAINT "BankDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
