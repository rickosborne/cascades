import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeUpdateStatement} from "./FateCodeUpdateStatement";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export abstract class FateCodeUpdateBlock extends FateCodeStatement {
	protected constructor(
		public readonly type: FateCodeIdentifierType,
		public readonly identifier: FateCodeIdentifier,
		public readonly statements: FateCodeUpdateStatement[] = [],
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return ([] as FateCodeSourceNode[]).concat(this.identifier).concat(...this.statements);
	}

	toString(indent: string = ''): string {
		const indentMore = `${indent}\t`;
		return [
			`${indent}UPDATE ${this.type} ${this.identifier.toString()}`,
			this.statements.map(s => s.toString(indentMore)),
			`${indent}END UPDATE`,
		].flat(2).join('\n');
	}
}
