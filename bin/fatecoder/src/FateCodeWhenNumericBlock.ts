import {FateCodeWhenBlock} from "./FateCodeWhenBlock";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeNumber} from "./FateCodeNumber";
import {FateCodeWhenNumericConditionType} from "./FateCodeWhenNumericConditionType";
import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeWhenNumericBlock extends FateCodeWhenBlock {
	constructor(
		identifier: FateCodeIdentifier,
		public readonly number: FateCodeNumber,
		public readonly operator: FateCodeWhenNumericConditionType,
		public readonly statements: FateCodeStatement[] = [],
	) {
		super(FateCodeIdentifierType.NUMERIC, identifier);
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return super.getChildNodes().concat(this.number).concat(...this.statements);
	}

	public toString(indent: string = ''): string {
		const indentMore = `${indent}\t`;
		return [
			`${indent}WHEN NUMERIC ${this.identifier} ${this.operator} ${this.number.toString()} THEN`,
			this.statements.map(stmt => stmt.toString(indentMore)),
			`${indent}END WHEN`,
		].flat().join('\n');
	}
}
