import simulator from "@/services/statsCalc";
import { charAtom } from "@/store";
import { useAtom } from "jotai";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

export default function StatsInputs() {
  const [config, setConfig] = useAtom(charAtom);
  return (
    <>
      <div className="flex gap-2">
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            STR
          </Label>
          <div className="flex items-center gap-1">
            <Input
              className="max-w-16"
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.stats.str.base}
              onChange={(e) => {
                simulator.updateBaseAtribute("str", +e.target.value);
                setConfig(simulator.getChar());
              }}
            />
            <span>+{config.stats.str.bonus}</span>
            <span>({config.stats.str.cost})</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            AGI
          </Label>
          <div className="flex items-center gap-1">
            <Input
              className="max-w-16"
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.stats.agi.base}
              onChange={(e) => {
                simulator.updateBaseAtribute("agi", +e.target.value);
                setConfig(simulator.getChar());
              }}
            />
            <span>+{config.stats.agi.bonus}</span>
            <span>({config.stats.agi.cost})</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            VIT
          </Label>
          <div className="flex items-center gap-1">
            <Input
              className="max-w-16"
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.stats.vit.base}
              onChange={(e) => {
                simulator.updateBaseAtribute("vit", +e.target.value);
                setConfig(simulator.getChar());
              }}
            />
            <span>+{config.stats.vit.bonus}</span>
            <span>({config.stats.vit.cost})</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            DEX
          </Label>
          <div className="flex items-center gap-1">
            <Input
              className="max-w-16"
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.stats.dex.base}
              onChange={(e) => {
                simulator.updateBaseAtribute("dex", +e.target.value);
                setConfig(simulator.getChar());
              }}
            />
            <span>+{config.stats.dex.bonus}</span>
            <span>({config.stats.dex.cost})</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            INT
          </Label>
          <div className="flex items-center gap-1">
            <Input
              className="max-w-16"
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.stats.int.base}
              onChange={(e) => {
                simulator.updateBaseAtribute("int", +e.target.value);
                setConfig(simulator.getChar());
              }}
            />
            <span>+{config.stats.int.bonus}</span>
            <span>({config.stats.int.cost})</span>
          </div>
        </div>
        <div className="flex flex-col space-y-1">
          <Label className="text-sm" htmlFor="job">
            LUK
          </Label>
          <div className="flex items-center gap-1">
            <Input
              className="max-w-16"
              placeholder="1-99"
              type="number"
              max={99}
              defaultValue={config.stats.luk.base}
              onChange={(e) => {
                simulator.updateBaseAtribute("luk", +e.target.value);
                setConfig(simulator.getChar());
              }}
            />
            <span>+{config.stats.luk.bonus}</span>
            <span>({config.stats.luk.cost})</span>
          </div>
        </div>
      </div>
      <div className="flex gap-2">
        Pontos restantes:{" "}
        <span
          data-remaining={config.remaining_points < 0}
          className="data-[remaining=true]:text-red-500"
        >
          {config.remaining_points}
        </span>
      </div>
    </>
  );
}
