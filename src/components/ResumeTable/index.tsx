import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IResumeTable } from "@/@types";

const ResumeTable: React.FC<{ data: IResumeTable }> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Refino</TableHead>
          <TableHead className="font-bold">Custo Médio</TableHead>
          <TableHead className="font-bold">
            Média de falhas por refino
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow key="refine_6">
          <TableCell className="font-bold">+6 {">"} +7</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["6"].cost)}
          </TableCell>
          <TableCell>{+data["6"].fails}</TableCell>
        </TableRow>
        <TableRow key="refine_7">
          <TableCell className="font-bold">+7 {">"} +8</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["7"].cost)}
          </TableCell>
          <TableCell>{+data["7"].fails}</TableCell>
        </TableRow>
        <TableRow key="refine_8">
          <TableCell className="font-bold">+8 {">"} +9</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["8"].cost)}
          </TableCell>
          <TableCell>{+data["8"].fails}</TableCell>
        </TableRow>
        <TableRow key="refine_total">
          <TableCell className="font-bold">Total (+6 até +10)</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["total"].cost)}
          </TableCell>
          <TableCell>{+data["total"].fails}</TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default ResumeTable;
