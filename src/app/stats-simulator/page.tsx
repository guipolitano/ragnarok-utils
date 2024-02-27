import BasicCharCard from "@/components/BasicCharCard";
import CharStatusCard from "@/components/CharStatusCard";
import EquipmentCard from "@/components/EquipmentCard";

export default function StatsSimulator() {
  return (
    <main className="flex min-h-screen flex-col gap-6 md:p-12 p-6 bg-background">
      <h1 className="text-xl">Construtor de Builds RagnaTales</h1>
      <div className="flex gap-4">
        <BasicCharCard />
        <CharStatusCard />
      </div>
      <div>
        <EquipmentCard />
      </div>
    </main>
  );
}
