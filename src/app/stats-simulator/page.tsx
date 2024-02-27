"use client";
import { JobNames } from "@/@types";
import SelectInput from "@/components/SelectInput";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import simulator from "@/services/statsCalc";
import { charAtom } from "@/store";
import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";

export default function StatsSimulator() {
  const [config, setConfig] = useAtom(charAtom);
  console.log(config);

  return (
    <main className="flex min-h-screen flex-col gap-6 md:p-12 p-6 bg-background">
      <h1 className="text-xl">Construtor de Builds</h1>
      <div>
        <Card className="p-4">
          <CardHeader className="px-0 py-2">
            <CardTitle>Básico</CardTitle>
          </CardHeader>
          <div className="flex flex-col gap-2">
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1">
                <Label className="text-sm" htmlFor="job">
                  Classe
                </Label>
                <SelectInput onSelect={(e) => simulator.setJob(e)} />
              </div>
              <div className="flex flex-col space-y-1">
                <Label className="text-sm" htmlFor="job">
                  Level Base
                </Label>
                <Input
                  placeholder="1-99"
                  type="number"
                  max={99}
                  defaultValue={1}
                  onChange={(e) => {
                    simulator.setBaseLevel(+e.target.value);
                    setConfig(simulator.getChar());
                  }}
                />
              </div>
              <div className="flex flex-col space-y-1">
                <Label className="text-sm" htmlFor="job">
                  Level de Classe
                </Label>
                <Input
                  placeholder="1-99"
                  type="number"
                  max={99}
                  defaultValue={1}
                  onChange={(e) => {
                    simulator.setJobLevel(+e.target.value);
                    setConfig(simulator.getChar());
                  }}
                />
              </div>
            </div>
            <div className="flex gap-2">
              <div className="flex flex-col space-y-1">
                <Label className="text-sm" htmlFor="job">
                  STR
                </Label>
                <div className="flex items-center gap-1">
                  <Input
                    className="max-w-16"
                    placeholder="1-99"
                    type="number"
                    max={99}
                    defaultValue={1}
                    onChange={(e) => {
                      simulator.updateBaseAtribute("str", +e.target.value);
                      setConfig(simulator.getChar());
                    }}
                  />
                  <span>{simulator.getAttribute("str").bonus}</span>
                  <span>({simulator.getAttribute("str").cost})</span>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </main>
  );
}
