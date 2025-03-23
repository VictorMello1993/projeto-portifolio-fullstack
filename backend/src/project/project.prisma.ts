import { Project, Type } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "../db/prisma.provider";

@Injectable()
export class ProjectPrisma {
	constructor(private readonly prisma: PrismaProvider) {}
	async getAll(): Promise<Project[]> {
		const projects = await this.prisma.project.findMany({
			include: { stacks: true },
		});

		return projects.map((project) => ({
			...project,
			type: project.type as Type,
		}));
	}

	async getHighlightedProjects(): Promise<Project[]> {
		const projects = await this.prisma.project.findMany({
			where: {
				highlight: true,
			},
			include: { stacks: true },
		});

		return projects.map((project) => ({
			...project,
			type: project.type as Type,
		}));
	}

	async getById(id: number): Promise<Project | null> {
		const project = await this.prisma.project.findUnique({
			where: {
				id,
			},
			include: { stacks: true },
		});

		if (project) {
			return {
				...project,
				type: project.type as Type,
			};
		}

		return null;
	}
}
