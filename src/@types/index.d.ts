export interface IRefineStep {
  [key: string]: number | string;
}

export interface IRefineConfig {
  [key: number]: {
    successRate: number;
    bsbs: number;
  };
}

export interface IAtomConfig {
  totalTries: number;
  bsbPrice: number;
  eluniumPrice: number;
  perg7Price: number;
  perg8Price: number;
  perg9Price: number;
}

export interface IResumeTable {
  [key: number | string]: { cost: number; fails: number };
}

export interface IPergTable {
  [key: number | string]: { bsb: number; elu: number; perg: number };
}

export interface IPerg {
  7: number;
  8: number;
  9: number;
}
