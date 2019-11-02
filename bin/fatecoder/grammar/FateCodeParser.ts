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
	public static readonly DECIDE = 23;
	public static readonly BETWEEN = 24;
	public static readonly CHOOSE = 25;
	public static readonly DQ = 26;
	public static readonly PLUS = 27;
	public static readonly MINUS = 28;
	public static readonly DOT = 29;
	public static readonly GT = 30;
	public static readonly LT = 31;
	public static readonly EQ = 32;
	public static readonly NUMBER = 33;
	public static readonly HEXNUMBER = 34;
	public static readonly FLOAT = 35;
	public static readonly LineComment = 36;
	public static readonly LABEL = 37;
	public static readonly STRING = 38;
	public static readonly IDENTIFIER = 39;
	public static readonly WS = 40;
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
	public static readonly RULE_decideBlock = 21;
	public static readonly RULE_chooseBlock = 22;
	// tslint:disable:no-trailing-whitespace
	public static readonly ruleNames: string[] = [
		"program", "numberedStatement", "statement", "comment", "identifier", 
		"lineNumber", "returnStmt", "number", "string", "visitStmt", "jumpStmt", 
		"anchorExpr", "addressExpr", "labelExpr", "whenNumericBlock", "numericComparisonOperator", 
		"whenLinkedBlock", "linkStmt", "trackNumericStmt", "trackLinkedStmt", 
		"updateNumericStmt", "decideBlock", "chooseBlock",
	];

	private static readonly _LITERAL_NAMES: Array<string | undefined> = [
		undefined, "'THEN'", "'END'", "'RETURN'", "'REMEMBERING'", "'VISIT'", 
		"'NO'", "'WHEN'", "'NUMERIC'", "'LINKED'", "'LINK'", "'PATH'", "'UNLINK'", 
		"'FROM'", "'EQUAL'", "'TO'", "'JUMP'", "'UPDATE'", "'TRACK'", "'ADD'", 
		"'SUBTRACT'", "'START'", "'AT'", "'DECIDE'", "'BETWEEN'", "'CHOOSE'", 
		"'\"'", "'+'", "'-'", "'.'", "'>'", "'<'", "'=='",
	];
	private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
		undefined, "THEN", "END", "RETURN", "REMEMBERING", "VISIT", "NO", "WHEN", 
		"NUMERIC", "LINKED", "LINK", "PATH", "UNLINK", "FROM", "EQUAL", "TO", 
		"JUMP", "UPDATE", "TRACK", "ADD", "SUBTRACT", "START", "AT", "DECIDE", 
		"BETWEEN", "CHOOSE", "DQ", "PLUS", "MINUS", "DOT", "GT", "LT", "EQ", "NUMBER", 
		"HEXNUMBER", "FLOAT", "LineComment", "LABEL", "STRING", "IDENTIFIER", 
		"WS",
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
			this.state = 49;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FateCodeParser.RETURN) | (1 << FateCodeParser.VISIT) | (1 << FateCodeParser.WHEN) | (1 << FateCodeParser.LINK) | (1 << FateCodeParser.UNLINK) | (1 << FateCodeParser.JUMP) | (1 << FateCodeParser.UPDATE) | (1 << FateCodeParser.TRACK) | (1 << FateCodeParser.DECIDE))) !== 0) || ((((_la - 33)) & ~0x1F) === 0 && ((1 << (_la - 33)) & ((1 << (FateCodeParser.NUMBER - 33)) | (1 << (FateCodeParser.HEXNUMBER - 33)) | (1 << (FateCodeParser.LineComment - 33)))) !== 0)) {
				{
				{
				this.state = 46;
				this.numberedStatement();
				}
				}
				this.state = 51;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			}
			this.state = 52;
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
			this.state = 55;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.NUMBER || _la === FateCodeParser.HEXNUMBER) {
				{
				this.state = 54;
				this.lineNumber();
				}
			}

			this.state = 57;
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
			this.state = 70;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input, 2, this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 59;
				this.comment();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 60;
				this.trackNumericStmt();
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 61;
				this.trackLinkedStmt();
				}
				break;

			case 4:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 62;
				this.visitStmt();
				}
				break;

			case 5:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 63;
				this.jumpStmt();
				}
				break;

			case 6:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 64;
				this.whenNumericBlock();
				}
				break;

			case 7:
				this.enterOuterAlt(_localctx, 7);
				{
				this.state = 65;
				this.whenLinkedBlock();
				}
				break;

			case 8:
				this.enterOuterAlt(_localctx, 8);
				{
				this.state = 66;
				this.updateNumericStmt();
				}
				break;

			case 9:
				this.enterOuterAlt(_localctx, 9);
				{
				this.state = 67;
				this.linkStmt();
				}
				break;

			case 10:
				this.enterOuterAlt(_localctx, 10);
				{
				this.state = 68;
				this.returnStmt();
				}
				break;

			case 11:
				this.enterOuterAlt(_localctx, 11);
				{
				this.state = 69;
				this.decideBlock();
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
			this.state = 72;
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
			this.state = 74;
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
			this.state = 76;
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
			this.state = 78;
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
			this.state = 81;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.PLUS || _la === FateCodeParser.MINUS) {
				{
				this.state = 80;
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

			this.state = 83;
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
			this.state = 85;
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
			this.state = 87;
			this.match(FateCodeParser.VISIT);
			this.state = 88;
			this.anchorExpr();
			this.state = 91;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.REMEMBERING) {
				{
				this.state = 89;
				this.match(FateCodeParser.REMEMBERING);
				this.state = 90;
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
			this.state = 93;
			this.match(FateCodeParser.JUMP);
			this.state = 94;
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
			this.state = 98;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FateCodeParser.HEXNUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 96;
				this.addressExpr();
				}
				break;
			case FateCodeParser.LABEL:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 97;
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
			this.state = 100;
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
			this.state = 102;
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
			this.state = 104;
			this.match(FateCodeParser.WHEN);
			this.state = 105;
			this.match(FateCodeParser.NUMERIC);
			this.state = 106;
			this.identifier();
			this.state = 107;
			this.numericComparisonOperator();
			this.state = 108;
			this.number();
			this.state = 109;
			this.match(FateCodeParser.THEN);
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 110;
				this.statement();
				}
				}
				this.state = 113;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FateCodeParser.RETURN) | (1 << FateCodeParser.VISIT) | (1 << FateCodeParser.WHEN) | (1 << FateCodeParser.LINK) | (1 << FateCodeParser.UNLINK) | (1 << FateCodeParser.JUMP) | (1 << FateCodeParser.UPDATE) | (1 << FateCodeParser.TRACK) | (1 << FateCodeParser.DECIDE))) !== 0) || _la === FateCodeParser.LineComment);
			this.state = 115;
			this.match(FateCodeParser.END);
			this.state = 116;
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
			this.state = 118;
			_la = this._input.LA(1);
			if (!(((((_la - 30)) & ~0x1F) === 0 && ((1 << (_la - 30)) & ((1 << (FateCodeParser.GT - 30)) | (1 << (FateCodeParser.LT - 30)) | (1 << (FateCodeParser.EQ - 30)))) !== 0))) {
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
			this.state = 120;
			this.match(FateCodeParser.WHEN);
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.NO) {
				{
				this.state = 121;
				this.match(FateCodeParser.NO);
				}
			}

			this.state = 124;
			this.identifier();
			this.state = 125;
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
			this.state = 126;
			this.match(FateCodeParser.FROM);
			this.state = 127;
			this.string();
			this.state = 128;
			this.match(FateCodeParser.TO);
			this.state = 129;
			this.string();
			this.state = 130;
			this.match(FateCodeParser.THEN);
			this.state = 132;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 131;
				this.statement();
				}
				}
				this.state = 134;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FateCodeParser.RETURN) | (1 << FateCodeParser.VISIT) | (1 << FateCodeParser.WHEN) | (1 << FateCodeParser.LINK) | (1 << FateCodeParser.UNLINK) | (1 << FateCodeParser.JUMP) | (1 << FateCodeParser.UPDATE) | (1 << FateCodeParser.TRACK) | (1 << FateCodeParser.DECIDE))) !== 0) || _la === FateCodeParser.LineComment);
			this.state = 136;
			this.match(FateCodeParser.END);
			this.state = 137;
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
			this.state = 139;
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
			this.state = 140;
			this.identifier();
			this.state = 141;
			this.match(FateCodeParser.FROM);
			this.state = 142;
			this.string();
			this.state = 143;
			this.match(FateCodeParser.TO);
			this.state = 144;
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
			this.state = 146;
			this.match(FateCodeParser.TRACK);
			this.state = 147;
			this.match(FateCodeParser.NUMERIC);
			this.state = 148;
			this.identifier();
			this.state = 152;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la === FateCodeParser.START) {
				{
				this.state = 149;
				this.match(FateCodeParser.START);
				this.state = 150;
				this.match(FateCodeParser.AT);
				this.state = 151;
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
			this.state = 154;
			this.match(FateCodeParser.TRACK);
			this.state = 155;
			this.match(FateCodeParser.LINKED);
			this.state = 156;
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
			this.state = 158;
			this.match(FateCodeParser.UPDATE);
			this.state = 159;
			this.match(FateCodeParser.NUMERIC);
			this.state = 160;
			this.identifier();
			this.state = 161;
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
			this.state = 162;
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
	// @RuleVersion(0)
	public decideBlock(): DecideBlockContext {
		let _localctx: DecideBlockContext = new DecideBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 42, FateCodeParser.RULE_decideBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 164;
			this.match(FateCodeParser.DECIDE);
			this.state = 165;
			this.match(FateCodeParser.BETWEEN);
			this.state = 167;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 166;
				this.chooseBlock();
				}
				}
				this.state = 169;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while (_la === FateCodeParser.CHOOSE);
			this.state = 171;
			this.match(FateCodeParser.END);
			this.state = 172;
			this.match(FateCodeParser.DECIDE);
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
	public chooseBlock(): ChooseBlockContext {
		let _localctx: ChooseBlockContext = new ChooseBlockContext(this._ctx, this.state);
		this.enterRule(_localctx, 44, FateCodeParser.RULE_chooseBlock);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 174;
			this.match(FateCodeParser.CHOOSE);
			this.state = 175;
			this.string();
			this.state = 177;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			do {
				{
				{
				this.state = 176;
				this.statement();
				}
				}
				this.state = 179;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
			} while ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FateCodeParser.RETURN) | (1 << FateCodeParser.VISIT) | (1 << FateCodeParser.WHEN) | (1 << FateCodeParser.LINK) | (1 << FateCodeParser.UNLINK) | (1 << FateCodeParser.JUMP) | (1 << FateCodeParser.UPDATE) | (1 << FateCodeParser.TRACK) | (1 << FateCodeParser.DECIDE))) !== 0) || _la === FateCodeParser.LineComment);
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
		"\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03*\xB8\x04\x02" +
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07" +
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04" +
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04" +
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17\x04" +
		"\x18\t\x18\x03\x02\x07\x022\n\x02\f\x02\x0E\x025\v\x02\x03\x02\x03\x02" +
		"\x03\x03\x05\x03:\n\x03\x03\x03\x03\x03\x03\x04\x03\x04\x03\x04\x03\x04" +
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04I\n\x04" +
		"\x03\x05\x03\x05\x03\x06\x03\x06\x03\x07\x03\x07\x03\b\x03\b\x03\t\x05" +
		"\tT\n\t\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x05\v^\n\v\x03" +
		"\f\x03\f\x03\f\x03\r\x03\r\x05\re\n\r\x03\x0E\x03\x0E\x03\x0F\x03\x0F" +
		"\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x03\x10\x06\x10r\n\x10" +
		"\r\x10\x0E\x10s\x03\x10\x03\x10\x03\x10\x03\x11\x03\x11\x03\x12\x03\x12" +
		"\x05\x12}\n\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12" +
		"\x03\x12\x06\x12\x87\n\x12\r\x12\x0E\x12\x88\x03\x12\x03\x12\x03\x12\x03" +
		"\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x13\x03\x14\x03\x14\x03" +
		"\x14\x03\x14\x03\x14\x03\x14\x05\x14\x9B\n\x14\x03\x15\x03\x15\x03\x15" +
		"\x03\x15\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x16\x03\x17\x03\x17" +
		"\x03\x17\x06\x17\xAA\n\x17\r\x17\x0E\x17\xAB\x03\x17\x03\x17\x03\x17\x03" +
		"\x18\x03\x18\x03\x18\x06\x18\xB4\n\x18\r\x18\x0E\x18\xB5\x03\x18\x02\x02" +
		"\x02\x19\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12" +
		"\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&" +
		"\x02(\x02*\x02,\x02.\x02\x02\t\x03\x02#$\x03\x02\x1D\x1E\x04\x02##%%\x03" +
		"\x02 \"\x03\x02\f\r\x04\x02\f\f\x0E\x0E\x04\x02\x11\x11\x15\x16\x02\xB5" +
		"\x023\x03\x02\x02\x02\x049\x03\x02\x02\x02\x06H\x03\x02\x02\x02\bJ\x03" +
		"\x02\x02\x02\nL\x03\x02\x02\x02\fN\x03\x02\x02\x02\x0EP\x03\x02\x02\x02" +
		"\x10S\x03\x02\x02\x02\x12W\x03\x02\x02\x02\x14Y\x03\x02\x02\x02\x16_\x03" +
		"\x02\x02\x02\x18d\x03\x02\x02\x02\x1Af\x03\x02\x02\x02\x1Ch\x03\x02\x02" +
		"\x02\x1Ej\x03\x02\x02\x02 x\x03\x02\x02\x02\"z\x03\x02\x02\x02$\x8D\x03" +
		"\x02\x02\x02&\x94\x03\x02\x02\x02(\x9C\x03\x02\x02\x02*\xA0\x03\x02\x02" +
		"\x02,\xA6\x03\x02\x02\x02.\xB0\x03\x02\x02\x0202\x05\x04\x03\x0210\x03" +
		"\x02\x02\x0225\x03\x02\x02\x0231\x03\x02\x02\x0234\x03\x02\x02\x0246\x03" +
		"\x02\x02\x0253\x03\x02\x02\x0267\x07\x02\x02\x037\x03\x03\x02\x02\x02" +
		"8:\x05\f\x07\x0298\x03\x02\x02\x029:\x03\x02\x02\x02:;\x03\x02\x02\x02" +
		";<\x05\x06\x04\x02<\x05\x03\x02\x02\x02=I\x05\b\x05\x02>I\x05&\x14\x02" +
		"?I\x05(\x15\x02@I\x05\x14\v\x02AI\x05\x16\f\x02BI\x05\x1E\x10\x02CI\x05" +
		"\"\x12\x02DI\x05*\x16\x02EI\x05$\x13\x02FI\x05\x0E\b\x02GI\x05,\x17\x02" +
		"H=\x03\x02\x02\x02H>\x03\x02\x02\x02H?\x03\x02\x02\x02H@\x03\x02\x02\x02" +
		"HA\x03\x02\x02\x02HB\x03\x02\x02\x02HC\x03\x02\x02\x02HD\x03\x02\x02\x02" +
		"HE\x03\x02\x02\x02HF\x03\x02\x02\x02HG\x03\x02\x02\x02I\x07\x03\x02\x02" +
		"\x02JK\x07&\x02\x02K\t\x03\x02\x02\x02LM\x07)\x02\x02M\v\x03\x02\x02\x02" +
		"NO\t\x02\x02\x02O\r\x03\x02\x02\x02PQ\x07\x05\x02\x02Q\x0F\x03\x02\x02" +
		"\x02RT\t\x03\x02\x02SR\x03\x02\x02\x02ST\x03\x02\x02\x02TU\x03\x02\x02" +
		"\x02UV\t\x04\x02\x02V\x11\x03\x02\x02\x02WX\x07(\x02\x02X\x13\x03\x02" +
		"\x02\x02YZ\x07\x07\x02\x02Z]\x05\x18\r\x02[\\\x07\x06\x02\x02\\^\x05\x18" +
		"\r\x02][\x03\x02\x02\x02]^\x03\x02\x02\x02^\x15\x03\x02\x02\x02_`\x07" +
		"\x12\x02\x02`a\x05\x18\r\x02a\x17\x03\x02\x02\x02be\x05\x1A\x0E\x02ce" +
		"\x05\x1C\x0F\x02db\x03\x02\x02\x02dc\x03\x02\x02\x02e\x19\x03\x02\x02" +
		"\x02fg\x07$\x02\x02g\x1B\x03\x02\x02\x02hi\x07\'\x02\x02i\x1D\x03\x02" +
		"\x02\x02jk\x07\t\x02\x02kl\x07\n\x02\x02lm\x05\n\x06\x02mn\x05 \x11\x02" +
		"no\x05\x10\t\x02oq\x07\x03\x02\x02pr\x05\x06\x04\x02qp\x03\x02\x02\x02" +
		"rs\x03\x02\x02\x02sq\x03\x02\x02\x02st\x03\x02\x02\x02tu\x03\x02\x02\x02" +
		"uv\x07\x04\x02\x02vw\x07\t\x02\x02w\x1F\x03\x02\x02\x02xy\t\x05\x02\x02" +
		"y!\x03\x02\x02\x02z|\x07\t\x02\x02{}\x07\b\x02\x02|{\x03\x02\x02\x02|" +
		"}\x03\x02\x02\x02}~\x03\x02\x02\x02~\x7F\x05\n\x06\x02\x7F\x80\t\x06\x02" +
		"\x02\x80\x81\x07\x0F\x02\x02\x81\x82\x05\x12\n\x02\x82\x83\x07\x11\x02" +
		"\x02\x83\x84\x05\x12\n\x02\x84\x86\x07\x03\x02\x02\x85\x87\x05\x06\x04" +
		"\x02\x86\x85\x03\x02\x02\x02\x87\x88\x03\x02\x02\x02\x88\x86\x03\x02\x02" +
		"\x02\x88\x89\x03\x02\x02\x02\x89\x8A\x03\x02\x02\x02\x8A\x8B\x07\x04\x02" +
		"\x02\x8B\x8C\x07\t\x02\x02\x8C#\x03\x02\x02\x02\x8D\x8E\t\x07\x02\x02" +
		"\x8E\x8F\x05\n\x06\x02\x8F\x90\x07\x0F\x02\x02\x90\x91\x05\x12\n\x02\x91" +
		"\x92\x07\x11\x02\x02\x92\x93\x05\x12\n\x02\x93%\x03\x02\x02\x02\x94\x95" +
		"\x07\x14\x02\x02\x95\x96\x07\n\x02\x02\x96\x9A\x05\n\x06\x02\x97\x98\x07" +
		"\x17\x02\x02\x98\x99\x07\x18\x02\x02\x99\x9B\x05\x10\t\x02\x9A\x97\x03" +
		"\x02\x02\x02\x9A\x9B\x03\x02\x02\x02\x9B\'\x03\x02\x02\x02\x9C\x9D\x07" +
		"\x14\x02\x02\x9D\x9E\x07\v\x02\x02\x9E\x9F\x05\n\x06\x02\x9F)\x03\x02" +
		"\x02\x02\xA0\xA1\x07\x13\x02\x02\xA1\xA2\x07\n\x02\x02\xA2\xA3\x05\n\x06" +
		"\x02\xA3\xA4\t\b\x02\x02\xA4\xA5\x05\x10\t\x02\xA5+\x03\x02\x02\x02\xA6" +
		"\xA7\x07\x19\x02\x02\xA7\xA9\x07\x1A\x02\x02\xA8\xAA\x05.\x18\x02\xA9" +
		"\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02\x02\xAB\xA9\x03\x02\x02\x02\xAB" +
		"\xAC\x03\x02\x02\x02\xAC\xAD\x03\x02\x02\x02\xAD\xAE\x07\x04\x02\x02\xAE" +
		"\xAF\x07\x19\x02\x02\xAF-\x03\x02\x02\x02\xB0\xB1\x07\x1B\x02\x02\xB1" +
		"\xB3\x05\x12\n\x02\xB2\xB4\x05\x06\x04\x02\xB3\xB2\x03\x02\x02\x02\xB4" +
		"\xB5\x03\x02\x02\x02\xB5\xB3\x03\x02\x02\x02\xB5\xB6\x03\x02\x02\x02\xB6" +
		"/\x03\x02\x02\x02\x0E39HS]ds|\x88\x9A\xAB\xB5";
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
	public decideBlock(): DecideBlockContext | undefined {
		return this.tryGetRuleContext(0, DecideBlockContext);
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


export class DecideBlockContext extends ParserRuleContext {
	public DECIDE(): TerminalNode[];
	public DECIDE(i: number): TerminalNode;
	public DECIDE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FateCodeParser.DECIDE);
		} else {
			return this.getToken(FateCodeParser.DECIDE, i);
		}
	}
	public BETWEEN(): TerminalNode { return this.getToken(FateCodeParser.BETWEEN, 0); }
	public END(): TerminalNode { return this.getToken(FateCodeParser.END, 0); }
	public chooseBlock(): ChooseBlockContext[];
	public chooseBlock(i: number): ChooseBlockContext;
	public chooseBlock(i?: number): ChooseBlockContext | ChooseBlockContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ChooseBlockContext);
		} else {
			return this.getRuleContext(i, ChooseBlockContext);
		}
	}
	constructor(parent: ParserRuleContext | undefined, invokingState: number) {
		super(parent, invokingState);
	}
	// @Override
	public get ruleIndex(): number { return FateCodeParser.RULE_decideBlock; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterDecideBlock) {
			listener.enterDecideBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitDecideBlock) {
			listener.exitDecideBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitDecideBlock) {
			return visitor.visitDecideBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


export class ChooseBlockContext extends ParserRuleContext {
	public CHOOSE(): TerminalNode { return this.getToken(FateCodeParser.CHOOSE, 0); }
	public string(): StringContext {
		return this.getRuleContext(0, StringContext);
	}
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
	public get ruleIndex(): number { return FateCodeParser.RULE_chooseBlock; }
	// @Override
	public enterRule(listener: FateCodeListener): void {
		if (listener.enterChooseBlock) {
			listener.enterChooseBlock(this);
		}
	}
	// @Override
	public exitRule(listener: FateCodeListener): void {
		if (listener.exitChooseBlock) {
			listener.exitChooseBlock(this);
		}
	}
	// @Override
	public accept<Result>(visitor: FateCodeVisitor<Result>): Result {
		if (visitor.visitChooseBlock) {
			return visitor.visitChooseBlock(this);
		} else {
			return visitor.visitChildren(this);
		}
	}
}


