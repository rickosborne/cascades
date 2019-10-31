import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeExpression} from "./FateCodeExpression";

export class FateCodeIdentifier extends FateCodeExpression {
	constructor(
		public readonly text: string,
		private _type?: FateCodeIdentifierType,
	) {
		super();
	}

	public get type(): FateCodeIdentifierType | undefined {
		return this._type;
	}

	public toString(): string {
		return this.text;
	}

	public withType(type: FateCodeIdentifierType): this {
		if (this._type != null && this._type !== type) {
			throw new Error(`Cannot change identifier '${this.text}' from type ${this._type} to ${type}.`);
		}
		this._type = type;
		return this;
	}
}
