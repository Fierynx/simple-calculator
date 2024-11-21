import { Link } from "react-router-dom";
import Button from "./Button";

type Props = {
  handleInput: (value: string) => void;
};

export default function Keypad({
    handleInput,
  } : Props
){
  
  return (
    <section className="row-span-7 flex justify-center items-center bg-black relative">
      <div className="grid grid-cols-4 gap-x-7 gap-y-3 absolute bottom-4 right-4 left-4">
        <div className="grid grid-cols-3 grid-rows-4 gap-x-3 gap-y-2 col-span-3">
          <Button icon="C" onClick={() => handleInput("C")}/>
          <Button icon="DEL" onClick={() => handleInput("DEL")}/>
          <Link to="/support" ><Button icon="?" className="bg-light-brown" /></Link>
          <Button icon="1" onClick={() => handleInput("1")}/>
          <Button icon="2" onClick={() => handleInput("2")}/>
          <Button icon="3" onClick={() => handleInput("3")}/>
          <Button icon="4" onClick={() => handleInput("4")}/>
          <Button icon="5" onClick={() => handleInput("5")}/>
          <Button icon="6" onClick={() => handleInput("6")}/>
          <Button icon="7" onClick={() => handleInput("7")}/>
          <Button icon="8" onClick={() => handleInput("8")}/>
          <Button icon="9" onClick={() => handleInput("9")}/>
        </div>
        <div className="grid grid-rows-4 gap-x-3 gap-y-2">
          <Button icon="/" className="bg-light-orange" onClick={() => handleInput("/")}/>
          <Button icon="X" className="bg-light-orange" onClick={() => handleInput("X")}/>
          <Button icon="-" className="bg-light-orange" onClick={() => handleInput("-")}/>
          <Button icon="+" className="bg-light-orange" onClick={() => handleInput("+")}/>
        </div>
        <Button className="col-span-2 w-auto" icon="0" onClick={() => handleInput("0")}/>
        <Button className="col-span-2 w-auto bg-light-orange" icon="=" onClick={() => handleInput("=")}/>
      </div>
    </section>
  );
}