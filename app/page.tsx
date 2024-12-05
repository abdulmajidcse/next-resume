import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About | Md Abdul Majid - Software Engineer",
};

export default function Home() {
  return (
    <>
      {/* about me */}
      <section className="section">
        <div className="flex justify-center">
          <Image
            src="/abdul-majid.jpg"
            alt="Abdul Majid"
            width={250}
            height={250}
            className="rounded-full shadow-xl w-[250px] h-[250px] border-[0.5rem] border-slate-200"
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
            experienced for more than 3 years and working with{" "}
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
      <section className="section font-libre-baskerville">
        <h2 className="text-slate-900 font-playfair-display text-4xl uppercase font-bold">
          Skills
        </h2>
        {/* professional experience */}
        <div className="mt-6">
          <h3 className="font-lato uppercase font-bold text-xl text-slate-900">
            Professional Experience
          </h3>
          <p className="font-libre-baskerville">
            I am professional on these Technologies. Most of the time I work on
            these.
          </p>
          <div className="my-4 font-libre-baskerville">
            <a
              href="https://www.php.net/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              PHP
            </a>
            <a
              href="https://www.mysql.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              MySQL
            </a>
            <a
              href="https://laravel.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Laravel
            </a>
            <a
              href="https://laravel-livewire.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Livewire
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              JavaScript
            </a>
            <a
              href="https://jquery.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              jQuery
            </a>
            <a
              href="https://vuejs.org/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              VueJS
            </a>
            <a
              href="https://www.typescriptlang.org/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              TypeScript
            </a>
            <a
              href="https://getbootstrap.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Bootstrap
            </a>
            <a
              href="https://tailwindcss.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              TailwindCSS
            </a>
            <a
              href="https://git-scm.com/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Git
            </a>
            <a
              href="https://dev.mysql.com/downloads/workbench/"
              target="_blank"
              className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2"
            >
              Database Design
            </a>
            <span className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              API Development
            </span>
            <span className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              Queue
            </span>
            <span className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              Task Scheduling
            </span>
            <span className="bg-slate-300/50 text-slate-900 hover:text-slate-500 px-2 py-1 rounded transition-all duration-300 inline-block mr-1 mb-2">
              VPS Server
            </span>
          </div>
        </div>
      </section>
      {/* Experience */}
      <section className="section">
        <h2 className="text-slate-900 font-playfair-display text-4xl uppercase font-bold">
          Experience
        </h2>
        <div className="mt-8">
          <div className="grid md:grid-cols-2">
            <div>
              <h3 className="font-libre-baskerville font-bold text-lg text-slate-900">
                Software Engineer
              </h3>
              <p className="font-lato uppercase font-bold text-xl text-slate-900">
                <a
                  href="https://www.nogorsolutions.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  Nogor Solutions Limited
                </a>
              </p>
            </div>
            <div className="text-start md:text-end font-libre-baskerville font-semibold text-sm text-slate-900">
              March 2024 - Present
            </div>
          </div>
          <div className="my-4 font-libre-baskerville text-slate-800">
            <p className="mb-3">
              As a Software Engineer, I build web application or custom
              solutions.
            </p>
            <p className="mb-3">
              We used the following tools and technologies for development.
            </p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Analyze System and Design According to Requirement.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Design Database Entity Relationship Diagram (ERD).
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Create RESTful API using PHP, Laravel.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Vuejs to build Single Page Application.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Used Bootstrap for frontend design.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Used MySQL as a primary database.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Utilized: PHP, MySQL, Laravel, Vuejs.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid md:grid-cols-2">
            <div>
              <h3 className="font-libre-baskerville font-bold text-lg text-slate-900">
                Laravel Developer - Remotely
              </h3>
              <p className="font-lato uppercase font-bold text-xl text-slate-900">
                <a
                  href="https://stage.netoglasi.net/"
                  target="_blank"
                  className="hover:underline"
                >
                  Netoglasi
                </a>
              </p>
            </div>
            <div className="text-start md:text-end font-libre-baskerville font-semibold text-sm text-slate-900">
              September 2023 - January 2024
            </div>
          </div>
          <div className="my-4 font-libre-baskerville text-slate-800">
            <p className="mb-3">
              As a Laravel developer, I design and develop netoglasi webiste.
              This is an ad agency webiste like Bikroy.com.
            </p>
            <p className="mb-3">
              We used the following tools and technologies for development.
            </p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Analyze System and Design According to Requirement.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Design Database Entity Relationship Diagram (ERD).
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Develop application using PHP, Laravel, jQuery, Axios.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Used TailwindCSS for frontend design.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Used MySQL as a primary database.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Utilized: PHP, MySQL, Laravel, jQuery, Queue, Task Scheduling,
                VPS Server.
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid md:grid-cols-2">
            <div>
              <h3 className="font-libre-baskerville font-bold text-lg text-slate-900">
                Programmer - Remotely
              </h3>
              <p className="font-lato uppercase font-bold text-xl text-slate-900">
                <a
                  href="https://createchbd.com/"
                  target="_blank"
                  className="hover:underline"
                >
                  Creative Technology
                </a>
              </p>
            </div>
            <div className="text-start md:text-end font-libre-baskerville font-semibold text-sm text-slate-900">
              September 2020 - February 2024
            </div>
          </div>
          <div className="my-4 font-libre-baskerville text-slate-800">
            <p className="mb-3">
              As a developer, I design and develop a web application for
              Government and Private Institutes
            </p>
            <p className="mb-3">
              We used the following tools and technologies for development.
            </p>
            <div>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Analyze System and Design According to Requirement.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Design Database Entity Relationship Diagram (ERD).
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Create RESTful API using PHP, Laravel.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Used Bootstrap and TailwindCSS for frontend design.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Used MySQL as a primary database.
              </p>
              <p>
                <FontAwesomeIcon
                  icon={faCheck}
                  className="inline-block w-5 text-lg mr-1"
                />{" "}
                Utilized: PHP, MySQL, Laravel, Livewire.
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Education */}
      <section className="section">
        <h2 className="text-slate-900 font-playfair-display text-4xl uppercase font-bold">
          Education
        </h2>
        <div className="mt-8">
          <div className="grid md:grid-cols-2">
            <div>
              <h3 className="font-lato uppercase font-bold text-lg text-slate-900">
                <a
                  href="https://diu.ac/"
                  target="_blank"
                  className="hover:underline"
                >
                  Dhaka International University
                </a>
              </h3>
              <p className="font-libre-baskerville font-semibold text-lg text-slate-900">
                Bachelor of Science
              </p>
            </div>
            <div className="text-start md:text-end font-libre-baskerville font-semibold text-sm text-slate-900">
              August 2022 - Present
            </div>
          </div>
          <div className="my-4 font-libre-baskerville text-slate-800">
            <p>Computer Science and Engineering</p>
            <p>CGPA: (Studying)</p>
          </div>
        </div>
        <div className="mt-8">
          <div className="grid md:grid-cols-2">
            <div>
              <h3 className="font-lato uppercase font-bold text-lg text-slate-900">
                <a
                  href="https://kpik.gov.bd/"
                  target="_blank"
                  className="hover:underline"
                >
                  Kurigram Polytechnic Institute
                </a>
              </h3>
              <p className="font-libre-baskerville font-semibold text-lg text-slate-900">
                Diploma in Engineering
              </p>
            </div>
            <div className="text-start md:text-end font-libre-baskerville font-semibold text-sm text-slate-900">
              August 2016 - December 2020
            </div>
          </div>
          <div className="my-4 font-libre-baskerville text-slate-800">
            <p>Computer Technology</p>
            <p>CGPA: 3.71 (Out of 4.00)</p>
          </div>
        </div>
      </section>
      {/* Interests */}
      <section className="section">
        <h2 className="text-slate-900 font-playfair-display text-4xl uppercase font-bold">
          Interests
        </h2>
        <div className="font-libre-baskerville text-lg text-slate-800 mt-7 mb-10">
          <div>
            <p>
              <FontAwesomeIcon
                icon={faCheck}
                className="inline-block w-5 text-lg mr-1"
              />{" "}
              Programming
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCheck}
                className="inline-block w-5 text-lg mr-1"
              />{" "}
              Problem Solving
            </p>
            <p>
              <FontAwesomeIcon
                icon={faCheck}
                className="inline-block w-5 text-lg mr-1"
              />{" "}
              Research
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
