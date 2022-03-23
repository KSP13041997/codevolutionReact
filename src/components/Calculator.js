import React, { useState } from "react";

function Calculator() {
  const [display, setDisplay] = useState("");
  const [total, setTotal] = useState(0);
  const [operator, setOperator] = useState(0);

  function operation(num) {
    if (operator === 0) {
      //total = parseInt(display);
      setTotal(parseInt(display));
      console.log(`Display = ${display}`);
      console.log(`total = ${total}`);
      console.log(`operator = ${operator}`);
      console.log(`num = ${num}`);
    } else if (operator === 1) {
      //total = total + parseInt(display);
      setTotal(total + parseInt(display));
      console.log(`total = ${total}`);
      console.log(`num = ${num}`);
      console.log(`operator = ${operator}`);
      setDisplay(total.toString());
    }
    //operator = num;
    setOperator(num);
    console.log(`operator = ${operator}`);
  }

  return (
    <div>
      <div>{display}</div>
      <button onClick={() => setDisplay(display + 1)}>1</button>
      <button onClick={() => setDisplay(display + 2)}>2</button>
      <button onClick={() => (operation(1), setDisplay(""))}>+</button>
    </div>
  );
}

export default Calculator;
