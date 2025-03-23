import { Module } from "@nestjs/common";
import { DbModule } from "../db/db.module";
import { ProjectController } from "./project.controller";
import { ProjectPrisma } from "./project.prisma";

@Module({
	controllers: [ProjectController],
	providers: [ProjectPrisma],
	imports: [DbModule],
})
export class ProjectModule {}
