import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="max-w-[750px] mx-auto">
          <div className="md:ml-8 px-5 flex flex-col items-center text-center sm:flex-row sm:justify-between gap-3 sm:gap-0">
            <p>
              &copy; 2024 - {new Date().getFullYear()} Md Abdul Majid. All
              rights are reserved.
            </p>

            <ul className="flex">
              <li className="pr-3 border-r border-slate-400">
                <Link href="/" className="hover:text-green-500 underline">
                  Home
                </Link>
              </li>
              <li className="pl-3">
                <Link href="/about" className="hover:text-green-500 underline">
                  About
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </footer>
    </>
  );
}
