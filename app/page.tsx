import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Home | Md Abdul Majid - Software Engineer",
};

export default function Home() {
  return (
    <>
      {/* about me */}
      <section className="section">
        <div className="flex justify-center">
          <Image
            src="/abdulmajid.jpg"
            alt="Abdul Majid"
            width={250}
            height={250}
            className="rounded-full shadow-xl w-[250px] h-[250px] border-[0.5rem] border-slate-100"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-playfair-display uppercase text-2xl font-medium">
            MD Abdul Majid
          </h2>
          <p>Software Engineer</p>
          <p>
            <a href="https://nogorsolutions.com" className="text-purple-800 font-black hover:underline">
              @Nogor Solutions Limited
            </a>
          </p>
        </div>
        <div className="font-libre-baskerville text-lg text-slate-900 mt-7">
          <p className="mb-5">
            I am a backend-heavy full-stack developer and a self-learner. I love
            to share my knowledge, mostly technical. I enjoy learning new things
            and building something new. I am experienced for more than four
            years and working with ...{" "}
            <Link href="/about" className="text-purple-800 underline">
              read more
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
