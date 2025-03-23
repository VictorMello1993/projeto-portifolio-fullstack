import { Project } from "@core";
import { Controller, Get, Param } from "@nestjs/common";
import { ProjectPrisma } from "./project.prisma";

@Controller("projects")
export class ProjectController {
	constructor(private readonly projectProvider: ProjectPrisma) {}
	@Get()
	async getAll(): Promise<Project[]> {
		return this.projectProvider.getAll();
	}

	@Get("highlights")
	async getHighlightedProjects(): Promise<Project[]> {
		return this.projectProvider.getHighlightedProjects();
	}

	@Get(":id")
	async getById(@Param("id") id: string): Promise<Project | null> {
		return this.projectProvider.getById(+id);
	}
}
