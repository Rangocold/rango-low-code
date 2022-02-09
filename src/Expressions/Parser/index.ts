import { LeftParenthesis } from './../consts';
import { Comma, LeftParenthesis, RightParenthesis } from '../consts';
import { ExpressionAstNode, ExpressionTypes } from '../types';
import { getInitialAstNode } from './utils';

export function getParenthesisMap(expression: string) {
  const parenthesisMap = new Map<number, number>();
  const leftParenthesisStack: number[] = [];

  for (let i = 0; i < expression.length; ++i) {
    const currentLetter = expression[i];
    if (currentLetter === LeftParenthesis) {
      leftParenthesisStack.push(i);
    } else if (currentLetter === RightParenthesis) {
      const leftIdx = leftParenthesisStack.pop();
      if (leftIdx !== undefined) {
        parenthesisMap.set(leftIdx, i);
      } else {
        parenthesisMap.clear();
        return {
          validate: false,
          parenthesisMap,
        };
      }
    }
  }

  if (leftParenthesisStack.length > 0) {
    parenthesisMap.clear();
    return { validate: false, parenthesisMap };
  }

  return {
    validate: true,
    parenthesisMap,
  };
}

export function parseParamsToAst(
  expression: string,
  leftIdx: number,
  rightIdx: number,
  parenthesisMap?: Map<number, number>
): ExpressionAstNode[] {
  const res: ExpressionAstNode[] = [];
  return res;
}

export function parseExpressionToAst(
  expression: string,
  parenthesisMap?: Map<number, number>
): ExpressionAstNode | undefined {
  const node = getInitialAstNode();
  if (parenthesisMap === undefined) {
    const tmp = getParenthesisMap(expression);
    if (!tmp.validate) {
      return undefined;
    } else {
      parenthesisMap = tmp.parenthesisMap;
    }
  }

  for (let i = 0; i < expression.length; ++i) {
    const currentLetter = expression[i];
    if (currentLetter === LeftParenthesis) {
      const rightIdx = parenthesisMap.get(i);
      if (rightIdx === undefined) {
        return undefined;
      } else {
        node.type = ExpressionTypes.FunctionExpression;
        node.startIdx = 
      }
    } else {
      node.expression += currentLetter;
    }
  }

  return node;
}
