import {FateCodeUpdateStatement} from "./FateCodeUpdateStatement";
import {FateCodeUpdateNumericAction} from "./FateCodeUpdateNumericAction";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeNumber} from "./FateCodeNumber";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeUpdateNumericStatement extends FateCodeUpdateStatement {
	constructor(
		public readonly identifier: FateCodeIdentifier,
		public readonly action: FateCodeUpdateNumericAction,
		public readonly operand: FateCodeNumber,
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return [this.identifier, this.operand];
	}

	public toString(indent: string = ''): string {
		return `${indent}UPDATE NUMERIC ${this.identifier.toString()} ${this.action} ${this.operand.toString()}`;
	}
}
