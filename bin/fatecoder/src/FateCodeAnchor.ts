import {FateCodeExpression} from "./FateCodeExpression";

export class FateCodeAnchor extends FateCodeExpression {
	constructor(
		public readonly address: string | undefined,
		public readonly label: string | undefined,
	) {
		super();
		if (address == null && label == null) {
			throw new Error(`An anchor needs either an address or a label.`);
		}
	}

	public toString(): string {
		return `${this.address || this.label}`;
	}
}
