import { MoveLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { MateriData } from "../data/data.ts";

const Header = () => {
  const navigate = useNavigate();

  return (
    <section className="p-8">
      <button
        className="mb-8 flex cursor-pointer gap-2 rounded-xl border border-black/20 px-4 py-2 duration-300 hover:scale-105"
        onClick={() => navigate("/")}
      >
        <MoveLeft className="w-4" />
        <p>Kembali ke Daftar materi</p>
      </button>
      {MateriData.map((item) => (
        <div
          key={item.id}
          className="flex flex-col gap-4 rounded-2xl border p-8"
        >
          <p className="font-bold">{item.category}</p>
          <div className="flex items-center">
            <img src={item.icon} alt={item.title} className="h-16 w-16" />
            <h1 className="text-4xl font-bold">{item.title}</h1>
          </div>
          <p>{item.desc}</p>
        </div>
      ))}
    </section>
  );
};

export default Header;
