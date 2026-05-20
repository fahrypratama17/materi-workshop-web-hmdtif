import { MoveRight } from "lucide-react";

type CardProps = {
  id: number;
  icon: string;
  category: string;
  title: string;
  desc: string;
};

const Card = ({ icon, category, title, desc }: CardProps) => {
  return (
    <div
      className={`flex cursor-pointer flex-col items-start justify-between space-y-4 rounded-2xl border border-black/20 p-8 duration-300 hover:-translate-y-2 ${category === "HTML" ? "hover:border-orange-600" : "hover:border-blue-700"}`}
    >
      <img src={icon} alt={title} className="mb-4 h-16 w-16" />
      <p
        className={`rounded-2xl px-2 font-bold ${category === "HTML" ? "bg-orange-500/20 text-orange-600" : "bg-blue-500/20 text-blue-700"}`}
      >
        {category}
      </p>
      <h1 className="font-bold">{title}</h1>
      <p>{desc}</p>
      <button
        className={`flex items-center gap-2 ${category === "HTML" ? "text-orange-600" : "text-blue-700"}`}
      >
        Mulai Belajar
        <MoveRight className="h-4 w-3" />
      </button>
    </div>
  );
};

export default Card;
