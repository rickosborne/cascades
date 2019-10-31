import {FateCodeWhenBlock} from "./FateCodeWhenBlock";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeWhenLinkedConditionType} from "./FateCodeWhenLinkedConditionType";
import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeString} from "./FateCodeString";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeWhenLinkedBlock extends FateCodeWhenBlock {
	constructor(
		identifier: FateCodeIdentifier,
		public readonly negate: boolean,
		public readonly linkOrPath: FateCodeWhenLinkedConditionType,
		public readonly from: FateCodeString,
		public readonly to: FateCodeString,
		public readonly statements: FateCodeStatement[] = [],
	) {
		super(FateCodeIdentifierType.LINKED, identifier);
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return super.getChildNodes().concat(this.from, this.to).concat(...this.statements);
	}

	public toString(indent: string = ''): string {
		const indentMore = `${indent}\t`;
		return [
			`${indent}WHEN ${this.negate ? 'NO ' : ''}${this.identifier} ${this.linkOrPath} FROM ${this.from.quotedText} TO ${this.to.quotedText} THEN`,
			this.statements.map(stmt => stmt.toString(indentMore)),
			`${indent}END WHEN`,
		].flat().join('\n');
	}
}
