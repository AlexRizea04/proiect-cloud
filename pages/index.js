import Navbar from "@/components/Navbar";
import MainPage from "@/components/MainPage";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100 dark:bg-black">
      <Navbar />
      <MainPage />
    </div>
  );
}
