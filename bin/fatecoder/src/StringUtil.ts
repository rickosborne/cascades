export function wordAtLineAndPos(corpus: string, line: number, pos: number, base = 1): string {
	const targetLine = lineFrom(corpus, line, base);
	const spaceBefore = Math.max(targetLine.lastIndexOf(' ', pos), 0);
	const spaceAfter = targetLine.indexOf(' ', pos);
	return targetLine.substring(spaceBefore, spaceAfter > -1 ? spaceAfter : targetLine.length);
}

export function lineFrom(corpus: string, line: number, base = 1): string {
	return corpus.split('\n')[line - base];
}
