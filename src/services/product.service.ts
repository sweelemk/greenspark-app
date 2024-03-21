import { TCard } from "../types";

export const getWidgets = async (): Promise<TCard[]> => {
  const response = await fetch(
    `${import.meta.env.VITE_API_URL}product-widgets`
  );
  return await response.json();
};
