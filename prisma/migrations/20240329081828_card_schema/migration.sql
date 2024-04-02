-- CreateTable
CREATE TABLE "Card" (
    "id" SERIAL NOT NULL,
    "card_name" TEXT NOT NULL,
    "card_number" INTEGER NOT NULL,
    "bank_name" TEXT NOT NULL,
    "authorId" TEXT NOT NULL,
    "card_type" TEXT,
    "expiryDate" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_authorId_fkey" FOREIGN KEY ("authorId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
