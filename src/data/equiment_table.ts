import { AttributesType, IOption, IWeaponTypes } from "@/@types";
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
  atk?: number;
  matk?: number;
  def?: number;
  description?: string;
  stats?: Partial<{ [key in AttributesType]: number }>;
  transformation?: ITransformation;
  damage?: IDamage[];
  refine_bonus?: IRefineBonus[];
  indestructible?: boolean;
  weapon_type?: IWeaponTypes;
  lv?: 1 | 2 | 3 | 4;
}

export const weapon_refine_bonus = {
  1: {
    raw: [
      0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20, 22, 24, 26, 28, 30, 48, 51, 54, 57,
      60,
    ],
    min: [
      0, 2, 4, 6, 8, 10, 12, 14, 17, 19, 21, 23, 25, 27, 29, 31, 49, 52, 55, 58,
      61,
    ],
    max: [
      0, 2, 4, 6, 8, 10, 12, 14, 19, 24, 29, 34, 39, 44, 49, 54, 75, 81, 87, 93,
      99,
    ],
  },
  2: {
    raw: [
      0, 3, 6, 9, 12, 15, 18, 21, 24, 27, 30, 33, 36, 39, 42, 45, 80, 85, 90,
      95, 100,
    ],
    min: [
      0, 3, 6, 9, 12, 15, 18, 22, 25, 28, 31, 34, 37, 40, 43, 46, 81, 86, 91,
      96, 101,
    ],
    max: [
      0, 3, 6, 9, 12, 15, 18, 26, 34, 42, 50, 58, 66, 74, 82, 90, 130, 140, 150,
      160, 170,
    ],
  },
  3: {
    raw: [
      0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70, 75, 112, 119,
      126, 133, 140,
    ],
    min: [
      0, 5, 10, 15, 20, 25, 31, 36, 41, 46, 51, 56, 61, 66, 71, 76, 113, 120,
      127, 134, 141,
    ],
    max: [
      0, 5, 10, 15, 20, 25, 38, 51, 64, 77, 90, 103, 116, 129, 142, 155, 200,
      215, 230, 245, 260,
    ],
  },
  4: {
    raw: [
      0, 7, 14, 21, 28, 35, 42, 49, 56, 63, 70, 77, 84, 91, 98, 105, 160, 170,
      180, 190, 200,
    ],
    min: [
      0, 7, 14, 21, 28, 36, 43, 50, 57, 64, 71, 78, 85, 92, 99, 106, 161, 171,
      181, 191, 201,
    ],
    max: [
      0, 7, 14, 21, 28, 49, 70, 91, 112, 133, 154, 175, 196, 217, 238, 259, 328,
      352, 376, 400, 424,
    ],
  },
};

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

export const weapon_atk_variance = { 1: 5, 2: 10, 3: 15, 4: 20 };

export const weapon_matk_variance = { 1: 10, 2: 20, 3: 30, 4: 40 };
