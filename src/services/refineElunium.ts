import { IRefineStep } from "@/@types";
import { RefineConfig, isRefineSuccess } from "./utils";
import { v4 as uuidv4 } from "uuid";

export function simulateRefineElunium(EluniumPrice: number) {
  let actualItemLevel = 6;
  let highestTry = 6;

  let costByStep: IRefineStep = {
    ["id"]: uuidv4(),
    6: 0,
    7: 0,
    8: 0,
    9: 0,
    ["falhas-6"]: 0,
    ["falhas-7"]: 0,
    ["falhas-8"]: 0,
    ["falhas-9"]: 0,
    falhas: 0,
    custoTotal: 0,
  };

  while (actualItemLevel < 10) {
    let refineCost = EluniumPrice;
    let successChance: number = 0;

    successChance = RefineConfig[actualItemLevel].successRate;

    costByStep[highestTry] = +costByStep[highestTry] + refineCost;
    if (isRefineSuccess(successChance)) {
      actualItemLevel++;
      if (actualItemLevel > highestTry) {
        highestTry = actualItemLevel;
      }
    } else {
      if (actualItemLevel > 6) {
        actualItemLevel--;
      }
      costByStep["falhas"] = +costByStep["falhas"] + 1;
      costByStep[`falhas-${highestTry}`] =
        +costByStep[`falhas-${highestTry}`] + 1;
    }
    costByStep["custoTotal"] = +costByStep["custoTotal"] + refineCost;
  }

  return { costByStep };
}

export function simulateXRefinesElunium(
  EluniumPrice: number,
  totalAttempts: number
) {
  let custosPorTentativa = [];

  for (let i = 0; i < totalAttempts; i++) {
    const { costByStep: custos } = simulateRefineElunium(EluniumPrice);
    custosPorTentativa.push(custos);
  }
  return custosPorTentativa;
}
