import { IRefineConfig } from "@/@types";

export function isRefineSuccess(successRate: number) {
    const random = Math.random();
    return random < successRate;
}

export const RefineConfig: IRefineConfig = {
  6: {
    successRate: 0.7,
    bsbs: 4,
  },
  7: {
    successRate: 0.7,
    bsbs: 4,
  },
  8: {
    successRate: 0.4,
    bsbs: 6,
  },
  9: {
    successRate: 0.2,
    bsbs: 6,
  },
}