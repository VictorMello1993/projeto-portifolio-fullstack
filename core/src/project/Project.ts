import { Stack } from "../stack/Stack";
import { Level } from "./Level";
import { Type } from "./Type";

export interface Project {
	id: number;
	name: string;
	description: string;
	images: string[];
	type: Type;
	level: Level;
	repository: string;
	highlight: boolean;
	stacks: Stack[];
}
