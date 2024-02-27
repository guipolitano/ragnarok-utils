"use client";
import { JobNames } from "@/@types";
import { jobData } from "@/data/job_table";
import simulator from "@/services/statsCalc";
import { charAtom } from "@/store";
import { Label } from "@radix-ui/react-label";
import { useAtom } from "jotai";
import SelectInput from "../SelectInput";
import StatsInputs from "../StatsInputs";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Input } from "../ui/input";

const options = [
  {
    label: "Aprendiz",
    options: Object.keys(jobData)
      .filter((job: string) => jobData[job as JobNames].category === "novice")
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Primeira Classe",
    options: Object.keys(jobData)
      .filter(
        (job: string) => jobData[job as JobNames].category === "first_job"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Segunda Classe",
    options: Object.keys(jobData)
      .filter(
        (job: string) => jobData[job as JobNames].category === "second_job"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Primeira Classe T.",
    options: Object.keys(jobData)
      .filter(
        (job: string) => jobData[job as JobNames].category === "first_job_trans"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Segunda Classe T.",
    options: Object.keys(jobData)
      .filter(
        (job: string) =>
          jobData[job as JobNames].category === "second_job_trans"
      )
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
  {
    label: "Expandidas",
    options: Object.keys(jobData)
      .filter((job: string) => jobData[job as JobNames].category === "expanded")
      .map((job: string) => ({
        label: jobData[job as JobNames].name,
        value: job,
      })),
  },
];

export default function BasicCharCard() {
  const [config, setConfig] = useAtom(charAtom);

  return (
    <Card className="p-4">
      <CardHeader className="px-0 py-2">
        <CardTitle>Básico</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div className="flex flex-col space-y-1">
            <Label className="text-sm" htmlFor="job">
              Classe
            </Label>
            <SelectInput
              options={options}
              value={config.job}
              onSelect={(e) => {
                simulator.setJob(e as JobNames);
                setConfig(simulator.getChar());
              }}
            />
          </div>
          <div className="flex flex-col space-y-1 max-w-[90px]">
            <Label className="text-sm" htmlFor="job">
              Lv. Base
            </Label>
            <Input
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.base_lv}
              onChange={(e) => {
                simulator.setBaseLevel(+e.target.value);
                setConfig(simulator.getChar());
              }}
            />
          </div>
          <div className="flex flex-col space-y-1 max-w-[90px]">
            <Label className="text-sm" htmlFor="job">
              Lv. Classe
            </Label>
            <Input
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.job_lv}
              onChange={(e) => {
                simulator.setJobLevel(+e.target.value);
                setConfig(simulator.getChar());
              }}
            />
          </div>
        </div>
        <StatsInputs />
      </CardContent>
    </Card>
  );
}
