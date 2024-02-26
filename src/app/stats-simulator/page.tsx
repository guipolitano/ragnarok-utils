import { Simulator } from "@/services/statsCalc";

export default function page() {
  const simulator = new Simulator();
  simulator.setJob("taekwon");
  simulator.setJobLevel(50);
  simulator.setBaseLevel(99);
  simulator.updateBaseAtribute("str", 99)
  console.log(simulator.getChar())
  // console.log(simulator.getStats())
  return (
    <div>page</div>
  )
}
