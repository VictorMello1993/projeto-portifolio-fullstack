import { Stack } from "../stack/Stack";
import { Level } from "./Level";
import { Type } from "./Type";

export interface Project {
	id: number;
	name: string;
	description: string;
	images: string[];
	level: Level;
	type: Type;
	highlight: boolean;
	repository: string;
	stacks: Stack[];
}
