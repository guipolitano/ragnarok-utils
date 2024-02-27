import { IEquipment } from "@/data/equiment_table";

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

export type JobNames =
  | "novice"
  | "swordsman"
  | "thief"
  | "archer"
  | "mage"
  | "acolyte"
  | "merchant"
  | "high_swordsman"
  | "high_thief"
  | "high_archer"
  | "high_mage"
  | "high_acolyte"
  | "high_merchant"
  | "knight"
  | "assassin"
  | "hunter"
  | "wizard"
  | "priest"
  | "blacksmith"
  | "crusader"
  | "rogue"
  | "bard"
  | "dancer"
  | "sage"
  | "monk"
  | "alchemist"
  | "high_novice"
  | "lord_knight"
  | "assassin_cross"
  | "sniper"
  | "high_wizard"
  | "high_priest"
  | "master_smith"
  | "paladin"
  | "stalker"
  | "clown"
  | "gypsy"
  | "scholar"
  | "champion"
  | "creator"
  | "super_novice"
  | "taekwon"
  | "taekwon_master"
  | "soul_linker"
  | "gunslinger"
  | "ninja";

export type WeaponsType =
  | "item_dagger"
  | "item_1h_sword"
  | "item_1h_axe"
  | "item_mace"
  | "item_1h_staff"
  | "item_2h_sword"
  | "item_1h_spear"
  | "item_2h_spear"
  | "item_2h_axe"
  | "item_katar"
  | "item_pistol"
  | "item_2h_staff"
  | "item_book"
  | "item_rifle"
  | "item_gatling_gun"
  | "item_shotgun"
  | "item_huuma"
  | "item_bow";

export type AttributesType = "str" | "agi" | "vit" | "int" | "dex" | "luk";

export type JobBonusTable = {
  [key in JobNames]: Array<[number, AttributesType]>;
};

export type IStats = {
  [key in AttributesType]: {
    base: number;
    cost: number;
    bonus: number;
    total: number;
  };
};

export interface ICard {
  id: number;
  name?: string;
}

export interface ICharEquipment {
  equipment?: IEquipment;
  card?: ICard;
  refine?: number;
}

export type IWeaponTypes =
  | "dagger"
  | "1h_sword"
  | "2h_sword"
  | "1h_spear"
  | "2h_spear"
  | "1h_axe"
  | "2h_axe"
  | "mace"
  | "1h_staff"
  | "2h_staff"
  | "bow"
  | "claw"
  | "instrument"
  | "whip"
  | "book"
  | "katar"
  | "pistol"
  | "rifle"
  | "gatling_gun"
  | "shotgun"
  | "grenade_launcher"
  | "huuma";

export type IEquipmentPositions =
  | "headgear_top"
  | "headgear_mid"
  | "headgear_bot"
  | "armor"
  | "footgear"
  | "garment"
  | "weapon"
  | "shield";

export interface IChar {
  name?: string;
  hp: number;
  sp: number;
  aspd: number;
  def: number;
  mdef: number;
  atk: number;
  matk: number;
  hit: number;
  critical: number;
  job: JobNames;
  base_lv: number;
  total_points: number;
  remaining_points: number;
  job_lv: number;
  stats: IStats;
  equipment: { [key in IEquipmentPositions]?: ICharEquipment };
}

export type JobDataTable = {
  [key in JobNames]: {
    name: string;
    rebirth: boolean;
    category:
      | "novice"
      | "first_job"
      | "second_job"
      | "first_job_trans"
      | "second_job_trans"
      | "expanded";
    max_job_lv: number;
    prev_job?: JobNames | null;
    base_hp: number[];
    base_sp?: number[];
    sp_mod?: number[];
    base_aspd?: number;
    weapon_aspd_penalty?: {
      [key in WeaponsType]: number;
    };
    shield_aspd_penaly?: number;
  };
};

export interface IOption {
  label: string;
  value: string | number;
}

export interface IGroupOption {
  label: string;
  options: IOption[];
}
