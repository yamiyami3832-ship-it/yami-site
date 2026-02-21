import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-6">
        Yami Website 🔥
      </h1>

      <p className="text-lg text-gray-400 mb-8 max-w-xl">
        Welcome to my official website.
      </p>

      <div className="flex gap-4">
        <Link href="/about">
          <button className="px-6 py-3 bg-white text-black rounded-lg hover:bg-gray-200 transition">
            About Me
          </button>
        </Link>

        <button className="px-6 py-3 border border-white rounded-lg hover:bg-white hover:text-black transition">
          Projects
        </button>
      </div>
    </main>
  );
}