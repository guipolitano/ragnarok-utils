import { IRefineStep } from "@/@types";
import { RefineConfig, isRefineSuccess } from "./utils";
import { v4 as uuidv4 } from 'uuid';

export function simulateRefineBSB(BSBPrice: number) {
    let actualItemLevel = 6;
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
        "falhas": 0,
        custoTotal: 0,
    };

    while (actualItemLevel < 10) {
        let refineCost = BSBPrice;
        let successChance:number = 0;
        let bsb:number = 0;

        successChance = RefineConfig[actualItemLevel].successRate;
        bsb = RefineConfig[actualItemLevel].bsbs;

        costByStep[actualItemLevel] = +costByStep[actualItemLevel] + (refineCost * bsb)+ 1000000;
        if (isRefineSuccess(successChance)) {
            actualItemLevel++;
        } else {
            costByStep['falhas'] = +costByStep['falhas'] + 1;
            costByStep[`falhas-${actualItemLevel}`] = +costByStep[`falhas-${actualItemLevel}`] + 1
        }
        costByStep["custoTotal"] = +costByStep["custoTotal"] + (refineCost * bsb)+ 1000000;
    }

    return { costByStep };
}

export function simulateXRefinesBSB(BSBPrice:number, totalAttempts: number) {
  let custosPorTentativa = [];

  for (let i = 0; i < totalAttempts; i++) {
      const { costByStep: custos } = simulateRefineBSB(BSBPrice);
        custosPorTentativa.push(custos)
    }
    return custosPorTentativa;
}