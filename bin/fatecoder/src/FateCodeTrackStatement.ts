import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeTrackStatement extends FateCodeStatement {
	constructor(
		public readonly type: FateCodeIdentifierType,
		public readonly identifier: FateCodeIdentifier,
	) {
		super();
	}

	getChildNodes(): FateCodeSourceNode[] {
		return [this.identifier];
	}

	public toString(indent: string = ''): string {
		return `${indent}TRACK ${this.type} ${this.identifier}`;
	}
}
