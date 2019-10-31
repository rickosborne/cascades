import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeLinkAction} from "./FateCodeLinkAction";
import {FateCodeString} from "./FateCodeString";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeLinkStatement extends FateCodeStatement {
	constructor(
		public readonly action: FateCodeLinkAction,
		public readonly identifier: FateCodeIdentifier,
		public readonly from: FateCodeString,
		public readonly to: FateCodeString,
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return [this.identifier, this.from, this.to];
	}

	public toString(indent: string = ''): string {
		return `${indent}${this.action.toLocaleUpperCase()} ${this.identifier.toString()} FROM ${this.from.toString()} TO ${this.to.toString()}`;
	}
}
