import {FateCodeStatement} from "./FateCodeStatement";

export class FateCodeReturn extends FateCodeStatement {
	constructor() {
		super();
	}

	toString(indent: string = ''): string {
		return `${indent}RETURN`;
	}
}
