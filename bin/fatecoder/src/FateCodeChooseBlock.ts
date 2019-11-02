import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeString} from "./FateCodeString";
import {FateCodeSourceNode} from "./FateCodeSourceNode";

export class FateCodeChooseBlock extends FateCodeStatement {
	constructor(
		public readonly option: FateCodeString,
		public readonly statements: FateCodeStatement[],
	) {
		super();
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return ([] as FateCodeSourceNode[]).concat(this.option).concat(...this.statements);
	}

	public toString(indent: string = ''): string {
		const indentMore = `${indent}\t`;
		return [
			`${indent}CHOOSE ${this.option.quotedText}`,
			this.statements.map(s => s.toString(indentMore)),
		].flat(2).join('\n');
	}


}
