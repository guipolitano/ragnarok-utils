import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import HeadgearMid from "./HeadgearMid";
import HeadgearTop from "./HeadgearTop";

const EquipmentCard: React.FC = () => {
  return (
    <Card className="p-4">
      <CardHeader className="px-0 py-2">
        <CardTitle>Equipamentos</CardTitle>
      </CardHeader>
      <CardContent className="space-y-2">
        <div className="flex flex-col gap-2">
          <HeadgearTop />
        </div>
        <div className="flex flex-col gap-2">
          <HeadgearMid />
        </div>
      </CardContent>
    </Card>
  );
};

export default EquipmentCard;
