import { Stack } from "@core";
import { Injectable } from "@nestjs/common";
import { PrismaProvider } from "../db/prisma.provider";

@Injectable()
export class StackPrisma {
	constructor(private readonly prisma: PrismaProvider) {}
	async getAll(): Promise<Stack[]> {
		return this.prisma.stack.findMany();
	}

	async getHighlightedStacks() {
		return this.prisma.stack.findMany({
			where: {
				highlight: true,
			},
		});
	}
}
