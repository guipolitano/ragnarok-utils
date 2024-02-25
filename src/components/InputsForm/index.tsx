"use client";
import React from "react";
import { Card } from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { configAtom } from "@/store";
import { useAtom } from "jotai";
import { IAtomConfig } from "@/@types";
import { maskNumber } from "@/lib/utils";

// import { Container } from './styles';
const handleInput = (
  e: React.ChangeEvent<HTMLInputElement>,
  key: string,
  setConfig: any
) => {
  e.target.value = maskNumber(e.target.value);
  setConfig((old: IAtomConfig) => ({
    ...old,
    [key]: parseInt(e.target.value.replace(/[^\d]/g, "")),
  }));
};

const InputsForm: React.FC = () => {
  const [config, setConfig] = useAtom(configAtom);
  return (
    <Card className="w-full md:w-fit p-2 flex gap-4 md:flex-row flex-col">
      <div>
        <Label htmlFor="bsbPrice">Preço BSB</Label>
        <Input
          id="bsbPrice"
          value={maskNumber(String(config.bsbPrice))}
          onChange={(e) => handleInput(e, "bsbPrice", setConfig)}
        />
      </div>
      <div>
        <Label htmlFor="eluniumPrice">Preço E. Perfeito</Label>
        <Input
          id="eluniumPrice"
          value={maskNumber(String(config.eluniumPrice))}
          onChange={(e) => handleInput(e, "eluniumPrice", setConfig)}
        />
      </div>
      <div>
        <Label htmlFor="totalTries">N. Tentativas</Label>
        <Input
          id="totalTries"
          value={maskNumber(String(config.totalTries))}
          onChange={(e) => handleInput(e, "totalTries", setConfig)}
        />
      </div>
      <div>
        <Label htmlFor="perg7Price">Preço Perg. +7</Label>
        <Input
          id="perg7Price"
          value={maskNumber(String(config.perg7Price))}
          onChange={(e) => handleInput(e, "perg7Price", setConfig)}
        />
      </div>
      <div>
        <Label htmlFor="perg8Price">Preço Perg. +8</Label>
        <Input
          id="perg8Price"
          value={maskNumber(String(config.perg8Price))}
          onChange={(e) => handleInput(e, "perg8Price", setConfig)}
        />
      </div>
      <div>
        <Label htmlFor="perg9Price">Preço Perg. +9</Label>
        <Input
          id="perg9Price"
          value={maskNumber(String(config.perg9Price))}
          onChange={(e) => handleInput(e, "perg9Price", setConfig)}
        />
      </div>
    </Card>
  );
};

export default InputsForm;
