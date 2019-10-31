import {FateCodeSourceNode} from "./FateCodeSourceNode";

export abstract class FateCodeExpression extends FateCodeSourceNode {
	protected constructor() {
		super();
	}

	abstract toString(): string;
}
