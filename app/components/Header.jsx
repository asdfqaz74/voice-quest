import Link from "next/link";

export default function Header() {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between p-4 bg-gray-800 text-white z-50">
      <Link href="/" className="text-2xl font-bold">
        Voice Quest
      </Link>
    </header>
  );
}
