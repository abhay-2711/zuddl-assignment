import Board from "@/components/Board";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="mt-20">
      <Board />
      </div>
    </main>
  );
}
