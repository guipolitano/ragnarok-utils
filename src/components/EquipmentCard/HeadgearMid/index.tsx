"use client";
import SelectInput from "@/components/SelectInput";
import { Label } from "@/components/ui/label";
import { headgear_card, headgear_card_options } from "@/data/cards_table";
import {
  equipment_head_mid,
  headgear_mid_options,
} from "@/data/equiment_table";
import simulator from "@/services/statsCalc";
import { charAtom } from "@/store";
import { useAtom } from "jotai";
import React from "react";

const HeadgearMid: React.FC = () => {
  const [config, setConfig] = useAtom(charAtom);
  console.log(config);
  return (
    <div className="flex gap-2">
      <div className="flex flex-col space-y-1">
        <Label className="text-sm" htmlFor="job">
          Cabeça Meio
        </Label>
        <SelectInput
          options={[{ label: "Selecione", options: headgear_mid_options }]}
          onSelect={(e) => {
            const finded = equipment_head_mid.find((hg) => hg.id === e);
            if (finded) {
              simulator.setEquipment(finded, "headgear_mid");
            }
            setConfig(simulator.getChar());
          }}
        />
      </div>
      {config?.equipment?.headgear_mid?.equipment?.slots &&
        config?.equipment?.headgear_mid?.equipment?.slots > 0 && (
          <div className="flex flex-col space-y-1">
            <Label className="text-sm" htmlFor="job">
              Carta
            </Label>
            <SelectInput
              options={[{ label: "Selecione", options: headgear_card_options }]}
              onSelect={(e) => {
                const finded = headgear_card.find((hg) => hg.id === e);
                if (finded) {
                  simulator.setEquipmentCard(finded, "headgear_mid");
                }
                setConfig(simulator.getChar());
              }}
            />
          </div>
        )}
    </div>
  );
};

export default HeadgearMid;
