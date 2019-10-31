import * as yargs from 'yargs';
import {assemble} from "./command/assemble";

const pkg: { version: string } = require('./package.json');

yargs
	.scriptName('fatecoder')
	.version(pkg.version)
	.describe('_', 'Fatecoder toolchain')
	.command(assemble)
	.demandCommand()
	.help()
	.argv
;
