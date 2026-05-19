type CardProps = {
  id: number;
  icon: string;
  category: string;
  title: string;
  desc: string;
};

const Card = ({ icon, category, title, desc }: CardProps) => {
  return (
    <div className="cursor-pointer rounded-2xl border border-black/20 p-8 duration-300 hover:-translate-y-2">
      <img src={icon} alt={title} className="mb-4 h-16 w-16" />
      <p>{category}</p>
      <h1>Title</h1>
      <p>{desc}</p>
      <button>Mulai Belajar</button>
    </div>
  );
};

export default Card;
