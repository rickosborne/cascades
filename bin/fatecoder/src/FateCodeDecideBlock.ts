import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeChooseBlock} from "./FateCodeChooseBlock";

export class FateCodeDecideBlock extends FateCodeStatement {
	public constructor(
		public readonly chooseBlocks: FateCodeChooseBlock[],
	) {
		super();
	}

	public getChildNodes(): FateCodeChooseBlock[] {
		return this.chooseBlocks;
	}

	public toString(indent: string = ''): string {
		const indentMore = `${indent}\t`;
		return [
			`${indent}DECIDE BETWEEN`,
			this.chooseBlocks.map(cb => cb.toString(indentMore)),
			`${indent}END DECIDE`
		].flat(2).join("\n");
	}
}
