import { Stack } from "@core";
import { Controller, Get } from "@nestjs/common";
import { StackPrisma } from "./stack.prisma";

@Controller("stacks")
export class StackController {
	constructor(private readonly stackProvider: StackPrisma) {}
	@Get()
	async getAll(): Promise<Stack[]> {
		return this.stackProvider.getAll();
	}

	@Get("highlights")
	async getHighlightedStacks(): Promise<Stack[]> {
		return this.stackProvider.getHighlightedStacks();
	}
}
