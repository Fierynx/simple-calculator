import { useState } from "react";
import DisplayScreen from "../components/calculator/DisplayScreen";
import Keypad from "../components/calculator/Keypad";
import { evaluateExpression, isOperand } from "../lib/utils";

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
  
  return (
    <main className="bg-white h-screen flex items-center justify-center">
      <div className="grid grid-rows-10 max-w-screen w-[20rem] xs:w-screen h-[30rem] xs:h-full">
        <DisplayScreen input={input} history={history} />
        <Keypad handleInput={handleInput} />
      </div>
    </main>
  );
}
