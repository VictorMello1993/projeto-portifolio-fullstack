/*
  Warnings:

  - You are about to drop the column `projectId` on the `stacks` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "stacks" DROP CONSTRAINT "stacks_projectId_fkey";

-- AlterTable
ALTER TABLE "stacks" DROP COLUMN "projectId";

-- CreateTable
CREATE TABLE "_ProjectToStack" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,

    CONSTRAINT "_ProjectToStack_AB_pkey" PRIMARY KEY ("A","B")
);

-- CreateIndex
CREATE INDEX "_ProjectToStack_B_index" ON "_ProjectToStack"("B");

-- AddForeignKey
ALTER TABLE "_ProjectToStack" ADD CONSTRAINT "_ProjectToStack_A_fkey" FOREIGN KEY ("A") REFERENCES "projects"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ProjectToStack" ADD CONSTRAINT "_ProjectToStack_B_fkey" FOREIGN KEY ("B") REFERENCES "stacks"("id") ON DELETE CASCADE ON UPDATE CASCADE;
