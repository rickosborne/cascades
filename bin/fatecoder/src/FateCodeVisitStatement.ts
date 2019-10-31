import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeAnchor} from "./FateCodeAnchor";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeVisitStatement extends FateCodeStatement {
	constructor(
		public readonly targetAnchor: FateCodeAnchor,
		public readonly rememberingAnchor?: FateCodeAnchor,
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		const children: FateCodeSourceNode[] = [this.targetAnchor];
		if (this.rememberingAnchor != null) {
			children.push(this.rememberingAnchor);
		}
		return children;
	}

	public toString(indent: string = ''): string {
		return `${indent}VISIT ${this.targetAnchor.toString()}${this.rememberingAnchor == null ? '' : ` REMEMBERING ${this.rememberingAnchor}`}`;
	}
}
