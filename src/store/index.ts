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

export const charAtom = atomWithStorage("@char-build", {
  job: "novice",
  base_lv: 1,
  job_lv: 1,
  hp: 0,
  sp: 0,
  aspd: 0,
  def: 0,
  mdef: 0,
  atk: 0,
  matk: 0,
  hit: 0,
  critical: 0,
  total_points: 0,
  remaining_points: 0,
  stats: {
    str: {
      base: 1,
      cost: 1,
      bonus: 0,
      total: 0,
    },
    agi: {
      base: 1,
      cost: 1,
      bonus: 0,
      total: 0,
    },
    vit: {
      base: 1,
      cost: 1,
      bonus: 0,
      total: 0,
    },
    int: {
      base: 1,
      cost: 1,
      bonus: 0,
      total: 0,
    },
    dex: {
      base: 1,
      cost: 1,
      bonus: 0,
      total: 0,
    },
    luk: {
      base: 1,
      cost: 1,
      bonus: 0,
      total: 0,
    },
  },
});
