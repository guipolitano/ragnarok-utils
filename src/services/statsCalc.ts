import { AttributesType, IChar, JobNames } from "@/@types";
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
    };
  }

  recalc() {
    this.resetStatsBonus();
    this.calcStatsBonus();
    this.calcStatsTotal();
    this.calcPoints();
    this.calcStatsCost();
  }

  updateBaseAtribute(attr: AttributesType, value: number) {
    this.char.stats[attr].base = value;

    this.recalc();
  }

  private calcStatsBonus() {
    jobTable[this.char.job]
      .filter((jt) => jt[0] <= this.char.job_lv)
      .map((jt) => {
        console.log("entrou");
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
}

const simulator = new Simulator();

export default simulator;
