"use client";
import DataTable from "@/components/DataTable";
import { Card } from "@/components/ui/card";
import { simulateXRefinesBSB } from "@/services/refineBSB";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import InputsForm from "@/components/InputsForm";
import { useEffect } from "react";
import { configAtom, bsbDataAtom, eluniumDataAtom } from "@/store";
import { useAtom } from "jotai";
import useDebounce from "@/lib/debouce";
import { simulateXRefinesElunium } from "@/services/refineElunium";
import ResumeBoard from "@/components/ResumeBoard";

export default function Home() {
  const [config] = useAtom(configAtom);
  const [dataBSB, setDataBSB] = useAtom(bsbDataAtom);
  const [dataElunium, setDataElunium] = useAtom(eluniumDataAtom);
  const configDebounced = useDebounce(config, 1000);

  useEffect(() => {
    setDataBSB(
      simulateXRefinesBSB(configDebounced.bsbPrice, configDebounced.totalTries)
    );
  }, [configDebounced.bsbPrice, configDebounced.totalTries, setDataBSB]);

  useEffect(() => {
    setDataElunium(
      simulateXRefinesElunium(
        configDebounced.eluniumPrice,
        configDebounced.totalTries
      )
    );
  }, [
    configDebounced.eluniumPrice,
    configDebounced.totalTries,
    setDataElunium,
  ]);

  return (
    <main className="flex min-h-screen flex-col gap-6 md:p-12 p-6 bg-background">
      <h1 className="text-xl">Cálculo de Refinamento</h1>
      <InputsForm />
      <Tabs className="min-w-full" defaultValue="resume">
        <TabsList>
          <TabsTrigger value="resume">Resumo</TabsTrigger>
          <TabsTrigger value="bsb">Refino BSB</TabsTrigger>
          <TabsTrigger value="elunium">Refino E. Perfeito</TabsTrigger>
        </TabsList>
        <TabsContent value="resume">
          <ResumeBoard />
        </TabsContent>
        <TabsContent value="bsb">
          <Card className="max-h-[600px] overflow-y-auto">
            <DataTable data={dataBSB} />
          </Card>
        </TabsContent>
        <TabsContent value="elunium">
          <Card className="max-h-[600px] overflow-y-auto">
            <DataTable data={dataElunium} />
          </Card>
        </TabsContent>
      </Tabs>
    </main>
  );
}
