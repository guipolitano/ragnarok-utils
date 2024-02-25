import { IRefineStep } from "@/@types";
import { atom } from "jotai";
import { atomWithStorage } from "jotai/utils";

export const configAtom = atomWithStorage<{
  totalTries: number;
  bsbPrice: number;
  eluniumPrice: number;
  perg7Price: number;
  perg8Price: number;
  perg9Price: number;
}>(
  "@refine-config",
  {
    totalTries: 2000,
    bsbPrice: 2900000,
    eluniumPrice: 5500000,
    perg7Price: 15700000,
    perg8Price: 49000000,
    perg9Price: 143000000,
  },
  {
    getItem: (key, initialValue) => {
      const item = localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    },
    removeItem: (key) => localStorage.removeItem(key),
    setItem: (key, newValue) => {
      localStorage.setItem(key, JSON.stringify(newValue));
    },
  }
);

export const bsbDataAtom = atom<IRefineStep[]>([]);

export const eluniumDataAtom = atom<IRefineStep[]>([]);
