import Card from "./Card.tsx";
import useFilterMateri from "../../hooks/useFilterMateri.ts";
import Filter from "./Filter.tsx";

const Materi = () => {
  const { category, setCategory, filteredData } = useFilterMateri();

  return (
    <>
      <Filter category={category} setCategory={setCategory} />

      <section className="mx-auto mt-12 mb-8 grid w-[90%] gap-8 gap-x-4 md:w-[70%] md:grid-cols-2 lg:grid-cols-3">
        {filteredData.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            icon={item.icon}
            category={item.category}
            title={item.title}
            desc={item.desc}
          />
        ))}
      </section>
    </>
  );
};

export default Materi;
