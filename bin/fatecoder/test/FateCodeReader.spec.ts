import {expect} from 'chai';
import {describe, it} from 'mocha';
import {readFateCode} from '../src/FateCodeReader';
import {randomInt, randomString} from "./TestUtil";
import {FateCodeProgram} from "../src/FateCodeProgram";
import {FateCodeComment} from "../src/FateCodeComment";
import {FateCodeTrackStatement} from "../src/FateCodeTrackStatement";
import {FateCodeIdentifierType} from "../src/FateCodeIdentifierType";
import {FateCodeIdentifier} from "../src/FateCodeIdentifier";
import {FateCodeReturn} from "../src/FateCodeReturn";
import {FateCodeJumpStatement} from "../src/FateCodeJumpStatement";

describe('readFateCode', () => {
	it('is a function', () => expect(readFateCode).is.a('function'));

	it('passes through fileName and startLine', () => {
		const fileName = `${randomString()}.ts`;
		const startLine = randomInt();
		const program = readFateCode("// Comment", fileName, startLine);
		expect(program).instanceOf(FateCodeProgram);
		expect(program).property('fileName', fileName);
		expect(program).property('startLine', startLine);
	});

	it('allows missing fileName and startLine', () => {
		const program = readFateCode("// Comment");
		expect(program).instanceOf(FateCodeProgram);
		expect(program).property('fileName', undefined);
		expect(program).property('startLine', undefined);
	});

	it('parses the kitchen sink', () => {
		const kitchenSink = [
			'// this is a comment',
			'TRACK NUMERIC counter',
			'UPDATE NUMERIC counter TO 6',
			'TRACK LINKED memory',
			'WHEN NUMERIC counter > 5 THEN',
			'    VISIT #otherAddress REMEMBERING 0x1234',
			'END WHEN',
			'WHEN NUMERIC counter < 4 THEN',
			'    VISIT #someMemory',
			'END WHEN',
			'WHEN NUMERIC counter == 0 THEN',
			'    JUMP 0x2345',
			'END WHEN',
			'LINK memory FROM "foo" TO "bar"',
			'UNLINK memory FROM "baz" TO "quux"',
			'WHEN memory LINK FROM "foo" TO "bar" THEN',
			'  UPDATE NUMERIC counter ADD 7',
			'END WHEN',
			'WHEN NO memory LINK FROM "baz" TO "quux" THEN',
			'  UPDATE NUMERIC counter SUBTRACT 5',
			'END WHEN',
			'RETURN',
		].join('\n');
		const program = readFateCode(kitchenSink);
		expect(program).instanceOf(FateCodeProgram);
		expect(program.startLine).to.be.undefined;
		expect(program.fileName).to.be.undefined;
		expect(program.statements).length.greaterThan(0);
		expect(program.statements[0]).to.be.instanceOf(FateCodeComment)
			.and.property('text', '// this is a comment');
		const trackStmt = expect(program.statements[1]).to.be.instanceOf(FateCodeTrackStatement);
		trackStmt.with.property('type', FateCodeIdentifierType.NUMERIC);
		trackStmt.with.property('identifier').instanceOf(FateCodeIdentifier)
			.with.property('text', 'counter');
		const lastLine = program.statements[program.statements.length - 1];
		expect(lastLine).to.be.instanceOf(FateCodeReturn);
		const allNodes = program.flatMap(n => n);
		const jumps = allNodes
			.filter(n => n instanceof FateCodeJumpStatement);
		expect(jumps).to.have.lengthOf(1);
		const jump = jumps[0] as FateCodeJumpStatement;
		expect(jump).to.be.instanceOf(FateCodeJumpStatement);
		expect(jump.targetAnchor.address).eq('0x2345');
	});
});
