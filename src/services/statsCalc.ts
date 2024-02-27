"use client";

import {
  AttributesType,
  ICard,
  IChar,
  IEquipmentPositions,
  JobNames,
} from "@/@types";

import { IEquipment, weapon_atk_variance } from "@/data/equiment_table";
import { jobData, jobTable } from "@/data/job_table";
import {
  point_consumptions,
  reward_points_table,
  reward_rebirth_points,
} from "@/data/stat_table";

class Simulator {
  char: IChar = {} as IChar;
  constructor() {
    this.char = {
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
      equipment: {
        headgear_top: undefined,
        weapon: undefined,
      },
    };
    if (typeof window !== "undefined") {
      this.char = JSON.parse(localStorage.getItem("@char-build") || "{}");
    }
    this.recalc();
  }

  recalc() {
    this.resetStatsBonus();
    this.calcStatsBonus();
    this.calcStatsTotal();
    this.calcStatsCost();
    this.calcPoints();
    this.calcAtk();
  }

  updateBaseAtribute(attr: AttributesType, value: number) {
    this.char.stats[attr].base = value;

    this.recalc();
  }

  private calcStatsBonus() {
    jobTable[this.char.job]
      .filter((jt) => jt[0] <= this.char.job_lv)
      .map((jt) => {
        this.char.stats[jt[1]].bonus += 1;
      });
  }

  private calcPoints() {
    const totalPoints = reward_points_table[this.char.base_lv];
    let consumedPoints = 0;
    this.char.total_points =
      totalPoints + (this.isRebirth() ? reward_rebirth_points : 0);
    Object.keys(this.char.stats).map((stat: string) => {
      consumedPoints +=
        point_consumptions[this.char.stats[stat as AttributesType].base];
    });
    this.char.remaining_points = this.char.total_points - consumedPoints;
  }

  private calcAtk() {
    const status_atk = this.calcStatusAtk();
    const weapon_atk = this.calcWeaponAtk();
    console.log(status_atk);
  }

  private calcWeaponAtk() {
    if (this.char.equipment.weapon) {
      const base_weapon_atk = this.char.equipment.weapon?.equipment?.atk || 0;
      const atk_variance = this.floor(
        (base_weapon_atk *
          weapon_atk_variance[
            this.char.equipment.weapon.equipment?.lv as 1 | 2 | 3 | 4
          ]) /
          100
      );
      const stat_bonus = this.isRanged()
        ? base_weapon_atk * this.floor(this.char.stats.dex.total / 200)
        : base_weapon_atk * this.floor(this.char.stats.str.total / 200);
      this.char.atk = (base_weapon_atk || 0) + stat_bonus;
    }
  }

  private calcStatusAtk() {
    if (this.isRanged()) {
      return this.floor(
        this.floor(this.char.base_lv / 4) +
          this.floor(this.char.stats.str.total / 5) +
          this.char.stats.dex.total +
          this.floor(this.char.stats.luk.total / 3)
      );
    }
    return this.floor(
      this.floor(this.char.base_lv / 4) +
        this.char.stats.str.total +
        this.floor(this.char.stats.dex.total / 5) +
        this.floor(this.char.stats.luk.total / 3)
    );
  }

  private isRanged() {
    return [
      "bow",
      "instrument",
      "whip",
      "pistol",
      "rifle",
      "gatling_gun",
      "shotgun",
      "grenade_launcher",
    ]?.includes(this.char.equipment.weapon?.equipment?.weapon_type || "");
  }

  private isRebirth() {
    return jobData[this.char.job].rebirth;
  }

  private calcStatsCost() {
    Object.keys(this.char.stats).map((stat: string) => {
      this.char.stats[stat as AttributesType].cost = Math.floor(
        (this.char.stats[stat as AttributesType].base - 1) / 10 + 2
      );
    });
  }

  private calcStatsTotal() {
    Object.keys(this.char.stats).map((stat: string) => {
      this.char.stats[stat as AttributesType].total =
        this.char.stats[stat as AttributesType].base +
        this.char.stats[stat as AttributesType].bonus;
    });
  }

  setEquipmentRefine(refine: number, position: IEquipmentPositions) {
    this.char.equipment[position] = {
      ...this.char.equipment[position],
      refine,
    };
    this.recalc();
  }

  setEquipment(equip: IEquipment, position: IEquipmentPositions) {
    this.char.equipment[position] = {
      ...this.char.equipment[position],
      equipment: equip,
    };
    this.recalc();
  }

  setEquipmentCard(card: ICard, position: IEquipmentPositions) {
    this.char.equipment[position] = {
      ...this.char.equipment[position],
      card,
    };
    this.recalc();
  }

  setJob(job: JobNames) {
    this.char.job = job;
    this.recalc();
  }

  setBaseLevel(level: number) {
    this.char.base_lv = level;
    this.recalc();
  }

  setJobLevel(level: number) {
    this.char.job_lv = level;
    this.recalc();
  }

  getStats() {
    return this.char.stats;
  }

  getChar() {
    this.recalc();
    return this.char;
  }

  getAttribute(attribute: AttributesType) {
    return this.char.stats[attribute];
  }

  private resetStatsBonus() {
    this.char = {
      ...this.char,
      stats: {
        str: {
          base: this.char.stats.str.base,
          cost: this.char.stats.str.cost,
          bonus: 0,
          total: 0,
        },
        agi: {
          base: this.char.stats.agi.base,
          cost: this.char.stats.agi.cost,
          bonus: 0,
          total: 0,
        },
        vit: {
          base: this.char.stats.vit.base,
          cost: this.char.stats.vit.cost,
          bonus: 0,
          total: 0,
        },
        int: {
          base: this.char.stats.int.base,
          cost: this.char.stats.int.cost,
          bonus: 0,
          total: 0,
        },
        dex: {
          base: this.char.stats.dex.base,
          cost: this.char.stats.dex.cost,
          bonus: 0,
          total: 0,
        },
        luk: {
          base: this.char.stats.luk.base,
          cost: this.char.stats.luk.cost,
          bonus: 0,
          total: 0,
        },
      },
    };
  }

  private floor(value: number) {
    return Math.floor(value);
  }
}

const simulator = new Simulator();

export default simulator;
