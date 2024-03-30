/*
  Warnings:

  - A unique constraint covering the columns `[card_number]` on the table `Card` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Card_card_number_key" ON "Card"("card_number");
