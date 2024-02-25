import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { IPergTable } from "@/@types";

const PergTable: React.FC<{ data: IPergTable }> = ({ data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="font-bold">Custo Medio x Pergaminho</TableHead>
          <TableHead className="font-bold">BSB</TableHead>
          <TableHead className="font-bold">Elunium</TableHead>
          <TableHead className="font-bold">Pergaminho</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow key="refine_6">
          <TableCell className="font-bold">+6 {">"} +7</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["6"].bsb)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["6"].elu)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["6"].perg)}
          </TableCell>
        </TableRow>
        <TableRow key="refine_7">
          <TableCell className="font-bold">+6 {">"} +8</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["7"].bsb)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["7"].elu)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["7"].perg)}
          </TableCell>
        </TableRow>
        <TableRow key="refine_8">
          <TableCell className="font-bold">+6 {">"} +9</TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["8"].bsb)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["8"].elu)}
          </TableCell>
          <TableCell>
            {new Intl.NumberFormat("pt-BR").format(+data["8"].perg)}
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
};

export default PergTable;
