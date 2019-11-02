// Generated from grammar/FateCode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { ProgramContext } from "./FateCodeParser";
import { NumberedStatementContext } from "./FateCodeParser";
import { StatementContext } from "./FateCodeParser";
import { CommentContext } from "./FateCodeParser";
import { IdentifierContext } from "./FateCodeParser";
import { LineNumberContext } from "./FateCodeParser";
import { ReturnStmtContext } from "./FateCodeParser";
import { NumberContext } from "./FateCodeParser";
import { StringContext } from "./FateCodeParser";
import { VisitStmtContext } from "./FateCodeParser";
import { JumpStmtContext } from "./FateCodeParser";
import { AnchorExprContext } from "./FateCodeParser";
import { AddressExprContext } from "./FateCodeParser";
import { LabelExprContext } from "./FateCodeParser";
import { WhenNumericBlockContext } from "./FateCodeParser";
import { NumericComparisonOperatorContext } from "./FateCodeParser";
import { WhenLinkedBlockContext } from "./FateCodeParser";
import { LinkStmtContext } from "./FateCodeParser";
import { TrackNumericStmtContext } from "./FateCodeParser";
import { TrackLinkedStmtContext } from "./FateCodeParser";
import { UpdateNumericStmtContext } from "./FateCodeParser";
import { DecideBlockContext } from "./FateCodeParser";
import { ChooseBlockContext } from "./FateCodeParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `FateCodeParser`.
 */
export interface FateCodeListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `FateCodeParser.program`.
	 * @param ctx the parse tree
	 */
	enterProgram?: (ctx: ProgramContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.program`.
	 * @param ctx the parse tree
	 */
	exitProgram?: (ctx: ProgramContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.numberedStatement`.
	 * @param ctx the parse tree
	 */
	enterNumberedStatement?: (ctx: NumberedStatementContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.numberedStatement`.
	 * @param ctx the parse tree
	 */
	exitNumberedStatement?: (ctx: NumberedStatementContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.statement`.
	 * @param ctx the parse tree
	 */
	enterStatement?: (ctx: StatementContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.statement`.
	 * @param ctx the parse tree
	 */
	exitStatement?: (ctx: StatementContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.comment`.
	 * @param ctx the parse tree
	 */
	enterComment?: (ctx: CommentContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.comment`.
	 * @param ctx the parse tree
	 */
	exitComment?: (ctx: CommentContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.identifier`.
	 * @param ctx the parse tree
	 */
	enterIdentifier?: (ctx: IdentifierContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.identifier`.
	 * @param ctx the parse tree
	 */
	exitIdentifier?: (ctx: IdentifierContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.lineNumber`.
	 * @param ctx the parse tree
	 */
	enterLineNumber?: (ctx: LineNumberContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.lineNumber`.
	 * @param ctx the parse tree
	 */
	exitLineNumber?: (ctx: LineNumberContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	enterReturnStmt?: (ctx: ReturnStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.returnStmt`.
	 * @param ctx the parse tree
	 */
	exitReturnStmt?: (ctx: ReturnStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.number`.
	 * @param ctx the parse tree
	 */
	enterNumber?: (ctx: NumberContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.number`.
	 * @param ctx the parse tree
	 */
	exitNumber?: (ctx: NumberContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.string`.
	 * @param ctx the parse tree
	 */
	enterString?: (ctx: StringContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.string`.
	 * @param ctx the parse tree
	 */
	exitString?: (ctx: StringContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.visitStmt`.
	 * @param ctx the parse tree
	 */
	enterVisitStmt?: (ctx: VisitStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.visitStmt`.
	 * @param ctx the parse tree
	 */
	exitVisitStmt?: (ctx: VisitStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.jumpStmt`.
	 * @param ctx the parse tree
	 */
	enterJumpStmt?: (ctx: JumpStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.jumpStmt`.
	 * @param ctx the parse tree
	 */
	exitJumpStmt?: (ctx: JumpStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.anchorExpr`.
	 * @param ctx the parse tree
	 */
	enterAnchorExpr?: (ctx: AnchorExprContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.anchorExpr`.
	 * @param ctx the parse tree
	 */
	exitAnchorExpr?: (ctx: AnchorExprContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.addressExpr`.
	 * @param ctx the parse tree
	 */
	enterAddressExpr?: (ctx: AddressExprContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.addressExpr`.
	 * @param ctx the parse tree
	 */
	exitAddressExpr?: (ctx: AddressExprContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.labelExpr`.
	 * @param ctx the parse tree
	 */
	enterLabelExpr?: (ctx: LabelExprContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.labelExpr`.
	 * @param ctx the parse tree
	 */
	exitLabelExpr?: (ctx: LabelExprContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.whenNumericBlock`.
	 * @param ctx the parse tree
	 */
	enterWhenNumericBlock?: (ctx: WhenNumericBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.whenNumericBlock`.
	 * @param ctx the parse tree
	 */
	exitWhenNumericBlock?: (ctx: WhenNumericBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.numericComparisonOperator`.
	 * @param ctx the parse tree
	 */
	enterNumericComparisonOperator?: (ctx: NumericComparisonOperatorContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.numericComparisonOperator`.
	 * @param ctx the parse tree
	 */
	exitNumericComparisonOperator?: (ctx: NumericComparisonOperatorContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.whenLinkedBlock`.
	 * @param ctx the parse tree
	 */
	enterWhenLinkedBlock?: (ctx: WhenLinkedBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.whenLinkedBlock`.
	 * @param ctx the parse tree
	 */
	exitWhenLinkedBlock?: (ctx: WhenLinkedBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.linkStmt`.
	 * @param ctx the parse tree
	 */
	enterLinkStmt?: (ctx: LinkStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.linkStmt`.
	 * @param ctx the parse tree
	 */
	exitLinkStmt?: (ctx: LinkStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.trackNumericStmt`.
	 * @param ctx the parse tree
	 */
	enterTrackNumericStmt?: (ctx: TrackNumericStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.trackNumericStmt`.
	 * @param ctx the parse tree
	 */
	exitTrackNumericStmt?: (ctx: TrackNumericStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.trackLinkedStmt`.
	 * @param ctx the parse tree
	 */
	enterTrackLinkedStmt?: (ctx: TrackLinkedStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.trackLinkedStmt`.
	 * @param ctx the parse tree
	 */
	exitTrackLinkedStmt?: (ctx: TrackLinkedStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.updateNumericStmt`.
	 * @param ctx the parse tree
	 */
	enterUpdateNumericStmt?: (ctx: UpdateNumericStmtContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.updateNumericStmt`.
	 * @param ctx the parse tree
	 */
	exitUpdateNumericStmt?: (ctx: UpdateNumericStmtContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.decideBlock`.
	 * @param ctx the parse tree
	 */
	enterDecideBlock?: (ctx: DecideBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.decideBlock`.
	 * @param ctx the parse tree
	 */
	exitDecideBlock?: (ctx: DecideBlockContext) => void;

	/**
	 * Enter a parse tree produced by `FateCodeParser.chooseBlock`.
	 * @param ctx the parse tree
	 */
	enterChooseBlock?: (ctx: ChooseBlockContext) => void;
	/**
	 * Exit a parse tree produced by `FateCodeParser.chooseBlock`.
	 * @param ctx the parse tree
	 */
	exitChooseBlock?: (ctx: ChooseBlockContext) => void;
}

