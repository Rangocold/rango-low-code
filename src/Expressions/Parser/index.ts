import { Comma, LeftParenthesis, RightParenthesis } from '../consts';
import { ExpressionAstNode, ExpressionTypes } from '../types';
import { getInitialAstNode } from './utils';
import { isNil } from 'lodash';

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
  parenthesisMap: Map<number, number>
): ExpressionAstNode[] {
  const res: ExpressionAstNode[] = [];
  if (leftIdx > rightIdx) {
    return res;
  }
  res.push(getInitialAstNode());
  for (let i = leftIdx; i <= rightIdx; ++i) {
    const currentLetter = expression[i];
    if (currentLetter === LeftParenthesis) {
      const rightIdx = parenthesisMap.get(i);
      if ()
      res[res.length - 1].params = parseParamsToAst(expression, i, )
    } else if (currentLetter === Comma) {
      res.push(getInitialAstNode());
    } else {
      res[res.length - 1].expression += currentLetter;
    }
  }
  return res;
}

export function parseExpressionToAst(
  expression: string,
  parenthesisMap?: Map<number, number>,
  startIdx = 0,
  endIdx = expression.length - 1,
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

  for (let i = startIdx; i <= endIdx; ++i) {
    const currentLetter = expression[i];
    if (currentLetter === LeftParenthesis) {
      const rightIdx = parenthesisMap.get(i);
      if (rightIdx === undefined) {
        return undefined;
      } else {
        node.type = ExpressionTypes.FunctionExpression;
        node.startIdx = i;
        node.endIdx = rightIdx;
        node.params = parseParamsToAst(expression, i + 1, rightIdx - 1, parenthesisMap);
      }
    } else if (currentLetter === Comma) {
      return undefined;
    } else {
      node.expression += currentLetter;
    }
  }

  return node;
}
