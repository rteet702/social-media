import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="fixed flex items-center justify-between w-full p-5 text-2xl bg-white shadow">
            <Link href="/">Robert Teets</Link>
            <Link href="/login">Login</Link>
        </nav>
    );
}
