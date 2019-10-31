import {CommandModule} from "yargs";
import * as fs from 'fs';
import {SourceSet} from "../src/SourceSet";
import {Logger, LogLevel} from "../src/Logger";
import {FateCodeAnchor} from "../src/FateCodeAnchor";
import {FateCodeJumpStatement} from "../src/FateCodeJumpStatement";
import {FateCodeVisitStatement} from "../src/FateCodeVisitStatement";

interface AssembleArgs {
	logLevel?: LogLevel;
	source: string[];
}

export class AssembleRunner {
	private readonly logger: Logger;
	public readonly sourceSet: SourceSet;

	constructor(args: AssembleArgs) {
		this.sourceSet = new SourceSet(args.source);
		this.logger = new Logger(args.logLevel);
	}

	public async run(): Promise<void> {
		await this.sourceSet.load();
		const mds = await this.sourceSet.getMarkdowns();
		for (const md of mds) {
			this.logger.debug(`Markdown: ${md.filePath}`);
			const programs = await md.getFateCodeBlocks();
			for (const program of programs) {
				const targets = program.flatMap(n => n instanceof FateCodeJumpStatement ? n.targetAnchor : n instanceof FateCodeVisitStatement ? n.targetAnchor : undefined)
					.filter(n => n != null) as FateCodeAnchor[];
				this.logger.debug(`\tProgram:\n${program.toString('\t')}\n${targets.map(target => `\t==> Target: ${target.toString()}`).join('\n')}`);
			}
		}
	}
}

export const assemble: CommandModule<unknown, AssembleArgs> = {
	command: 'assemble',
	describe: 'Assemble a directory of Markdown source files into a book format',
	builder: {
		source: {
			alias: 's',
			description: 'Source directory',
			demandOption: true,
			type: 'array',
			coerce: (sources: string[]): string[] => {
				sources.forEach(sourcePath => {
					const stats = fs.statSync(sourcePath);
					if (stats == null || !stats.isDirectory()) {
						throw new Error(`Expected a directory for --source: ${sourcePath}`);
					}
				});
				return sources;
			}
		},
		logLevel: {
			description: 'Verbosity',
			choices: Object.values(LogLevel),
			type: 'string'
		}
	},
	handler: async (args: AssembleArgs): Promise<void> => {
		await new AssembleRunner(args).run();
	}
};
