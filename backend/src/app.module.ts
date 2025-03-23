import { Module } from "@nestjs/common";
import { AppController } from "./app.controller";
import { DbModule } from "./db/db.module";
import { ProjectModule } from "./project/project.module";
import { StackModule } from "./stack/stack.module";

@Module({
	imports: [DbModule, ProjectModule, StackModule],
	controllers: [AppController],
	providers: [],
})
export class AppModule {}
