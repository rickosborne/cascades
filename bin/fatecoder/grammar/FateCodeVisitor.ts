// Generated from grammar/FateCode.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeVisitor } from "antlr4ts/tree/ParseTreeVisitor";

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


/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `FateCodeParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface FateCodeVisitor<Result> extends ParseTreeVisitor<Result> {
	/**
	 * Visit a parse tree produced by `FateCodeParser.program`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitProgram?: (ctx: ProgramContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.numberedStatement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumberedStatement?: (ctx: NumberedStatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.statement`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitStatement?: (ctx: StatementContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.comment`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitComment?: (ctx: CommentContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.identifier`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitIdentifier?: (ctx: IdentifierContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.lineNumber`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLineNumber?: (ctx: LineNumberContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.returnStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitReturnStmt?: (ctx: ReturnStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.number`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumber?: (ctx: NumberContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.string`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitString?: (ctx: StringContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.visitStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitVisitStmt?: (ctx: VisitStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.jumpStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitJumpStmt?: (ctx: JumpStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.anchorExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAnchorExpr?: (ctx: AnchorExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.addressExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitAddressExpr?: (ctx: AddressExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.labelExpr`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLabelExpr?: (ctx: LabelExprContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.whenNumericBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenNumericBlock?: (ctx: WhenNumericBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.numericComparisonOperator`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitNumericComparisonOperator?: (ctx: NumericComparisonOperatorContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.whenLinkedBlock`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitWhenLinkedBlock?: (ctx: WhenLinkedBlockContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.linkStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitLinkStmt?: (ctx: LinkStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.trackNumericStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrackNumericStmt?: (ctx: TrackNumericStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.trackLinkedStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitTrackLinkedStmt?: (ctx: TrackLinkedStmtContext) => Result;

	/**
	 * Visit a parse tree produced by `FateCodeParser.updateNumericStmt`.
	 * @param ctx the parse tree
	 * @return the visitor result
	 */
	visitUpdateNumericStmt?: (ctx: UpdateNumericStmtContext) => Result;
}

