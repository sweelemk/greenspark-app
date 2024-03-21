export type Colors = "green" | "blue" | "beige" | "white" | "black";
export type Actions = "collects" | "plants" | "offsets";

export type TCard = {
  id: number;
  type: string;
  amount: number;
  action: string;
  active: boolean;
  linked: boolean;
  selectedColor: Colors;
};
