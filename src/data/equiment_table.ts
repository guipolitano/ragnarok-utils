import { AttributesType, IOption } from "@/@types";
export type IRaces = "angel";
export type IMonsterType = "normal" | "boss" | "player";
export type IDamageTypes = "physical" | "physical_ranged" | "skill";
export type IBonusTypes =
  | "critical_chance"
  | "critical_damage"
  | "per_skill_level";

export interface IDamage {
  type: IDamageTypes;
  damage?: number;
  racial_bonus?: {
    damage: number;
    race: IRaces;
  };
  skill?: string;
}

export interface IBonusPerRefine {
  chance?: number;
  damage?: IDamage;
  type?: IBonusTypes;
  value?: number;
}

export interface ITransformation {
  chance: number;
  bonus_per_refine?: {};
  transformed_bonus: {
    bonus_per_refine: IBonusPerRefine[];
  };
}

export interface IRefineBonus {
  refine: number;
  type?: IBonusTypes;
  skill?: string;
  each_level?: number;
  variable_cast?: number;
  after_cast?: number;
  ignore_def?: {
    types: IMonsterType[];
    value: number;
  };
  damage?: IDamage[];
}

export interface IEquipment {
  id: number;
  name: string;
  slots: number;
  def: number;
  description?: string;
  stats?: Partial<{ [key in AttributesType]: number }>;
  transformation?: ITransformation;
  damage?: IDamage[];
  refine_bonus?: IRefineBonus[];
  indestructible?: boolean;
}

export const equipment_head_top: IEquipment[] = [
  {
    id: 19263,
    name: "Elmo do Xogunato",
    slots: 0,
    description: "",
    def: 5,
    stats: {
      agi: 2,
      luk: 2,
    },
    transformation: {
      chance: 0.04,
      bonus_per_refine: {
        chance: 0.004,
        damage: {
          type: "physical",
          racial_bonus: 0.01,
          race: "angel",
        },
      },
      transformed_bonus: {
        bonus_per_refine: [
          {
            type: "critical_chance",
            value: 10,
          },
          {
            type: "critical_damage",
            value: 0.1,
          },
        ],
      },
    },
  },
  {
    id: 17656,
    name: "Elmo do Xogunato",
    slots: 1,
    description: "",
    def: 5,
    stats: {
      agi: 2,
      luk: 2,
    },
    transformation: {
      chance: 0.04,
      bonus_per_refine: {
        chance: 0.004,
        damage: {
          type: "physical",
          racial_bonus: 0.01,
          race: "angel",
        },
      },
      transformed_bonus: {
        bonus_per_refine: [
          {
            type: "critical_chance",
            value: 10,
          },
          {
            type: "critical_damage",
            value: 0.1,
          },
        ],
      },
    },
  },
  {
    id: 5905,
    name: "Chapéu do Maestro",
    slots: 1,
    description: "",
    def: 3,
    stats: {
      dex: 5,
    },
    damage: [
      {
        type: "physical_ranged",
        damage: 0.1,
      },
      {
        type: "skill",
        skill: "arrow_storm",
        damage: 0.15,
      },
    ],
    refine_bonus: [
      {
        refine: 7,
        type: "per_skill_level",
        skill: "music_lessons",
        each_level: 1,
        variable_cast: 0.04,
        after_cast: 0.02,
        ignore_def: {
          types: ["normal", "boss", "player"],
          value: 0.1,
        },
      },
      {
        refine: 10,
        damage: [
          {
            type: "physical_ranged",
            damage: 0.25,
          },
        ],
      },
    ],
    indestructible: true,
  },
];

export const headgear_top_options: IOption[] = equipment_head_top.map((hg) => ({
  label: `${hg.name} [${hg.slots}]`,
  value: hg.id,
}));

export const equipment_head_mid: IEquipment[] = [
  {
    id: 19083,
    name: "Máscara Dourada",
    slots: 0,
    description: "",
    def: 1,
    stats: {
      vit: 5,
    },
  },
  {
    id: 2202,
    name: "Óculos Escuros",
    slots: 1,
    description: "",
    def: 0,
  },
];

export const headgear_mid_options: IOption[] = equipment_head_mid.map((hg) => ({
  label: `${hg.name} [${hg.slots}]`,
  value: hg.id,
}));
