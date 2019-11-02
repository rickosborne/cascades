import {FateCodeVisitor} from "../grammar/FateCodeVisitor";
import {AbstractParseTreeVisitor} from "antlr4ts/tree";
// noinspection JSDeprecatedSymbols
import {ANTLRInputStream, CommonTokenStream, RecognitionException, Recognizer, Token} from "antlr4ts";
import {FateCodeLexer} from "../grammar/FateCodeLexer";
import {
	AddressExprContext,
	AnchorExprContext,
	ChooseBlockContext,
	CommentContext,
	DecideBlockContext,
	FateCodeParser,
	IdentifierContext,
	JumpStmtContext,
	LabelExprContext,
	LineNumberContext,
	LinkStmtContext,
	NumberContext,
	ProgramContext,
	ReturnStmtContext,
	StatementContext,
	StringContext,
	TrackLinkedStmtContext,
	TrackNumericStmtContext,
	UpdateNumericStmtContext,
	VisitStmtContext,
	WhenLinkedBlockContext,
	WhenNumericBlockContext
} from "../grammar/FateCodeParser";
import {FateCodeSourceNode} from "./FateCodeSourceNode";
import {FateCodeProgram} from "./FateCodeProgram";
import {FateCodeStatement} from "./FateCodeStatement";
import {FateCodeReturn} from "./FateCodeReturn";
import {FateCodeAnchor} from "./FateCodeAnchor";
import {FateCodeVisitStatement} from "./FateCodeVisitStatement";
import {FateCodeJumpStatement} from "./FateCodeJumpStatement";
import {FateCodeComment} from "./FateCodeComment";
import {FateCodeUpdateNumericStatement} from "./FateCodeUpdateNumericStatement";
import {FateCodeUpdateNumericAction} from "./FateCodeUpdateNumericAction";
import {FateCodeLinkStatement} from "./FateCodeLinkStatement";
import {FateCodeLinkAction} from "./FateCodeLinkAction";
import {FateCodeIdentifier} from "./FateCodeIdentifier";
import {FateCodeIdentifierType} from "./FateCodeIdentifierType";
import {FateCodeString} from "./FateCodeString";
import {FateCodeLineNumber} from "./FateCodeLineNumber";
import {FateCodeNumber} from "./FateCodeNumber";
import {FateCodeTrackStatement} from "./FateCodeTrackStatement";
import {FateCodeWhenNumericConditionType} from "./FateCodeWhenNumericConditionType";
import {FateCodeWhenLinkedBlock} from "./FateCodeWhenLinkedBlock";
import {FateCodeWhenNumericBlock} from "./FateCodeWhenNumericBlock";
import {lineFrom, wordAtLineAndPos} from "./StringUtil";
import {FateCodeWhenLinkedConditionType} from "./FateCodeWhenLinkedConditionType";
import {FateCodeChooseBlock} from "./FateCodeChooseBlock";
import {FateCodeDecideBlock} from "./FateCodeDecideBlock";

type Constructor<T> = Function & { prototype: T };

function coerce<T extends FateCodeSourceNode>(type: Constructor<T>, value: FateCodeSourceNode): T {
	if (value instanceof type) {
		return value as T;
	}
	throw new Error(`Expected a ${type.name}: ${value.constructor.name} ${JSON.stringify(value)}`);
}

class NeverSourceNode extends FateCodeSourceNode {
	toString(indent?: string): string {
		throw new Error('Unexpected call to NeverSourceNode#toString');
	}
}

class FateCodeReader extends AbstractParseTreeVisitor<FateCodeSourceNode> implements FateCodeVisitor<FateCodeSourceNode> {

	protected defaultResult(): NeverSourceNode {
		return new NeverSourceNode();
	}

	public visitAddressExpr(ctx: AddressExprContext): FateCodeString {
		return FateCodeString.fromUnquoted(ctx.text);
	}

	public visitAnchorExpr(ctx: AnchorExprContext): FateCodeAnchor {
		const address = ctx.addressExpr();
		const label = ctx.labelExpr();
		return new FateCodeAnchor(
			address != null ? address.text : undefined,
			label != null ? label.text : undefined,
		);
	}

	public visitChooseBlock(ctx: ChooseBlockContext): FateCodeChooseBlock {
		const option = coerce(FateCodeString, super.visit(ctx.string()));
		const statements = ctx.statement().map(s => coerce(FateCodeStatement, super.visit(s)));
		return new FateCodeChooseBlock(option, statements);
	}

	public visitComment(ctx: CommentContext): FateCodeComment {
		return new FateCodeComment(ctx.text);
	}

	public visitDecideBlock(ctx: DecideBlockContext): FateCodeSourceNode {
		const chooseBlocks = ctx.chooseBlock().map(cb => coerce(FateCodeChooseBlock, super.visit(cb)));
		return new FateCodeDecideBlock(chooseBlocks);
	}

	public visitIdentifier(ctx: IdentifierContext): FateCodeIdentifier {
		return new FateCodeIdentifier(ctx.text);
	}

	public visitJumpStmt(ctx: JumpStmtContext): FateCodeJumpStatement {
		return new FateCodeJumpStatement(coerce(FateCodeAnchor, super.visit(ctx.anchorExpr())));
	}

	public visitLabelExpr(ctx: LabelExprContext): FateCodeSourceNode {
		return FateCodeString.fromUnquoted(ctx.text);
	}

	public visitLineNumber(ctx: LineNumberContext): FateCodeLineNumber {
		return new FateCodeLineNumber(ctx.text);
	}

	public visitLinkStmt(ctx: LinkStmtContext): FateCodeLinkStatement {
		const strings = ctx.string().map(s => coerce(FateCodeString, super.visit(s)));
		const action = ctx.UNLINK() != null ? FateCodeLinkAction.UNLINK : FateCodeLinkAction.LINK;
		const identifier = coerce(FateCodeIdentifier, super.visit(ctx.identifier())).withType(FateCodeIdentifierType.LINKED);
		return new FateCodeLinkStatement(
			action,
			identifier,
			strings[0],
			strings[1],
		);
	}

	public visitNumber(ctx: NumberContext): FateCodeNumber {
		return FateCodeNumber.fromText(ctx.text);
	}

	public visitProgram(ctx: ProgramContext): FateCodeProgram {
		const lines = ctx.numberedStatement().map(lc => {
			return coerce(FateCodeStatement, super.visit(lc.statement()))
		});
		return new FateCodeProgram(lines);
	}

	public visitReturnStmt(ctx: ReturnStmtContext): FateCodeReturn {
		return new FateCodeReturn();
	}

	public visitStatement(ctx: StatementContext): FateCodeSourceNode {
		return super.visitChildren(ctx);
	}

	public visitString(ctx: StringContext): FateCodeString {
		return FateCodeString.fromQuoted(ctx.text);
	}

	public visitTrackLinkedStmt(ctx: TrackLinkedStmtContext): FateCodeTrackStatement {
		const identifier = coerce(FateCodeIdentifier, super.visit(ctx.identifier()));
		return new FateCodeTrackStatement(FateCodeIdentifierType.LINKED, identifier.withType(FateCodeIdentifierType.LINKED));
	}

	public visitTrackNumericStmt(ctx: TrackNumericStmtContext): FateCodeTrackStatement {
		const identifier = coerce(FateCodeIdentifier, super.visit(ctx.identifier()));
		return new FateCodeTrackStatement(FateCodeIdentifierType.NUMERIC, identifier.withType(FateCodeIdentifierType.NUMERIC));
	}

	public visitUpdateNumericStmt(ctx: UpdateNumericStmtContext): FateCodeUpdateNumericStatement {
		const identifier = coerce(FateCodeIdentifier, super.visit(ctx.identifier()));
		const action = ctx.ADD() != null ? FateCodeUpdateNumericAction.ADD
			: ctx.SUBTRACT() ? FateCodeUpdateNumericAction.SUBTRACT
				: FateCodeUpdateNumericAction.TO;
		const num = coerce(FateCodeNumber, super.visit(ctx.number()));
		return new FateCodeUpdateNumericStatement(identifier, action, num);
	}

	public visitVisitStmt(ctx: VisitStmtContext): FateCodeVisitStatement {
		const anchors = ctx.anchorExpr().map(a => coerce(FateCodeAnchor, super.visit(a)));
		return new FateCodeVisitStatement(
			anchors[0],
			anchors[1],
		);
	}

	public visitWhenLinkedBlock(ctx: WhenLinkedBlockContext): FateCodeWhenLinkedBlock {
		const identifier = coerce(FateCodeIdentifier, super.visit(ctx.identifier()));
		const no = ctx.NO() != null;
		const path = ctx.PATH() != null ? FateCodeWhenLinkedConditionType.PATH : FateCodeWhenLinkedConditionType.LINK;
		const statements = ctx.statement().map(cb => coerce(FateCodeStatement, super.visit(cb)));
		const strings = ctx.string().map(s => coerce(FateCodeString, super.visit(s)));
		return new FateCodeWhenLinkedBlock(identifier, no, path, strings[0], strings[1], statements);
	}

	public visitWhenNumericBlock(ctx: WhenNumericBlockContext): FateCodeWhenNumericBlock {
		const identifier = coerce(FateCodeIdentifier, super.visit(ctx.identifier()));
		const num = coerce(FateCodeNumber, super.visit(ctx.number()));
		const operator = ctx.numericComparisonOperator();
		const opType: FateCodeWhenNumericConditionType = operator.EQ() ? FateCodeWhenNumericConditionType.EQUALTO
			: operator.GT() ? FateCodeWhenNumericConditionType.GREATERTHAN
				: operator.LT() ? FateCodeWhenNumericConditionType.LESSTHAN
					: FateCodeWhenNumericConditionType.NOTEQUALTO;
		const statements = ctx.statement().map(s => {
			return super.visit(s);
		});
		return new FateCodeWhenNumericBlock(identifier, num, opType, statements);
	}

}

export function readFateCode(text: string, fileName?: string, startLine?: number): FateCodeProgram {
	// noinspection JSDeprecatedSymbols
	const antlrInputStream = new ANTLRInputStream(text.endsWith('\n') ? text : (text + '\n'));
	const lexer = new FateCodeLexer(antlrInputStream);
	const tokenStream = new CommonTokenStream(lexer);
	const parser = new FateCodeParser(tokenStream);
	parser.addErrorListener({
		syntaxError: function <T extends Token>(recognizer: Recognizer<T, any>, offendingSymbol: T | undefined, line: number, charPositionInLine: number, msg: string, _ex: RecognitionException | undefined): void {
			const word = wordAtLineAndPos(text, line, charPositionInLine);
			const lineText = lineFrom(text, line);
			console.error(`${JSON.stringify({word, line, lineText, charPositionInLine, msg})}`);
		}
	});
	const tree = parser.program();
	const reader = new FateCodeReader();
	const program = coerce(FateCodeProgram, reader.visit(tree));
	return fileName != null || startLine != null ? program.withFileMetadata(fileName, startLine) : program;
}
