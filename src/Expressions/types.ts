export enum ExpressionTypes {
  FunctionExpression = 1,
  ConstantExpression,
}

export interface ExpressionAstNode{
  expression: string;
  type: ExpressionTypes;
  startIdx: number;
  endIdx: number;
  params: ExpressionAstNode[];
  isValid: boolean;
}
