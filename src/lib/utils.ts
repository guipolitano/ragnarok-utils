import { IPerg, IRefineStep } from "@/@types";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function maskNumber(value: string) {
  const val = +value.replace(/[^\d]/g, "");
  return new Intl.NumberFormat("pt-BR").format(parseInt(String(val) || "0"));
}

export function generateResume(data: IRefineStep[]) {
  return {
    6: {
      cost:
        data.reduce(
          (accumulator, currentValue) => accumulator + +currentValue["6"],
          0
        ) / data.length,
      fails:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["falhas-6"],
          0
        ) / data.length,
    },
    7: {
      cost:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["6"] + +currentValue["7"],
          0
        ) / data.length,
      fails:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["falhas-7"],
          0
        ) / data.length,
    },
    8: {
      cost:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator +
            +currentValue["6"] +
            +currentValue["7"] +
            +currentValue["8"],
          0
        ) / data.length,
      fails:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["falhas-8"],
          0
        ) / data.length,
    },
    total: {
      cost:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator +
            +(+currentValue["6"]) +
            +currentValue["7"] +
            +currentValue["8"] +
            +currentValue["9"],
          0
        ) / data.length,
      fails:
        data.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["falhas-9"],
          0
        ) / data.length,
    },
  };
}

export function generateResumePerg(
  bsbData: IRefineStep[],
  eluData: IRefineStep[],
  pergData: IPerg
) {
  return {
    6: {
      bsb:
        bsbData.reduce(
          (accumulator, currentValue) => accumulator + +currentValue["6"],
          0
        ) / bsbData.length,
      elu:
        eluData.reduce(
          (accumulator, currentValue) => accumulator + +currentValue["6"],
          0
        ) / eluData.length,
      perg: pergData[7],
    },
    7: {
      bsb:
        bsbData.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["7"] + +currentValue["6"],
          0
        ) / bsbData.length,
      elu:
        eluData.reduce(
          (accumulator, currentValue) =>
            accumulator + +currentValue["7"] + +currentValue["6"],
          0
        ) / eluData.length,
      perg: pergData[8],
    },
    8: {
      bsb:
        bsbData.reduce(
          (accumulator, currentValue) =>
            accumulator +
            +currentValue["8"] +
            +currentValue["6"] +
            +currentValue["7"],
          0
        ) / bsbData.length,
      elu:
        eluData.reduce(
          (accumulator, currentValue) =>
            accumulator +
            +currentValue["8"] +
            +currentValue["6"] +
            +currentValue["7"],
          0
        ) / eluData.length,
      perg: pergData[9],
    },
  };
}
