import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeAnchor} from "./FateCodeAnchor";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeJumpStatement extends FateCodeStatement {
	constructor(
		public readonly targetAnchor: FateCodeAnchor,
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return [this.targetAnchor];
	}

	public toString(indent: string = ''): string {
		return `${indent}JUMP ${this.targetAnchor.toString()}`;
	}
}
