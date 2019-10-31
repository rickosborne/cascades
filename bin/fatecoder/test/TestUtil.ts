export function randomString(): string {
	return `randomString${Math.floor(Math.random() * 100000)}`;
}

export function randomInt(upperBound = 100, lowerBound = 0): number {
	const range = upperBound - lowerBound
	return Math.floor(Math.random() * range) + lowerBound;
}
