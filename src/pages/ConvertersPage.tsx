
import { useState } from "react";
import AppLayout from "@/components/layout/AppLayout";
import Container from "@/components/ui/Container";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowLeft, ArrowRight } from "lucide-react";

const conversionTypes = [
  {
    label: "Length",
    units: ["Meters", "Kilometers", "Feet", "Inches", "Miles"]
  },
  {
    label: "Weight",
    units: ["Kilograms", "Grams", "Pounds", "Ounces"]
  },
  {
    label: "Temperature",
    units: ["Celsius", "Fahrenheit", "Kelvin"]
  }
];

const ConvertersPage = () => {
  const [type, setType] = useState("Length");
  const [fromUnit, setFromUnit] = useState("");
  const [toUnit, setToUnit] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [result, setResult] = useState("");

  const convert = (value: number, from: string, to: string) => {
    // Convert to base unit first, then to target unit
    if (from === to) return value;

    // Length conversions
    const lengthToMeters: { [key: string]: number } = {
      Meters: 1,
      Kilometers: 1000,
      Feet: 0.3048,
      Inches: 0.0254,
      Miles: 1609.34
    };

    // Weight conversions
    const weightToKilograms: { [key: string]: number } = {
      Kilograms: 1,
      Grams: 0.001,
      Pounds: 0.453592,
      Ounces: 0.0283495
    };

    // Temperature conversions
    if (type === "Temperature") {
      if (from === "Celsius" && to === "Fahrenheit") {
        return (value * 9/5) + 32;
      }
      if (from === "Fahrenheit" && to === "Celsius") {
        return (value - 32) * 5/9;
      }
      if (from === "Celsius" && to === "Kelvin") {
        return value + 273.15;
      }
      if (from === "Kelvin" && to === "Celsius") {
        return value - 273.15;
      }
      if (from === "Fahrenheit" && to === "Kelvin") {
        return ((value - 32) * 5/9) + 273.15;
      }
      if (from === "Kelvin" && to === "Fahrenheit") {
        return ((value - 273.15) * 9/5) + 32;
      }
    }

    // Length and Weight conversions
    if (type === "Length") {
      const inMeters = value * lengthToMeters[from];
      return inMeters / lengthToMeters[to];
    }
    
    if (type === "Weight") {
      const inKilograms = value * weightToKilograms[from];
      return inKilograms / weightToKilograms[to];
    }

    return value;
  };

  const handleConvert = () => {
    if (!fromUnit || !toUnit || !inputValue) return;
    
    const value = parseFloat(inputValue);
    if (isNaN(value)) return;
    
    const convertedValue = convert(value, fromUnit, toUnit);
    setResult(convertedValue.toFixed(4));
  };

  return (
    <AppLayout>
      <div className="py-8">
        <Container size="lg">
          <div className="mb-8">
            <h1 className="text-2xl font-bold">Converters</h1>
            <p className="text-muted-foreground">
              Convert between different units, formats, and measurements
            </p>
          </div>

          <Card className="max-w-2xl mx-auto">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <div className="flex items-center">
                  <ArrowLeft className="h-6 w-6" />
                  <ArrowRight className="h-6 w-6 -ml-2" />
                </div>
                Unit Converter
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">
                    Conversion Type
                  </label>
                  <Select
                    value={type}
                    onValueChange={(value) => {
                      setType(value);
                      setFromUnit("");
                      setToUnit("");
                      setResult("");
                    }}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      {conversionTypes.map((t) => (
                        <SelectItem key={t.label} value={t.label}>
                          {t.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium mb-2 block">From</label>
                    <Select value={fromUnit} onValueChange={setFromUnit}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {conversionTypes
                          .find((t) => t.label === type)
                          ?.units.map((unit) => (
                            <SelectItem key={unit} value={unit}>
                              {unit}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label className="text-sm font-medium mb-2 block">To</label>
                    <Select value={toUnit} onValueChange={setToUnit}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select unit" />
                      </SelectTrigger>
                      <SelectContent>
                        {conversionTypes
                          .find((t) => t.label === type)
                          ?.units.map((unit) => (
                            <SelectItem key={unit} value={unit}>
                              {unit}
                            </SelectItem>
                          ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div>
                  <label className="text-sm font-medium mb-2 block">Value</label>
                  <Input
                    type="number"
                    placeholder="Enter value"
                    value={inputValue}
                    onChange={(e) => {
                      setInputValue(e.target.value);
                      if (fromUnit && toUnit) {
                        const value = parseFloat(e.target.value);
                        if (!isNaN(value)) {
                          const convertedValue = convert(value, fromUnit, toUnit);
                          setResult(convertedValue.toFixed(4));
                        } else {
                          setResult("");
                        }
                      }
                    }}
                  />
                </div>

                {result && (
                  <div className="p-4 bg-accent/10 rounded-lg">
                    <p className="text-center">
                      <span className="font-medium">{inputValue} {fromUnit}</span>
                      {" = "}
                      <span className="font-medium">{result} {toUnit}</span>
                    </p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </Container>
      </div>
    </AppLayout>
  );
};

export default ConvertersPage;
