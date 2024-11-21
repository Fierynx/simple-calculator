import { useState } from "react";
import DisplayScreen from "../components/calculator/DisplayScreen";
import Keypad from "../components/calculator/Keypad";

export default function Calculator() {
  const [input, setInput] = useState<string>("0");
  const [history, setHistory] = useState<string[]>([]);

  const handleInput = (value: string) => {
    if(value === "=") {
      let result = "";
      if(!isOperand(input[input.length - 1])){
        result = evaluateExpression(input.slice(0, -1));
      }else result = evaluateExpression(input);

      if (result === "Err") {
        setInput("Err");
      } else if(!isOperand(input)) {
        setInput("Err");
      }else {
        setHistory([...history, result]);  
        setInput(result); 
      }
    }else if (value === "C") {
      setInput("0");
    }else if (value === "DEL") {
      setInput(input.length > 1 ? input.slice(0, -1) : "0");
    }else if (input === "0" || input === "" || input === "Err") {
      if (value !== "+" && value !== "X" && value !== "/") {
        setInput(value); 
      } 
    }else if (["+", "-", "X", "/"].includes(input[input.length - 1])) {
      if (/\d/.test(value)) {
        setInput(input + value); 
      }
    }else {
      setInput(input === "0" ? value : input + value); 
    }
  };
  
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

  const isOperand = (char: string) => {
    if (char === "+" || char === "-" || char === "*" || char === "/") return false;
    else return true;
  };

  const evaluateExpression = (expression: string) => {
    const prefix = infixToPrefix(expression);  
    const stack: number[] = [];
  
    for (let j = prefix.length - 1; j >= 0; j--) {
  
      if (isOperand(prefix[j])) stack.push(parseInt(prefix[j]));
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
          case '/':
            if (o2 === 0) return "Err";
            stack.push(o1 / o2);
            break;
        }
      }
    }
  
    const result = stack[stack.length - 1];

    if(result >= 1e5 || result <= -1e5) {
      return result.toExponential(3).toString();
    }

    if(result.toString().includes(".") && result.toString().split(".")[1].length > 3) {
      return parseFloat(result.toFixed(3)).toString();
    }

    return result.toString();
  };
  
  return (
    <main className="bg-white h-screen flex items-center justify-center">
      <div className="grid grid-rows-10 max-w-screen w-[20rem] xs:w-screen h-[30rem] xs:h-full">
        <DisplayScreen input={input} history={history} />
        <Keypad handleInput={handleInput} />
      </div>
    </main>
  );
}
