import { useState } from "react";
import { MateriData } from "../data/data.ts";

const useFilterMateri = () => {
  const [category, setCategory] = useState("Semua");

  const filteredData =
    category === "Semua"
      ? MateriData
      : MateriData.filter((item) => item.category === category);

  return {
    category,
    setCategory,
    filteredData,
  };
};

export default useFilterMateri;
