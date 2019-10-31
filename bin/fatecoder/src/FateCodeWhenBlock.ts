import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export abstract class FateCodeWhenBlock extends FateCodeStatement {
	protected constructor(
		public readonly type: FateCodeIdentifierType,
		public readonly identifier: FateCodeIdentifier,
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return ([] as FateCodeSourceNode[]).concat(this.identifier);
	}
}
