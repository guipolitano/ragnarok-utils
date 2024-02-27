"use client";
import SelectInput from "@/components/SelectInput";
import { Label } from "@/components/ui/label";
import { headgear_card, headgear_card_options } from "@/data/cards_table";
import {
  equipment_head_top,
  headgear_top_options,
} from "@/data/equiment_table";
import { refineOptions } from "@/data/refine_table";
import simulator from "@/services/statsCalc";
import { charAtom } from "@/store";
import { useAtom } from "jotai";
import React from "react";

const HeadgearTop: React.FC = () => {
  const [config, setConfig] = useAtom(charAtom);
  return (
    <div className="flex gap-2">
      <div className="flex flex-col space-y-1">
        <Label className="text-sm" htmlFor="job">
          Cabeça Topo
        </Label>
        <SelectInput
          options={[{ label: "Selecione", options: headgear_top_options }]}
          value={config.equipment?.headgear_top?.equipment?.id}
          onSelect={(e) => {
            const finded = equipment_head_top.find((hg) => hg.id === e);
            if (finded) {
              simulator.setEquipment(finded, "headgear_top");
            }
            setConfig(simulator.getChar());
          }}
        />
      </div>
      <div className="flex flex-col space-y-1">
        <Label className="text-sm" htmlFor="job">
          Refino
        </Label>
        <SelectInput
          className="max-w-[80px]"
          value={config.equipment?.headgear_top?.refine}
          options={[{ label: "Selecione", options: refineOptions }]}
          onSelect={(e) => {
            simulator.setEquipmentRefine(+e, "headgear_top");
            setConfig(simulator.getChar());
          }}
        />
      </div>
      {config?.equipment?.headgear_top?.equipment?.slots &&
      config?.equipment?.headgear_top?.equipment?.slots > 0 ? (
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            Carta
          </Label>
          <SelectInput
            options={[{ label: "Selecione", options: headgear_card_options }]}
            value={config.equipment?.headgear_top?.card?.id}
            onSelect={(e) => {
              const finded = headgear_card.find((hg) => hg.id === e);
              if (finded) {
                simulator.setEquipmentCard(finded, "headgear_top");
              }
              setConfig(simulator.getChar());
            }}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default HeadgearTop;
