-- AlterTable
ALTER TABLE "stacks" ADD COLUMN     "projectId" INTEGER;

-- AddForeignKey
ALTER TABLE "stacks" ADD CONSTRAINT "stacks_projectId_fkey" FOREIGN KEY ("projectId") REFERENCES "projects"("id") ON DELETE SET NULL ON UPDATE CASCADE;
