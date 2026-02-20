-- AlterTable
ALTER TABLE "Tasks" ALTER COLUMN "created_by" DROP NOT NULL,
ALTER COLUMN "state_name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "lastname" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Workflow" ALTER COLUMN "workflow_name" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Workflow_Rules" ALTER COLUMN "state_1" DROP NOT NULL,
ALTER COLUMN "state_2" DROP NOT NULL;
