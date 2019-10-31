import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeLineNumber extends FateCodeSourceNode {
	constructor(public readonly text: string) {
		super();
	}

	public toString(): string {
		return this.text;
	}
}
