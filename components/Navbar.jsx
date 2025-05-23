import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-lg font-bold">Service Auto</h1>
        <div className="flex gap-6">
          <Link href="/">
            <span className="text-white hover:text-yellow-300 cursor-pointer font-medium">
              Toate Programările
            </span>
          </Link>
          <Link href="/records/finalizate">
            <span className="text-white hover:text-yellow-300 cursor-pointer font-medium">
              Finalizate
            </span>
          </Link>
          <Link href="/records/create">
            <span className="text-white hover:text-yellow-300 cursor-pointer font-medium">
              Adaugă Programare
            </span>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
