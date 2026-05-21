type FilterProps = {
  category: string;
  setCategory: (value: string) => void;
};

const filter = ({ category, setCategory }: FilterProps) => {
  const filters = ["Semua", "HTML", "CSS"];

  return (
    <section className="mt-12 flex items-center justify-center gap-8">
      {filters.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={`filter ${category === item ? "bg-black text-white" : ""}`}
        >
          {item}
        </button>
      ))}
    </section>
  );
};

export default filter;
