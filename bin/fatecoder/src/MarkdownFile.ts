import {memoize} from "./memoize";
import {promises as fs} from "fs";
import {FateCodeProgram} from "./FateCodeProgram";

export class MarkdownFile {
	public readonly getText: () => Promise<string> = memoize(() => this.read());
	public readonly getFateCodeBlocks: () => Promise<FateCodeProgram[]> = memoize(() => this.getText().then(text => FateCodeProgram.fromMarkdown(text, this.filePath)));

	constructor(
		public readonly filePath: string,
	) {
	}

	public load(): Promise<void> {
		return this.read().then(() => undefined);
	}

	private read(): Promise<string> {
		return fs.readFile(this.filePath, {encoding: "utf-8"});
	}

}
