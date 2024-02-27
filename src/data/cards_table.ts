import { ICard, IOption } from "@/@types";

export const headgear_card: ICard[] = [
  {
    id: 27162,
    name: "Gorynych",
  },
];

export const headgear_card_options: IOption[] = headgear_card.map((hg) => ({
  label: `Carta ${hg.name}`,
  value: hg.id,
}));
