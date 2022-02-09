import { FuncNameList } from './../Functions/consts';
import { ExpressionPrefix, ExpressionSuffix } from './../consts';
import { ExpressionAstNode, ExpressionTypes } from "../types";

export function isExpression(expression: unknown) {
  return (
    typeof expression === 'string' &&
    expression.startsWith(ExpressionPrefix) &&
    expression.endsWith(ExpressionSuffix)
  );
}

export function getInitialAstNode() {
  const res: ExpressionAstNode = {
    expression: '',
    type: ExpressionTypes.ConstantExpression,
    startIdx: 0,
    endIdx: 0,
    params: [],
    isValid: true,
  };

  return res;
}

export function isFuncName(expression: string) {
  return FuncNameList.includes(expression);
}

