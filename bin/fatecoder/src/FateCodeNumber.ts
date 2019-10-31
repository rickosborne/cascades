import {FateCodeExpression} from "./FateCodeExpression";

export class FateCodeNumber extends FateCodeExpression {
	protected constructor(public readonly num: number) {
		super();
	}

	public toString(): string {
		return String(this.num);
	}

	public static fromText(text: string): FateCodeNumber {
		return new FateCodeNumber(Number(text));
	}
}
