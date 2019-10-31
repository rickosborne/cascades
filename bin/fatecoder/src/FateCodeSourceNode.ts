export abstract class FateCodeSourceNode {
	public flatMap<T>(mapper: (node: FateCodeSourceNode) => T): T[] {
		return ([] as T[]).concat(mapper(this))
			.concat(...this.getChildNodes().map(child => child.flatMap(mapper)));
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return [];
	}

	public getDescendents(): FateCodeSourceNode[] {
		return ([] as FateCodeSourceNode[]).concat(this)
			.concat(...this.getChildNodes().map(child => child.getDescendents()));
	}

	abstract toString(indent?: string): string;
}
