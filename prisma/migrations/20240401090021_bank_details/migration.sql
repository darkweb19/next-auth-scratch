-- CreateTable
CREATE TABLE "BankDetails" (
    "id" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "bank_branch" TEXT,
    "acc_number" BIGINT NOT NULL,
    "acc_type" TEXT NOT NULL,
    "open_date" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "user_id" TEXT,

    CONSTRAINT "BankDetails_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "BankDetails_user_id_key" ON "BankDetails"("user_id");

-- AddForeignKey
ALTER TABLE "BankDetails" ADD CONSTRAINT "BankDetails_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
