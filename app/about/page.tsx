import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Md Abdul Majid - Software Engineer",
};

export default function About() {
  return (
    <>
      {/* about me */}
      <section className="section text-sm">
        <div className="text-slate-900 mt-7">
          <p className="mb-5">Hi there 👋,</p>
          <p className="mb-5">I&apos;m Md Abdul Majid.</p>
          <p className="mb-5">
            I&apos;m working as a Software Engineer focused on backend and
            frontend. I&apos;m passionate about PHP and JavaScript. If you are
            interested,{" "}
            <a href="https://linkedin.com/in/abdulmajidcse" className="underline hover:theme-text-color">
              send me a message
            </a>
            .{/* If you are interested, here&apos;s my CV ⏬. */}
          </p>
          <p className="mb-5">
            I am a backend-heavy full-stack developer and a self-learner. I am
            experienced for more than four years and working with{" "}
            <a
              href="https://laravel.com"
              className="theme-text-color font-bold hover:underline"
            >
              Laravel
            </a>
            ,{" "}
            <a
              href="https://laravel-livewire.com"
              className="theme-text-color font-bold hover:underline"
            >
              Livewire
            </a>
            ,{" "}
            <a
              href="https://jquery.com/"
              className="theme-text-color font-bold hover:underline"
            >
              jQuery
            </a>
            , and{" "}
            <a
              href="https://alpinejs.dev/"
              className="theme-text-color font-bold hover:underline"
            >
              AlpineJS
            </a>
            . I am also experienced in{" "}
            <a
              href="https://vuejs.org/"
              className="theme-text-color font-bold hover:underline"
            >
              VueJS
            </a>
            ,{" "}
            <a
              href="https://react.dev/"
              className="theme-text-color font-bold hover:underline"
            >
              ReactJS
            </a>
            ,{" "}
            <a
              href="https://laravel.com/docs/10.x/queues"
              className="theme-text-color font-bold hover:underline"
            >
              Queue
            </a>
            ,{" "}
            <a
              href="https://laravel.com/docs/10.x/scheduling"
              className="theme-text-color font-bold hover:underline"
            >
              Task Scheduling
            </a>
            , VPS Server, CI/CD, and Docker (Basic). I love the beauty of{" "}
            <a
              href="https://laravel.com/docs/10.x/eloquent"
              className="theme-text-color font-bold hover:underline"
            >
              Laravel ORM
            </a>
            .
          </p>
          <p className="mb-5">
            My aim is to bring across your message and identity in the most
            creative way.
          </p>
          <p className="mb-5">
            I love to share my knowledge, mostly technical. I enjoy learning new
            things and building something new.
          </p>
        </div>
      </section>
      {/* skills */}
      <section className="section text-sm">
        {/* professional experience */}
        <div className="mt-6">
          <h3 className="uppercase font-bold text-xl theme-text-color">
            Professional Experience
          </h3>
          <p>
            I am professional on these Technologies. Most of the time I work on
            these.
          </p>
          <div className="my-4">
            <a
              href="https://www.php.net/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              PHP
            </a>
            <a
              href="https://www.mysql.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              MySQL
            </a>
            <a
              href="https://laravel.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Laravel
            </a>
            <a
              href="https://laravel-livewire.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Livewire
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              JavaScript
            </a>
            <a
              href="https://jquery.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              jQuery
            </a>
            <a
              href="https://vuejs.org/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              VueJS
            </a>
            <a
              href="https://react.dev/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              ReactJS
            </a>
            <a
              href="https://www.typescriptlang.org/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              TypeScript
            </a>
            <a
              href="https://getbootstrap.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Bootstrap
            </a>
            <a
              href="https://tailwindcss.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              TailwindCSS
            </a>
            <a
              href="https://git-scm.com/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Git
            </a>
            <a
              href="https://dev.mysql.com/downloads/workbench/"
              className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Database Design
            </a>
            <span className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              API Development
            </span>
            <span className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              Queue
            </span>
            <span className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              Task Scheduling
            </span>
            <span className="bg-slate-300/50 theme-text-color hover:text-green-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              VPS Server
            </span>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section className="section text-sm">
        <div className="mt-6">
          <p className="mb-5">
            I practice everyday when I get time to learn something new. I
            beleive that knowledge is power.
          </p>

          <p className="mb-5">I&apos;m currently based in Dhaka, Bangladesh.</p>
        </div>
      </section>
    </>
  );
}
