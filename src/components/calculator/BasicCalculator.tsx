
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Calculator } from "lucide-react";

const BasicCalculator = () => {
  const [display, setDisplay] = useState("0");
  const [previousValue, setPreviousValue] = useState<number | null>(null);
  const [operation, setOperation] = useState<string | null>(null);
  const [waitingForOperand, setWaitingForOperand] = useState(false);

  const inputNumber = (num: string) => {
    if (waitingForOperand) {
      setDisplay(num);
      setWaitingForOperand(false);
    } else {
      setDisplay(display === "0" ? num : display + num);
    }
  };

  const inputOperation = (nextOperation: string) => {
    const inputValue = parseFloat(display);

    if (previousValue === null) {
      setPreviousValue(inputValue);
    } else if (operation) {
      const currentValue = previousValue || 0;
      const newValue = calculate(currentValue, inputValue, operation);

      setDisplay(String(newValue));
      setPreviousValue(newValue);
    }

    setWaitingForOperand(true);
    setOperation(nextOperation);
  };

  const calculate = (firstValue: number, secondValue: number, operation: string) => {
    switch (operation) {
      case "+":
        return firstValue + secondValue;
      case "-":
        return firstValue - secondValue;
      case "×":
        return firstValue * secondValue;
      case "÷":
        return firstValue / secondValue;
      case "=":
        return secondValue;
      default:
        return secondValue;
    }
  };

  const performCalculation = () => {
    const inputValue = parseFloat(display);

    if (previousValue !== null && operation) {
      const newValue = calculate(previousValue, inputValue, operation);
      setDisplay(String(newValue));
      setPreviousValue(null);
      setOperation(null);
      setWaitingForOperand(true);
    }
  };

  const clear = () => {
    setDisplay("0");
    setPreviousValue(null);
    setOperation(null);
    setWaitingForOperand(false);
  };

  const clearEntry = () => {
    setDisplay("0");
  };

  const inputDecimal = () => {
    if (waitingForOperand) {
      setDisplay("0.");
      setWaitingForOperand(false);
    } else if (display.indexOf(".") === -1) {
      setDisplay(display + ".");
    }
  };

  return (
    <Card className="max-w-sm mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-5 w-5" />
          Calculator
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-secondary p-4 rounded-lg text-right">
          <div className="text-2xl font-mono font-bold truncate">
            {display}
          </div>
        </div>

        <div className="grid grid-cols-4 gap-2">
          <Button variant="outline" onClick={clear} className="col-span-2">
            Clear
          </Button>
          <Button variant="outline" onClick={clearEntry}>
            CE
          </Button>
          <Button variant="outline" onClick={() => inputOperation("÷")}>
            ÷
          </Button>

          <Button variant="outline" onClick={() => inputNumber("7")}>
            7
          </Button>
          <Button variant="outline" onClick={() => inputNumber("8")}>
            8
          </Button>
          <Button variant="outline" onClick={() => inputNumber("9")}>
            9
          </Button>
          <Button variant="outline" onClick={() => inputOperation("×")}>
            ×
          </Button>

          <Button variant="outline" onClick={() => inputNumber("4")}>
            4
          </Button>
          <Button variant="outline" onClick={() => inputNumber("5")}>
            5
          </Button>
          <Button variant="outline" onClick={() => inputNumber("6")}>
            6
          </Button>
          <Button variant="outline" onClick={() => inputOperation("-")}>
            -
          </Button>

          <Button variant="outline" onClick={() => inputNumber("1")}>
            1
          </Button>
          <Button variant="outline" onClick={() => inputNumber("2")}>
            2
          </Button>
          <Button variant="outline" onClick={() => inputNumber("3")}>
            3
          </Button>
          <Button variant="outline" onClick={() => inputOperation("+")} className="row-span-2">
            +
          </Button>

          <Button variant="outline" onClick={() => inputNumber("0")} className="col-span-2">
            0
          </Button>
          <Button variant="outline" onClick={inputDecimal}>
            .
          </Button>

          <Button onClick={performCalculation} className="col-span-3">
            =
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default BasicCalculator;
