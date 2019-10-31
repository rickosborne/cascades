import {memoize} from "./memoize";
import {MarkdownFile} from "./MarkdownFile";
import {promises as fs} from "fs";
import * as path from "path";
import {Logger} from "./Logger";

export class SourceSet {
	public readonly getMarkdowns: () => Promise<MarkdownFile[]> = memoize(() => {
		return Promise.all(this.sourcePaths.map(sourcePath => {
			return fs.readdir(sourcePath)
				.then(files => ({
					files, sourcePath
				}));
		}))
			.then(filesAndPaths => {
				return filesAndPaths.flatMap(filesAndPath => {
					return filesAndPath.files
						.sort()
						.filter(fileName => fileName.endsWith('.md'))
						.map(fileName => {
							return new MarkdownFile(path.join(filesAndPath.sourcePath, fileName));
						})
				});
			});
	});
	private readonly logger: Logger;

	constructor(
		public readonly sourcePaths: string[] = [],
	) {
		this.logger = new Logger();
		this.logger.debug(`SourceSet ${JSON.stringify(sourcePaths)}`)
	}

	public async load(): Promise<void> {
		const mds = await this.getMarkdowns();
		await Promise.all(mds.map(md => md.load()));
	}
}
