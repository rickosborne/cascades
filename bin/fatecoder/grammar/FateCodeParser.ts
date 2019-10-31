// Generated from grammar/FateCode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ATN } from "antlr4ts/atn/ATN";
import { ATNDeserializer } from "antlr4ts/atn/ATNDeserializer";
import { FailedPredicateException } from "antlr4ts/FailedPredicateException";
import { NotNull } from "antlr4ts/Decorators";
import { NoViableAltException } from "antlr4ts/NoViableAltException";
import { Override } from "antlr4ts/Decorators";
import { Parser } from "antlr4ts/Parser";
import { ParserRuleContext } from "antlr4ts/ParserRuleContext";
import { ParserATNSimulator } from "antlr4ts/atn/ParserATNSimulator";
import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";
import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";
import { RecognitionException } from "antlr4ts/RecognitionException";
import { RuleContext } from "antlr4ts/RuleContext";
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { Token } from "antlr4ts/Token";
import { TokenStream } from "antlr4ts/TokenStream";
import { Vocabulary } from "antlr4ts/Vocabulary";
import { VocabularyImpl } from "antlr4ts/VocabularyImpl";

import * as Utils from "antlr4ts/misc/Utils";

import { FateCodeListener } from "./FateCodeListener";
import { FateCodeVisitor } from "./FateCodeVisitor";


export class FateCodeParser extends Parser {
	public static readonly THEN = 1;
	public static readonly END = 2;
	public static readonly RETURN = 3;
	public static readonly REMEMBERING = 4;
	public static readonly VISIT = 5;
	public static readonly NO = 6;
	public static readonly WHEN = 7;
	public static readonly NUMERIC = 8;
	public static readonly LINKED = 9;
	public static readonly LINK = 10;
	public static readonly PATH = 11;
	public static readonly UNLINK = 12;
	public static readonly FROM = 13;
	public static readonly EQUAL = 14;
	public static readonly TO = 15;
	public static readonly JUMP = 16;
	public static readonly UPDATE = 17;
	public static readonly TRACK = 18;
	public static readonly ADD = 19;
	public static readonly SUBTRACT = 20;
	public static readonly START = 21;
	public static readonly AT = 22;
	public static readonly DQ = 23;
	public static readonly PLUS = 24;
	public static readonly MINUS = 25;
	public static readonly DOT = 26;
	public static readonly GT = 27;
	public static readonly LT = 28;
	public static readonly EQ = 29;
	public static readonly NUMBER = 30;
	public static readonly HEXNUMBER = 31;
	public static readonly FLOAT = 32;
	public static readonly LineComment = 33;
	public static readonly LABEL = 34;
	public static readonly STRING = 35;
	public static readonly IDENTIFIER = 36;
	public static readonly WS = 37;
	public static readonly RULE_program = 0;
	public static readonly RULE_numberedStatement = 1;
	public static readonly RULE_statement = 2;
	public static readonly RULE_comment = 3;
	public static readonly RULE_identifier = 4;
	public static readonly RULE_lineNumber = 5;
	public static readonly RULE_returnStmt = 6;
	public static readonly RULE_number = 7;
	public static readonly RULE_string = 8;
	public static readonly RULE_visitStmt = 9;
	public static readonly RULE_jumpStmt = 10;
	public static readonly RULE_anchorExpr = 11;
	public static readonly RULE_addressExpr = 12;
	public static readonly RULE_labelExpr = 13;
	public static readonly RULE_whenNumericBlock = 14;
	public static readonly RULE_numericComparisonOperator = 15;
	public static readonly RULE_whenLinkedBlock = 16;
	public static readonly RULE_linkStmt = 17;
	public static readonly RULE_trackNumericStmt = 18;
	public static readonly RULE_trackLinkedStmt = 19;
	public static readonly RULE_updateNumericStmt = 20;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "numberedStatement", "statement", "comment", "identifier", 
		"lineNumber", "returnStmt", "number", "string", "visitStmt", "jumpStmt", 
		"anchorExpr", "addressExpr", "labelExpr", "whenNumericBlock", "numericComparisonOperator", 
		"whenLinkedBlock", "linkStmt", "trackNumericStmt", "trackLinkedStmt", 
		"updateNumericStmt",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'THEN'", "'END'", "'RETURN'", "'REMEMBERING'", "'VISIT'", 
		"'NO'", "'WHEN'", "'NUMERIC'", "'LINKED'", "'LINK'", "'PATH'", "'UNLINK'", 
		"'FROM'", "'EQUAL'", "'TO'", "'JUMP'", "'UPDATE'", "'TRACK'", "'ADD'", 
		"'SUBTRACT'", "'START'", "'AT'", "'\"'", "'+'", "'-'", "'.'", "'>'", "'<'", 
		"'=='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "THEN", "END", "RETURN", "REMEMBERING", "VISIT", "NO", "WHEN", 
		"NUMERIC", "LINKED", "LINK", "PATH", "UNLINK", "FROM", "EQUAL", "TO", 
		"JUMP", "UPDATE", "TRACK", "ADD", "SUBTRACT", "START", "AT", "DQ", "PLUS", 
		"MINUS", "DOT", "GT", "LT", "EQ", "NUMBER", "HEXNUMBER", "FLOAT", "LineComment", 
		"LABEL", "STRING", "IDENTIFIER", "WS",
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FateCodeParser._LITERAL_NAMES, FateCodeParser._SYMBOLIC_NAMES, []);

	// @Override
	// @NotNull
	public get vocabulary(): Vocabulary {
		return FateCodeParser.VOCABULARY;
	}
	// tslint:enable:no-trailing-whitespace

	// @Override
	public get grammarFileName(): string { return "FateCode.g4"; }

	// @Override
	public get ruleNames(): string[] { return FateCodeParser.ruleNames; }

	// @Override
	public get serializedATN(): string { return FateCodeParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FateCodeParser._ATN, this);
	}
	// @RuleVersion(0)
	public program(): ProgramContext {
		let _localctx: ProgramContext = new ProgramContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FateCodeParser.RULE_program);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 45;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (FateCodeParser.RETURN - 3)) | (1 << (FateCodeParser.VISIT - 3)) | (1 << (FateCodeParser.WHEN - 3)) | (1 << (FateCodeParser.LINK - 3)) | (1 << (FateCodeParser.UNLINK - 3)) | (1 << (FateCodeParser.JUMP - 3)) | (1 << (FateCodeParser.UPDATE - 3)) | (1 << (FateCodeParser.TRACK - 3)) | (1 << (FateCodeParser.NUMBER - 3)) | (1 << (FateCodeParser.HEXNUMBER - 3)) | (1 << (FateCodeParser.LineComment - 3)))) !== 0)) {
				{
				{
				this.state = 42;
				this.numberedStatement();
				}
				}
				this.state = 47;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 48;
			this.match(FateCodeParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numberedStatement(): NumberedStatementContext {
		let _localctx: NumberedStatementContext = new NumberedStatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FateCodeParser.RULE_numberedStatement);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 51;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.NUMBER || _la === FateCodeParser.HEXNUMBER) {
				{
				this.state = 50;
				this.lineNumber();
				}
			}

			this.state = 53;
			this.statement();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public statement(): StatementContext {
		let _localctx: StatementContext = new StatementContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FateCodeParser.RULE_statement);
		try {
			this.state = 65;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 55;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 56;
				this.trackNumericStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 57;
				this.trackLinkedStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 58;
				this.visitStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 59;
				this.jumpStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 60;
				this.whenNumericBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 61;
				this.whenLinkedBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 62;
				this.updateNumericStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 63;
				this.linkStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 64;
				this.returnStmt();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public comment(): CommentContext {
		let _localctx: CommentContext = new CommentContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FateCodeParser.RULE_comment);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 67;
			this.match(FateCodeParser.LineComment);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public identifier(): IdentifierContext {
		let _localctx: IdentifierContext = new IdentifierContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FateCodeParser.RULE_identifier);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 69;
			this.match(FateCodeParser.IDENTIFIER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public lineNumber(): LineNumberContext {
		let _localctx: LineNumberContext = new LineNumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FateCodeParser.RULE_lineNumber);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 71;
			_la = this._input.LA(1);
			if (!(_la === FateCodeParser.NUMBER || _la === FateCodeParser.HEXNUMBER)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public returnStmt(): ReturnStmtContext {
		let _localctx: ReturnStmtContext = new ReturnStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FateCodeParser.RULE_returnStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 73;
			this.match(FateCodeParser.RETURN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public number(): NumberContext {
		let _localctx: NumberContext = new NumberContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FateCodeParser.RULE_number);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 76;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.PLUS || _la === FateCodeParser.MINUS) {
				{
				this.state = 75;
				_la = this._input.LA(1);
				if (!(_la === FateCodeParser.PLUS || _la === FateCodeParser.MINUS)) {
				this._errHandler.recoverInline(this);
				} else {
					if (this._input.LA(1) === Token.EOF) {
						this.matchedEOF = true;
					}

					this._errHandler.reportMatch(this);
					this.consume();
				}
				}
			}

			this.state = 78;
			_la = this._input.LA(1);
			if (!(_la === FateCodeParser.NUMBER || _la === FateCodeParser.FLOAT)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public string(): StringContext {
		let _localctx: StringContext = new StringContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FateCodeParser.RULE_string);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 80;
			this.match(FateCodeParser.STRING);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public visitStmt(): VisitStmtContext {
		let _localctx: VisitStmtContext = new VisitStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 18, FateCodeParser.RULE_visitStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 82;
			this.match(FateCodeParser.VISIT);
			this.state = 83;
			this.anchorExpr();
			this.state = 86;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.REMEMBERING) {
				{
				this.state = 84;
				this.match(FateCodeParser.REMEMBERING);
				this.state = 85;
				this.anchorExpr();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public jumpStmt(): JumpStmtContext {
		let _localctx: JumpStmtContext = new JumpStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FateCodeParser.RULE_jumpStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 88;
			this.match(FateCodeParser.JUMP);
			this.state = 89;
			this.anchorExpr();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public anchorExpr(): AnchorExprContext {
		let _localctx: AnchorExprContext = new AnchorExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FateCodeParser.RULE_anchorExpr);
		try {
			this.state = 93;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FateCodeParser.HEXNUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 91;
				this.addressExpr();
				}
				break;
			case FateCodeParser.LABEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 92;
				this.labelExpr();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public addressExpr(): AddressExprContext {
		let _localctx: AddressExprContext = new AddressExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FateCodeParser.RULE_addressExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 95;
			this.match(FateCodeParser.HEXNUMBER);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public labelExpr(): LabelExprContext {
		let _localctx: LabelExprContext = new LabelExprContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FateCodeParser.RULE_labelExpr);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 97;
			this.match(FateCodeParser.LABEL);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenNumericBlock(): WhenNumericBlockContext {
		let _localctx: WhenNumericBlockContext = new WhenNumericBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FateCodeParser.RULE_whenNumericBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 99;
			this.match(FateCodeParser.WHEN);
			this.state = 100;
			this.match(FateCodeParser.NUMERIC);
			this.state = 101;
			this.identifier();
			this.state = 102;
			this.numericComparisonOperator();
			this.state = 103;
			this.number();
			this.state = 104;
			this.match(FateCodeParser.THEN);
			this.state = 106;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 105;
				this.statement();
				}
				}
				this.state = 108;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (FateCodeParser.RETURN - 3)) | (1 << (FateCodeParser.VISIT - 3)) | (1 << (FateCodeParser.WHEN - 3)) | (1 << (FateCodeParser.LINK - 3)) | (1 << (FateCodeParser.UNLINK - 3)) | (1 << (FateCodeParser.JUMP - 3)) | (1 << (FateCodeParser.UPDATE - 3)) | (1 << (FateCodeParser.TRACK - 3)) | (1 << (FateCodeParser.LineComment - 3)))) !== 0));
			this.state = 110;
			this.match(FateCodeParser.END);
			this.state = 111;
			this.match(FateCodeParser.WHEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public numericComparisonOperator(): NumericComparisonOperatorContext {
		let _localctx: NumericComparisonOperatorContext = new NumericComparisonOperatorContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FateCodeParser.RULE_numericComparisonOperator);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 113;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FateCodeParser.GT) | (1 << FateCodeParser.LT) | (1 << FateCodeParser.EQ))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public whenLinkedBlock(): WhenLinkedBlockContext {
		let _localctx: WhenLinkedBlockContext = new WhenLinkedBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FateCodeParser.RULE_whenLinkedBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 115;
			this.match(FateCodeParser.WHEN);
			this.state = 117;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.NO) {
				{
				this.state = 116;
				this.match(FateCodeParser.NO);
				}
			}

			this.state = 119;
			this.identifier();
			this.state = 120;
			_la = this._input.LA(1);
			if (!(_la === FateCodeParser.LINK || _la === FateCodeParser.PATH)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 121;
			this.match(FateCodeParser.FROM);
			this.state = 122;
			this.string();
			this.state = 123;
			this.match(FateCodeParser.TO);
			this.state = 124;
			this.string();
			this.state = 125;
			this.match(FateCodeParser.THEN);
			this.state = 127;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 126;
				this.statement();
				}
				}
				this.state = 129;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (((((_la - 3)) & ~0x1F) === 0 && ((1 << (_la - 3)) & ((1 << (FateCodeParser.RETURN - 3)) | (1 << (FateCodeParser.VISIT - 3)) | (1 << (FateCodeParser.WHEN - 3)) | (1 << (FateCodeParser.LINK - 3)) | (1 << (FateCodeParser.UNLINK - 3)) | (1 << (FateCodeParser.JUMP - 3)) | (1 << (FateCodeParser.UPDATE - 3)) | (1 << (FateCodeParser.TRACK - 3)) | (1 << (FateCodeParser.LineComment - 3)))) !== 0));
			this.state = 131;
			this.match(FateCodeParser.END);
			this.state = 132;
			this.match(FateCodeParser.WHEN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public linkStmt(): LinkStmtContext {
		let _localctx: LinkStmtContext = new LinkStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FateCodeParser.RULE_linkStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 134;
			_la = this._input.LA(1);
			if (!(_la === FateCodeParser.LINK || _la === FateCodeParser.UNLINK)) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 135;
			this.identifier();
			this.state = 136;
			this.match(FateCodeParser.FROM);
			this.state = 137;
			this.string();
			this.state = 138;
			this.match(FateCodeParser.TO);
			this.state = 139;
			this.string();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trackNumericStmt(): TrackNumericStmtContext {
		let _localctx: TrackNumericStmtContext = new TrackNumericStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FateCodeParser.RULE_trackNumericStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 141;
			this.match(FateCodeParser.TRACK);
			this.state = 142;
			this.match(FateCodeParser.NUMERIC);
			this.state = 143;
			this.identifier();
			this.state = 147;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.START) {
				{
				this.state = 144;
				this.match(FateCodeParser.START);
				this.state = 145;
				this.match(FateCodeParser.AT);
				this.state = 146;
				this.number();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public trackLinkedStmt(): TrackLinkedStmtContext {
		let _localctx: TrackLinkedStmtContext = new TrackLinkedStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FateCodeParser.RULE_trackLinkedStmt);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 149;
			this.match(FateCodeParser.TRACK);
			this.state = 150;
			this.match(FateCodeParser.LINKED);
			this.state = 151;
			this.identifier();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	// @RuleVersion(0)
	public updateNumericStmt(): UpdateNumericStmtContext {
		let _localctx: UpdateNumericStmtContext = new UpdateNumericStmtContext(this._ctx, this.state);
		this.enterRule(_localctx, 40, FateCodeParser.RULE_updateNumericStmt);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 153;
			this.match(FateCodeParser.UPDATE);
			this.state = 154;
			this.match(FateCodeParser.NUMERIC);
			this.state = 155;
			this.identifier();
			this.state = 156;
			_la = this._input.LA(1);
			if (!((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FateCodeParser.TO) | (1 << FateCodeParser.ADD) | (1 << FateCodeParser.SUBTRACT))) !== 0))) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			this.state = 157;
			this.number();
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public static readonly _serializedATN: string =
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\'\xA2\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x03\x02\x07\x02." +
		"\n\x02\f\x02\x0E\x021\v\x02\x03\x02\x03\x02\x03\x03\x05\x036\n\x03\x03" +
		"\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03" +
		"\x04\x03\x04\x03\x04\x05\x04D\n\x04\x03\x05\x03\x05\x03\x06\x03\x06\x03" +
		"\x07\x03\x07\x03\b\x03\b\x03\t\x05\tO\n\t\x03\t\x03\t\x03\n\x03\n\x03" +
		"\v\x03\v\x03\v\x03\v\x05\vY\n\v\x03\f\x03\f\x03\f\x03\r\x03\r\x05\r`\n" +
		"\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10\x03\x10\x03\x10\x03\x10\x03" +
		"\x10\x03\x10\x03\x10\x06\x10m\n\x10\r\x10\x0E\x10n\x03\x10\x03\x10\x03" +
		"\x10\x03\x11\x03\x11\x03\x12\x03\x12\x05\x12x\n\x12\x03\x12\x03\x12\x03" +
		"\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x06\x12\x82\n\x12\r\x12\x0E" +
		"\x12\x83\x03\x12\x03\x12\x03\x12\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13" +
		"\x03\x13\x03\x13\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x03\x14\x05\x14" +
		"\x96\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x03\x16\x03\x16\x03\x16\x03" +
		"\x16\x03\x16\x03\x16\x03\x16\x02\x02\x02\x17\x02\x02\x04\x02\x06\x02\b" +
		"\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02" +
		"\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02*\x02\x02\t\x03\x02 !\x03\x02" +
		"\x1A\x1B\x04\x02  \"\"\x03\x02\x1D\x1F\x03\x02\f\r\x04\x02\f\f\x0E\x0E" +
		"\x04\x02\x11\x11\x15\x16\x02\x9E\x02/\x03\x02\x02\x02\x045\x03\x02\x02" +
		"\x02\x06C\x03\x02\x02\x02\bE\x03\x02\x02\x02\nG\x03\x02\x02\x02\fI\x03" +
		"\x02\x02\x02\x0EK\x03\x02\x02\x02\x10N\x03\x02\x02\x02\x12R\x03\x02\x02" +
		"\x02\x14T\x03\x02\x02\x02\x16Z\x03\x02\x02\x02\x18_\x03\x02\x02\x02\x1A" +
		"a\x03\x02\x02\x02\x1Cc\x03\x02\x02\x02\x1Ee\x03\x02\x02\x02 s\x03\x02" +
		"\x02\x02\"u\x03\x02\x02\x02$\x88\x03\x02\x02\x02&\x8F\x03\x02\x02\x02" +
		"(\x97\x03\x02\x02\x02*\x9B\x03\x02\x02\x02,.\x05\x04\x03\x02-,\x03\x02" +
		"\x02\x02.1\x03\x02\x02\x02/-\x03\x02\x02\x02/0\x03\x02\x02\x0202\x03\x02" +
		"\x02\x021/\x03\x02\x02\x0223\x07\x02\x02\x033\x03\x03\x02\x02\x0246\x05" +
		"\f\x07\x0254\x03\x02\x02\x0256\x03\x02\x02\x0267\x03\x02\x02\x0278\x05" +
		"\x06\x04\x028\x05\x03\x02\x02\x029D\x05\b\x05\x02:D\x05&\x14\x02;D\x05" +
		"(\x15\x02<D\x05\x14\v\x02=D\x05\x16\f\x02>D\x05\x1E\x10\x02?D\x05\"\x12" +
		"\x02@D\x05*\x16\x02AD\x05$\x13\x02BD\x05\x0E\b\x02C9\x03\x02\x02\x02C" +
		":\x03\x02\x02\x02C;\x03\x02\x02\x02C<\x03\x02\x02\x02C=\x03\x02\x02\x02" +
		"C>\x03\x02\x02\x02C?\x03\x02\x02\x02C@\x03\x02\x02\x02CA\x03\x02\x02\x02" +
		"CB\x03\x02\x02\x02D\x07\x03\x02\x02\x02EF\x07#\x02\x02F\t\x03\x02\x02" +
		"\x02GH\x07&\x02\x02H\v\x03\x02\x02\x02IJ\t\x02\x02\x02J\r\x03\x02\x02" +
		"\x02KL\x07\x05\x02\x02L\x0F\x03\x02\x02\x02MO\t\x03\x02\x02NM\x03\x02" +
		"\x02\x02NO\x03\x02\x02\x02OP\x03\x02\x02\x02PQ\t\x04\x02\x02Q\x11\x03" +
		"\x02\x02\x02RS\x07%\x02\x02S\x13\x03\x02\x02\x02TU\x07\x07\x02\x02UX\x05" +
		"\x18\r\x02VW\x07\x06\x02\x02WY\x05\x18\r\x02XV\x03\x02\x02\x02XY\x03\x02" +
		"\x02\x02Y\x15\x03\x02\x02\x02Z[\x07\x12\x02\x02[\\\x05\x18\r\x02\\\x17" +
		"\x03\x02\x02\x02]`\x05\x1A\x0E\x02^`\x05\x1C\x0F\x02_]\x03\x02\x02\x02" +
		"_^\x03\x02\x02\x02`\x19\x03\x02\x02\x02ab\x07!\x02\x02b\x1B\x03\x02\x02" +
		"\x02cd\x07$\x02\x02d\x1D\x03\x02\x02\x02ef\x07\t\x02\x02fg\x07\n\x02\x02" +
		"gh\x05\n\x06\x02hi\x05 \x11\x02ij\x05\x10\t\x02jl\x07\x03\x02\x02km\x05" +
		"\x06\x04\x02lk\x03\x02\x02\x02mn\x03\x02\x02\x02nl\x03\x02\x02\x02no\x03" +
		"\x02\x02\x02op\x03\x02\x02\x02pq\x07\x04\x02\x02qr\x07\t\x02\x02r\x1F" +
		"\x03\x02\x02\x02st\t\x05\x02\x02t!\x03\x02\x02\x02uw\x07\t\x02\x02vx\x07" +
		"\b\x02\x02wv\x03\x02\x02\x02wx\x03\x02\x02\x02xy\x03\x02\x02\x02yz\x05" +
		"\n\x06\x02z{\t\x06\x02\x02{|\x07\x0F\x02\x02|}\x05\x12\n\x02}~\x07\x11" +
		"\x02\x02~\x7F\x05\x12\n\x02\x7F\x81\x07\x03\x02\x02\x80\x82\x05\x06\x04" +
		"\x02\x81\x80\x03\x02\x02\x02\x82\x83\x03\x02\x02\x02\x83\x81\x03\x02\x02" +
		"\x02\x83\x84\x03\x02\x02\x02\x84\x85\x03\x02\x02\x02\x85\x86\x07\x04\x02" +
		"\x02\x86\x87\x07\t\x02\x02\x87#\x03\x02\x02\x02\x88\x89\t\x07\x02\x02" +
		"\x89\x8A\x05\n\x06\x02\x8A\x8B\x07\x0F\x02\x02\x8B\x8C\x05\x12\n\x02\x8C" +
		"\x8D\x07\x11\x02\x02\x8D\x8E\x05\x12\n\x02\x8E%\x03\x02\x02\x02\x8F\x90" +
		"\x07\x14\x02\x02\x90\x91\x07\n\x02\x02\x91\x95\x05\n\x06\x02\x92\x93\x07" +
		"\x17\x02\x02\x93\x94\x07\x18\x02\x02\x94\x96\x05\x10\t\x02\x95\x92\x03" +
		"\x02\x02\x02\x95\x96\x03\x02\x02\x02\x96\'\x03\x02\x02\x02\x97\x98\x07" +
		"\x14\x02\x02\x98\x99\x07\v\x02\x02\x99\x9A\x05\n\x06\x02\x9A)\x03\x02" +
		"\x02\x02\x9B\x9C\x07\x13\x02\x02\x9C\x9D\x07\n\x02\x02\x9D\x9E\x05\n\x06" +
		"\x02\x9E\x9F\t\b\x02\x02\x9F\xA0\x05\x10\t\x02\xA0+\x03\x02\x02\x02\f" +
		"/5CNX_nw\x83\x95";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FateCodeParser.__ATN) {
			FateCodeParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FateCodeParser._serializedATN));
		}

		return FateCodeParser.__ATN;
	}

}

export class ProgramContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FateCodeParser.EOF, 0); }
	public numberedStatement(): NumberedStatementContext[];
	public numberedStatement(i: number): NumberedStatementContext;
	public numberedStatement(i?: number): NumberedStatementContext | NumberedStatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(NumberedStatementContext);
		} else {
			return this.getRuleContext(i, NumberedStatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_program; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterProgram) {
			listener.enterProgram(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitProgram) {
			listener.exitProgram(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitProgram) {
			return visitor.visitProgram(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberedStatementContext extends ParserRuleContext {
	public statement(): StatementContext {
		return this.getRuleContext(0, StatementContext);
	}
	public lineNumber(): LineNumberContext | undefined {
		return this.tryGetRuleContext(0, LineNumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_numberedStatement; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterNumberedStatement) {
			listener.enterNumberedStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitNumberedStatement) {
			listener.exitNumberedStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitNumberedStatement) {
			return visitor.visitNumberedStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StatementContext extends ParserRuleContext {
	public comment(): CommentContext | undefined {
		return this.tryGetRuleContext(0, CommentContext);
	}
	public trackNumericStmt(): TrackNumericStmtContext | undefined {
		return this.tryGetRuleContext(0, TrackNumericStmtContext);
	}
	public trackLinkedStmt(): TrackLinkedStmtContext | undefined {
		return this.tryGetRuleContext(0, TrackLinkedStmtContext);
	}
	public visitStmt(): VisitStmtContext | undefined {
		return this.tryGetRuleContext(0, VisitStmtContext);
	}
	public jumpStmt(): JumpStmtContext | undefined {
		return this.tryGetRuleContext(0, JumpStmtContext);
	}
	public whenNumericBlock(): WhenNumericBlockContext | undefined {
		return this.tryGetRuleContext(0, WhenNumericBlockContext);
	}
	public whenLinkedBlock(): WhenLinkedBlockContext | undefined {
		return this.tryGetRuleContext(0, WhenLinkedBlockContext);
	}
	public updateNumericStmt(): UpdateNumericStmtContext | undefined {
		return this.tryGetRuleContext(0, UpdateNumericStmtContext);
	}
	public linkStmt(): LinkStmtContext | undefined {
		return this.tryGetRuleContext(0, LinkStmtContext);
	}
	public returnStmt(): ReturnStmtContext | undefined {
		return this.tryGetRuleContext(0, ReturnStmtContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_statement; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterStatement) {
			listener.enterStatement(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitStatement) {
			listener.exitStatement(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitStatement) {
			return visitor.visitStatement(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class CommentContext extends ParserRuleContext {
	public LineComment(): TerminalNode { return this.getToken(FateCodeParser.LineComment, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_comment; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterComment) {
			listener.enterComment(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitComment) {
			listener.exitComment(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitComment) {
			return visitor.visitComment(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class IdentifierContext extends ParserRuleContext {
	public IDENTIFIER(): TerminalNode { return this.getToken(FateCodeParser.IDENTIFIER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_identifier; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterIdentifier) {
			listener.enterIdentifier(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitIdentifier) {
			listener.exitIdentifier(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitIdentifier) {
			return visitor.visitIdentifier(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LineNumberContext extends ParserRuleContext {
	public HEXNUMBER(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.HEXNUMBER, 0); }
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.NUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_lineNumber; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterLineNumber) {
			listener.enterLineNumber(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitLineNumber) {
			listener.exitLineNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitLineNumber) {
			return visitor.visitLineNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ReturnStmtContext extends ParserRuleContext {
	public RETURN(): TerminalNode { return this.getToken(FateCodeParser.RETURN, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_returnStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterReturnStmt) {
			listener.enterReturnStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitReturnStmt) {
			listener.exitReturnStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitReturnStmt) {
			return visitor.visitReturnStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumberContext extends ParserRuleContext {
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.NUMBER, 0); }
	public FLOAT(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.FLOAT, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.PLUS, 0); }
	public MINUS(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.MINUS, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_number; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterNumber) {
			listener.enterNumber(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitNumber) {
			listener.exitNumber(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitNumber) {
			return visitor.visitNumber(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class StringContext extends ParserRuleContext {
	public STRING(): TerminalNode { return this.getToken(FateCodeParser.STRING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_string; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterString) {
			listener.enterString(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitString) {
			listener.exitString(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitString) {
			return visitor.visitString(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class VisitStmtContext extends ParserRuleContext {
	public VISIT(): TerminalNode { return this.getToken(FateCodeParser.VISIT, 0); }
	public anchorExpr(): AnchorExprContext[];
	public anchorExpr(i: number): AnchorExprContext;
	public anchorExpr(i?: number): AnchorExprContext | AnchorExprContext[] {
		if (i === undefined) {
			return this.getRuleContexts(AnchorExprContext);
		} else {
			return this.getRuleContext(i, AnchorExprContext);
		}
	}
	public REMEMBERING(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.REMEMBERING, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_visitStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterVisitStmt) {
			listener.enterVisitStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitVisitStmt) {
			listener.exitVisitStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitVisitStmt) {
			return visitor.visitVisitStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class JumpStmtContext extends ParserRuleContext {
	public JUMP(): TerminalNode { return this.getToken(FateCodeParser.JUMP, 0); }
	public anchorExpr(): AnchorExprContext {
		return this.getRuleContext(0, AnchorExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_jumpStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterJumpStmt) {
			listener.enterJumpStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitJumpStmt) {
			listener.exitJumpStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitJumpStmt) {
			return visitor.visitJumpStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AnchorExprContext extends ParserRuleContext {
	public addressExpr(): AddressExprContext | undefined {
		return this.tryGetRuleContext(0, AddressExprContext);
	}
	public labelExpr(): LabelExprContext | undefined {
		return this.tryGetRuleContext(0, LabelExprContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_anchorExpr; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterAnchorExpr) {
			listener.enterAnchorExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitAnchorExpr) {
			listener.exitAnchorExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitAnchorExpr) {
			return visitor.visitAnchorExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class AddressExprContext extends ParserRuleContext {
	public HEXNUMBER(): TerminalNode { return this.getToken(FateCodeParser.HEXNUMBER, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_addressExpr; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterAddressExpr) {
			listener.enterAddressExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitAddressExpr) {
			listener.exitAddressExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitAddressExpr) {
			return visitor.visitAddressExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LabelExprContext extends ParserRuleContext {
	public LABEL(): TerminalNode { return this.getToken(FateCodeParser.LABEL, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_labelExpr; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterLabelExpr) {
			listener.enterLabelExpr(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitLabelExpr) {
			listener.exitLabelExpr(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitLabelExpr) {
			return visitor.visitLabelExpr(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenNumericBlockContext extends ParserRuleContext {
	public WHEN(): TerminalNode[];
	public WHEN(i: number): TerminalNode;
	public WHEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FateCodeParser.WHEN);
		} else {
			return this.getToken(FateCodeParser.WHEN, i);
		}
	}
	public NUMERIC(): TerminalNode { return this.getToken(FateCodeParser.NUMERIC, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public numericComparisonOperator(): NumericComparisonOperatorContext {
		return this.getRuleContext(0, NumericComparisonOperatorContext);
	}
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public THEN(): TerminalNode { return this.getToken(FateCodeParser.THEN, 0); }
	public END(): TerminalNode { return this.getToken(FateCodeParser.END, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_whenNumericBlock; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterWhenNumericBlock) {
			listener.enterWhenNumericBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitWhenNumericBlock) {
			listener.exitWhenNumericBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitWhenNumericBlock) {
			return visitor.visitWhenNumericBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class NumericComparisonOperatorContext extends ParserRuleContext {
	public GT(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.GT, 0); }
	public LT(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.LT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.EQ, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_numericComparisonOperator; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterNumericComparisonOperator) {
			listener.enterNumericComparisonOperator(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitNumericComparisonOperator) {
			listener.exitNumericComparisonOperator(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitNumericComparisonOperator) {
			return visitor.visitNumericComparisonOperator(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class WhenLinkedBlockContext extends ParserRuleContext {
	public WHEN(): TerminalNode[];
	public WHEN(i: number): TerminalNode;
	public WHEN(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FateCodeParser.WHEN);
		} else {
			return this.getToken(FateCodeParser.WHEN, i);
		}
	}
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode { return this.getToken(FateCodeParser.FROM, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(FateCodeParser.TO, 0); }
	public THEN(): TerminalNode { return this.getToken(FateCodeParser.THEN, 0); }
	public END(): TerminalNode { return this.getToken(FateCodeParser.END, 0); }
	public LINK(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.LINK, 0); }
	public PATH(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.PATH, 0); }
	public NO(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.NO, 0); }
	public statement(): StatementContext[];
	public statement(i: number): StatementContext;
	public statement(i?: number): StatementContext | StatementContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StatementContext);
		} else {
			return this.getRuleContext(i, StatementContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_whenLinkedBlock; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterWhenLinkedBlock) {
			listener.enterWhenLinkedBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitWhenLinkedBlock) {
			listener.exitWhenLinkedBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitWhenLinkedBlock) {
			return visitor.visitWhenLinkedBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class LinkStmtContext extends ParserRuleContext {
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public FROM(): TerminalNode { return this.getToken(FateCodeParser.FROM, 0); }
	public string(): StringContext[];
	public string(i: number): StringContext;
	public string(i?: number): StringContext | StringContext[] {
		if (i === undefined) {
			return this.getRuleContexts(StringContext);
		} else {
			return this.getRuleContext(i, StringContext);
		}
	}
	public TO(): TerminalNode { return this.getToken(FateCodeParser.TO, 0); }
	public LINK(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.LINK, 0); }
	public UNLINK(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.UNLINK, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_linkStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterLinkStmt) {
			listener.enterLinkStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitLinkStmt) {
			listener.exitLinkStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitLinkStmt) {
			return visitor.visitLinkStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrackNumericStmtContext extends ParserRuleContext {
	public TRACK(): TerminalNode { return this.getToken(FateCodeParser.TRACK, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(FateCodeParser.NUMERIC, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public START(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.START, 0); }
	public AT(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.AT, 0); }
	public number(): NumberContext | undefined {
		return this.tryGetRuleContext(0, NumberContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_trackNumericStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterTrackNumericStmt) {
			listener.enterTrackNumericStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitTrackNumericStmt) {
			listener.exitTrackNumericStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitTrackNumericStmt) {
			return visitor.visitTrackNumericStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class TrackLinkedStmtContext extends ParserRuleContext {
	public TRACK(): TerminalNode { return this.getToken(FateCodeParser.TRACK, 0); }
	public LINKED(): TerminalNode { return this.getToken(FateCodeParser.LINKED, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_trackLinkedStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterTrackLinkedStmt) {
			listener.enterTrackLinkedStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitTrackLinkedStmt) {
			listener.exitTrackLinkedStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitTrackLinkedStmt) {
			return visitor.visitTrackLinkedStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class UpdateNumericStmtContext extends ParserRuleContext {
	public UPDATE(): TerminalNode { return this.getToken(FateCodeParser.UPDATE, 0); }
	public NUMERIC(): TerminalNode { return this.getToken(FateCodeParser.NUMERIC, 0); }
	public identifier(): IdentifierContext {
		return this.getRuleContext(0, IdentifierContext);
	}
	public number(): NumberContext {
		return this.getRuleContext(0, NumberContext);
	}
	public ADD(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.ADD, 0); }
	public SUBTRACT(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.SUBTRACT, 0); }
	public TO(): TerminalNode | undefined { return this.tryGetToken(FateCodeParser.TO, 0); }
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_updateNumericStmt; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterUpdateNumericStmt) {
			listener.enterUpdateNumericStmt(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitUpdateNumericStmt) {
			listener.exitUpdateNumericStmt(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitUpdateNumericStmt) {
			return visitor.visitUpdateNumericStmt(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


