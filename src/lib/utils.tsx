import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const cn = (...inputs: ClassValue[]) => {
  return twMerge(clsx(inputs));
}

const infixToPrefix = (expression: string) => {
  const operators: string[] = [];
  const operands: string[] = [];
  let num = "";
  expression = expression + " ";

  for (let i = expression.length - 1; i >= 0; i--) {
    let char = expression[i];
    char = char === "X" ? "*" : char;
    if (char === "-" && (i === 0 || /[+\-*/]/.test(expression[i + 1]))) {
      num = char + num; 
    } else if( /\d/.test(char)){
      num = char + num;
    } else if (!isOperand(char)) {
      if (num) {
        operands.push(num); 
        num = ""; 
      }

      while (operators.length && precedence(operators[operators.length - 1]) > precedence(char)) {
        operands.push(operators.pop()!); 
      }

      operators.push(char); 
    }
  }

  if (num)  operands.push(num);
  while (operators.length) operands.push(operators.pop()!);

  return operands.reverse();
};


const precedence = (operator: string) => {
  if (operator === "+" || operator === "-") return 1;
  if (operator === "*" || operator === "/") return 2;
  return 0;
};

export const isOperand = (char: string) => {
  if (char === "+" || char === "-" || char === "*" || char === "/") return false;
  else return true;
};

export const evaluateExpression = (expression: string) => {
  const prefix = infixToPrefix(expression);  
  const stack: number[] = [];

  for (let j = prefix.length - 1; j >= 0; j--) {
    if(isOperand(prefix[j])) stack.push(parseFloat(prefix[j]));
    else {
      const o1 = stack.pop()!;
      const o2 = stack.pop()!;
      switch (prefix[j]) {
        case '+':
          stack.push(o1 + o2);
          break;
        case '-':
          stack.push(o1 - o2);
          break;
        case '*':
          stack.push(o1 * o2);
          break;
        case '/': {
          if (o2 === 0) return "Err"; 
          let resultDivision = o1 / o2;
          resultDivision = parseFloat(resultDivision.toFixed(4));
          stack.push(resultDivision);
          break;
        }
      }
    }
  }

  const result = stack[stack.length - 1];

  if(result >= 1e3 || result <= -1e3) {
    return result.toExponential(3).toString();
  }

  return result.toString();
};
