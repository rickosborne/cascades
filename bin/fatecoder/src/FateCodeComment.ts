import {FateCodeStatement} from "./FateCodeStatement";

export class FateCodeComment extends FateCodeStatement {
	constructor(public readonly text: string) {
		super();
	}

	public toString(indent: string = ''): string {
		return `${indent}${this.text}`;
	}
}
