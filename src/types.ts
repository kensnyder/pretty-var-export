export type Formatter = (
	value: any,
	level?: number,
	seen?: Set<unknown>,
	indent?: (level: number) => string,
	walk?: Formatter
) => string;
