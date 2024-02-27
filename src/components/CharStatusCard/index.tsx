"use client";
import { charAtom } from "@/store";
import { useAtom } from "jotai";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default function CharStatusCard() {
  const [config, setConfig] = useAtom(charAtom);

  return (
    <Card className="p-4">
      <CardHeader className="px-0 py-2">
        <CardTitle>Status</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-2">
        <div className="flex gap-2">
          <div>ATK: {config.atk}</div>
        </div>
      </CardContent>
    </Card>
  );
}
