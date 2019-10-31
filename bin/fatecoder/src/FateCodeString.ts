import {FateCodeExpression} from "./FateCodeExpression";

export class FateCodeString extends FateCodeExpression {

	private constructor(
		public readonly quotedText: string,
		public readonly unquotedText: string,
	) {
		super();
	}

	public static fromQuoted(text: string): FateCodeString {
		return new FateCodeString(text, this.unquote(text));
	}

	public static fromUnquoted(text: string): FateCodeString {
		return new FateCodeString(this.quote(text), text);
	}

	public static quote(text: string): string {
		return `"${text.replace(/"/g, '""')}"`;
	}

	public static unquote(text: string): string {
		return text.replace(/^"/, '')
			.replace(/"$/, '')
			.replace(/""/g, '"');
	}

	public toString(): string {
		return this.quotedText;
	}
}
