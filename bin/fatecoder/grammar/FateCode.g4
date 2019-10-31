grammar FateCode;

// Words

THEN : 'THEN' ;
END : 'END' ;
RETURN : 'RETURN' ;
REMEMBERING : 'REMEMBERING' ;
VISIT : 'VISIT' ;
NO : 'NO' ;
WHEN : 'WHEN' ;
NUMERIC : 'NUMERIC' ;
LINKED : 'LINKED' ;
LINK : 'LINK' ;
PATH : 'PATH' ;
UNLINK : 'UNLINK' ;
FROM : 'FROM' ;
EQUAL : 'EQUAL' ;
TO : 'TO' ;
JUMP : 'JUMP' ;
UPDATE : 'UPDATE' ;
TRACK : 'TRACK' ;
ADD : 'ADD' ;
SUBTRACT : 'SUBTRACT' ;
START : 'START' ;
AT : 'AT' ;

// Symbols

DQ : '"' ;
PLUS : '+' ;
MINUS : '-' ;
DOT : '.' ;
GT : '>' ;
LT : '<' ;
EQ : '==' ;

// Aggregates

NUMBER : Digit + ;
fragment HEXDIGIT : Digit | ('a' .. 'f') | ('A' .. 'F') ;
HEXNUMBER : '0x' HEXDIGIT + ;
FLOAT : NUMBER DOT NUMBER ;
LineComment : '//' ~[\r\n]* ;
fragment ALPHA : ('a' .. 'z' | 'A' .. 'Z') ;
fragment ALPHAS : ALPHA + ;
fragment ALNUM : ( ALPHA | NUMBER ) + ;
LABEL : '#' IDENTIFIER ;
STRING : '"' ( '""' | . )*? '"' ;
fragment NonDigit : [a-zA-Z_] ;
fragment IdentifierNonDigit : NonDigit ;
fragment Digit : [0-9] ;
IDENTIFIER : IdentifierNonDigit ( IdentifierNonDigit | Digit )* ;
WS : [ \t\r\n]+ -> skip ;

program : numberedStatement * EOF;

numberedStatement : lineNumber ? statement ;

statement : comment | trackNumericStmt | trackLinkedStmt | visitStmt | jumpStmt | whenNumericBlock | whenLinkedBlock | updateNumericStmt | linkStmt | returnStmt ;

comment : LineComment ;

identifier : IDENTIFIER ;

lineNumber : HEXNUMBER | NUMBER ;

returnStmt : RETURN ;

number : ( PLUS | MINUS ) ? ( NUMBER | FLOAT ) ;

string : STRING ;

visitStmt : VISIT anchorExpr ( REMEMBERING anchorExpr ) ? ;

jumpStmt : JUMP anchorExpr ;

anchorExpr : addressExpr | labelExpr ;

addressExpr : HEXNUMBER ;

labelExpr : LABEL ;

whenNumericBlock : WHEN NUMERIC identifier numericComparisonOperator number THEN statement + END WHEN ;

numericComparisonOperator : GT | LT | EQ ;

whenLinkedBlock : WHEN NO ? identifier ( LINK | PATH ) FROM string TO string THEN statement + END WHEN ;

linkStmt : ( LINK | UNLINK ) identifier FROM string TO string ;

trackNumericStmt : TRACK NUMERIC identifier ( START AT number ) ? ;

trackLinkedStmt : TRACK LINKED identifier ;

updateNumericStmt : UPDATE NUMERIC identifier ( ADD | SUBTRACT | TO ) number ;
