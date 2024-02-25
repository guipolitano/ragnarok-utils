"use client";
import React from "react";
import ResumeTable from "../ResumeTable";
import { useAtom } from "jotai";
import { bsbDataAtom, configAtom, eluniumDataAtom } from "@/store";
import { generateResume, generateResumePerg } from "@/lib/utils";
import { Card, CardHeader, CardTitle } from "../ui/card";
import PergTable from "../PergTable";

const ResumeBoard: React.FC = () => {
  const [config] = useAtom(configAtom);
  const [dataBSB] = useAtom(bsbDataAtom);
  const [dataElunium] = useAtom(eluniumDataAtom);
  return (
    <div className="flex gap-6 md:flex-row flex-col">
      <Card>
        <CardHeader className="p-2">
          <CardTitle>Média BSB</CardTitle>
        </CardHeader>
        <ResumeTable data={generateResume(dataBSB)} />
      </Card>
      <Card>
        <CardHeader className="p-2">
          <CardTitle>Média E. Perfeito</CardTitle>
        </CardHeader>
        <ResumeTable data={generateResume(dataElunium)} />
      </Card>
      <Card>
        <CardHeader className="p-2">
          <CardTitle>Minério x Pergaminhos</CardTitle>
        </CardHeader>
        <PergTable
          data={generateResumePerg(dataBSB, dataElunium, {
            "7": config.perg7Price,
            "8": config.perg8Price,
            "9": config.perg9Price,
          })}
        />
      </Card>
    </div>
  );
};

export default ResumeBoard;
