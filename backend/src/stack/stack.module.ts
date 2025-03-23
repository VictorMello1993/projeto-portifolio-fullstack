import { Module } from "@nestjs/common";
import { DbModule } from "../db/db.module";
import { StackController } from "./stack.controller";
import { StackPrisma } from "./stack.prisma";

@Module({
	controllers: [StackController],
	providers: [StackPrisma],
	imports: [DbModule],
})
export class StackModule {}
