import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IRefineStep } from "@/@types";

const DataTable: React.FC<{ data: IRefineStep[] }> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">+6 {">"} +7</TableHead>
          <TableHead className="font-bold">+7 {">"} +8</TableHead>
          <TableHead className="font-bold">+8 {">"} +9</TableHead>
          <TableHead className="font-bold">+9 {">"} +10</TableHead>
          <TableHead className="font-bold">Falhas +6 {">"} +7</TableHead>
          <TableHead className="font-bold">Falhas +7 {">"} +8</TableHead>
          <TableHead className="font-bold">Falhas +8 {">"} +9</TableHead>
          <TableHead className="font-bold">Falhas +9 {">"} +10</TableHead>
          <TableHead className="font-bold">Total de Falhas</TableHead>
          <TableHead className="font-bold">Custo p/ Tentativa</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody className="max-h-[400px]">
        {data.map((data) => (
          <TableRow key={data.id}>
            <TableCell>
              {new Intl.NumberFormat("pt-BR").format(+data["6"])}
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("pt-BR").format(+data["7"])}
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("pt-BR").format(+data["8"])}
            </TableCell>
            <TableCell>
              {new Intl.NumberFormat("pt-BR").format(+data["9"])}
            </TableCell>
            <TableCell>{data["falhas-6"]}</TableCell>
            <TableCell>{data["falhas-7"]}</TableCell>
            <TableCell>{data["falhas-8"]}</TableCell>
            <TableCell>{data["falhas-9"]}</TableCell>
            <TableCell>{data["falhas"]}</TableCell>
            <TableCell>
              {new Intl.NumberFormat("pt-BR").format(+data["custoTotal"])}
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default DataTable;
