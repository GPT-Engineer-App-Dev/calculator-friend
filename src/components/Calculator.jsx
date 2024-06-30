import React, { useState } from "react";
import { evaluate } from "mathjs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const Calculator = () => {
  const [expression, setExpression] = useState("");

  const handleButtonClick = (value) => {
    setExpression((prev) => prev + value);
  };

  const handleClear = () => {
    setExpression("");
  };

  const handleEvaluate = () => {
    try {
      const result = evaluate(expression);
      setExpression(result.toString());
    } catch (error) {
      setExpression("Error");
    }
  };

  return (
    <div className="flex flex-col items-center p-4 space-y-4">
      <Input
        type="text"
        value={expression}
        readOnly
        className="text-right mb-4"
      />
      <div className="grid grid-cols-4 gap-2">
        {["7", "8", "9", "/"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {["4", "5", "6", "*"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {["1", "2", "3", "-"].map((value) => (
          <Button key={value} onClick={() => handleButtonClick(value)}>
            {value}
          </Button>
        ))}
        {["0", ".", "=", "+"].map((value) => (
          <Button
            key={value}
            onClick={value === "=" ? handleEvaluate : () => handleButtonClick(value)}
          >
            {value}
          </Button>
        ))}
        <Button onClick={handleClear} className="col-span-4">
          Clear
        </Button>
      </div>
    </div>
  );
};

export default Calculator;