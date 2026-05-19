import Filter from "./Filter.tsx";

const Header = () => {
  return (
    <header className="mx-auto mt-12 w-[90%] space-y-4">
      <h1 className="title text-center text-7xl font-bold">
        Belajar HTML & CSS
      </h1>
      <p className="text-center text-2xl text-black/50">
        Materi dari dasar hingga mahir - klik topik untuk mulai belajar
      </p>
      <Filter />
    </header>
  );
};

export default Header;
