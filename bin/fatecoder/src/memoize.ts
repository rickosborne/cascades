export function memoize<T>(supplier: () => T): () => T {
	let resolved = false;
	let value: T | undefined = undefined;
	return (): T => {
		if (!resolved) {
			value = supplier();
			resolved = true;
		}
		return value as T;
	};
}
