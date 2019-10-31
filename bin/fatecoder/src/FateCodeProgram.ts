import {FateCodeSourceNode} from "./FateCodeSourceNode";
import {readFateCode} from "./FateCodeReader";
import {FateCodeStatement} from "./FateCodeStatement";

export class FateCodeProgram extends FateCodeSourceNode {

	public constructor(
		public readonly statements: FateCodeStatement[] = [],
		public readonly fileName?: string,
		public readonly startLine?: number,
	) {
		super();
	}

	public static fromLines(lines: string[], fileName: string, startLine: number): FateCodeProgram {
		const text = lines.join('\n');
		return readFateCode(text, fileName, startLine)
	}

	public static fromMarkdown(text: string, fileName: string): FateCodeProgram[] {
		const blocks: FateCodeProgram[] = [];
		const linesInCurrentBlock: string[] = [];
		let inBlock = false;
		let startLine = 0;
		let currentLine = 0;
		for (const line of text.split(/[\r\n]/)) {
			currentLine++;
			if (inBlock) {
				if (line.startsWith('```')) {
					blocks.push(FateCodeProgram.fromLines(linesInCurrentBlock, fileName, startLine));
					inBlock = false;
					linesInCurrentBlock.splice(0, linesInCurrentBlock.length);
					startLine = 0;
				} else {
					linesInCurrentBlock.push(line);
				}
			} else if (line.startsWith('```fatecode')) {
				startLine = currentLine;
				inBlock = true;
			}
		}
		if (linesInCurrentBlock.length > 0) {
			throw new Error(`Dangling fatecode block at ${fileName}:${startLine}`);
		}
		return blocks;
	}

	public getChildNodes(): FateCodeSourceNode[] {
		return this.statements;
	}

	public toString(indent: string = ''): string {
		return [
			`${indent}// BEGIN PROGRAM${this.fileName == null ? '' : ` FILENAME="${this.fileName}"`}${this.startLine == null ? '' : ` STARTLINE=${this.startLine}`}`,
			this.statements.flatMap(s => s.toString(indent)),
		].flat(2).join('\n');
	}

	public withFileMetadata(fileName?: string, startLine?: number): FateCodeProgram {
		return new FateCodeProgram(this.statements, fileName, startLine);
	}
}
