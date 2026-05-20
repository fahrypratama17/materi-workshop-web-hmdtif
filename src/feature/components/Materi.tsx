import Card from "./Card.tsx";
import { MateriData } from "../data/card/data.ts";

const Materi = () => {
  return (
    <section className="mx-auto mt-12 mb-8 grid w-[90%] gap-8 gap-x-4 md:w-[70%] md:grid-cols-2 lg:grid-cols-3">
      {MateriData.map((item) => (
        <Card
          id={item.id}
          icon={item.icon}
          category={item.category}
          title={item.title}
          desc={item.desc}
        />
      ))}
    </section>
  );
};

export default Materi;
