import Image from "next/image";
import type { Metadata } from "next";

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
            <a
              href="https://nogorsolutions.com"
              target="_blank"
              className="hover:underline"
            >
              @Nogor Solutions Limited
            </a>
          </p>
        </div>
        <div className="font-libre-baskerville text-lg text-slate-900 mt-7">
          <p className="mb-5">
            I am a backend-heavy full-stack developer and a self-learner. I am
            experienced for more than four years and working with{" "}
            <a
              href="https://laravel.com"
              target="_blank"
              className="font-bold underline"
            >
              Laravel
            </a>
            ,{" "}
            <a
              href="https://laravel-livewire.com"
              target="_blank"
              className="font-bold underline"
            >
              Livewire
            </a>
            ,{" "}
            <a
              href="https://jquery.com/"
              target="_blank"
              className="font-bold underline"
            >
              jQuery
            </a>
            , and{" "}
            <a
              href="https://alpinejs.dev/"
              target="_blank"
              className="font-bold underline"
            >
              AlpineJS
            </a>
            . I am also experienced in{" "}
            <a
              href="https://vuejs.org/"
              target="_blank"
              className="font-bold underline"
            >
              VueJS
            </a>
            ,{" "}
            <a
              href="https://react.dev/"
              target="_blank"
              className="font-bold underline"
            >
              ReactJS
            </a>
            ,{" "}
            <a
              href="https://laravel.com/docs/10.x/queues"
              target="_blank"
              className="font-bold underline"
            >
              Queue
            </a>
            ,{" "}
            <a
              href="https://laravel.com/docs/10.x/scheduling"
              target="_blank"
              className="font-bold underline"
            >
              Task Scheduling
            </a>
            , VPS Server, CI/CD, and Docker (Basic). I love the beauty of{" "}
            <a
              href="https://laravel.com/docs/10.x/eloquent"
              target="_blank"
              className="font-bold underline"
            >
              Laravel ORM
            </a>
            .
          </p>
        </div>
      </section>
    </>
  );
}
