import Link from "next/link";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";

const Navbar = () => {
  return (
    <nav className="bg-blue-900 w-full py-6 shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center px-6 gap-4 sm:gap-0">
        <h1 className="text-white text-3xl font-bold tracking-wide font-[Poppins]">
          Service Auto
        </h1>

        <div className="flex flex-wrap justify-center gap-4 sm:gap-6 items-center">
          <Link
            href="/"
            className="bg-blue-600 hover:bg-blue-700 hover:scale-105 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 text-base text-center"
          >
            Programări
          </Link>
          <Link
            href="/records/create"
            className="bg-green-600 hover:bg-green-700 hover:scale-105 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 text-base text-center"
          >
            Adaugă
          </Link>
          <Link
            href="/records/finalizate"
            className="bg-yellow-500 hover:bg-yellow-600 hover:scale-105 text-white font-medium py-2 px-6 rounded-full transition-all duration-300 text-base text-center"
          >
            Finalizate
          </Link>

          {/* Dacă nu ești logat – afișează butonul de autentificare */}
          <SignedOut>
            <SignInButton mode="modal">
              <button className="bg-white text-blue-900 font-semibold py-2 px-6 rounded-full hover:bg-gray-200 transition-all duration-300 shadow-sm">
                Autentificare
              </button>
            </SignInButton>
          </SignedOut>

          {/* Dacă ești logat – afișează meniul de utilizator */}
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
