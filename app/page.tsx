import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faLinkedin,
  faMedium,
  faXTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "Home | Md Abdul Majid - Software Engineer",
};

export default function Home() {
  return (
    <>
      {/* about me */}
      <section className="section">
        <div>
          <h2 className="text-3xl font-bold text-slate-800">Md Abdul Majid</h2>
          <p className="text-sm">Full-Stack Developer</p>
          {/* <p>
            <a
              href="https://example.com/"
              className="theme-text-color font-black hover:underline text-sm"
            >
              @your_company
            </a>
          </p> */}
        </div>
        <div className="text-slate-900 mt-7">
          <div>
            Find me on{" "}
            <a
              href="https://github.com/abdulmajidcse"
              className="hover:theme-text-color"
              title="Github"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/abdulmajidcse"
              className="hover:theme-text-color"
              title="Linkedin"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://abdulmajidcse.medium.com"
              className="hover:theme-text-color"
              title="Medium"
            >
              <FontAwesomeIcon icon={faMedium} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@AbdulMajidCSE"
              className="hover:theme-text-color"
              title="Youtube"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://x.com/abdulmajidcse"
              className="hover:theme-text-color"
              title="X/Twitter"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://codeforces.com/profile/abdulmajidcse"
              className="hover:theme-text-color"
              title="Codeforces"
            >
              <FontAwesomeIcon icon={faCode} className="w-4 inline" />
            </a>
            , and{" "}
            <a
              href="https://facebook.com/abdulmajidcse"
              className="hover:theme-text-color"
              title="Facebook"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 inline" />
            </a>
            .
          </div>
        </div>
      </section>

      {/* about me */}
      <section className="section text-sm">
        <div className="text-slate-900 mt-7">
          <p className="mb-5">
            I am an enthusiastic Software Engineer with a strong background in
            developing efficient software solutions. My experience spans across
            various technologies including Laravel, PostgreSQL, Vue.js, and
            React.js, where I have effectively optimized workflows and enhanced
            operational efficiency for clients. I pride myself on my
            collaborative skills, leading development teams, and delivering
            high-quality products.
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
              href="https://en.wikipedia.org/wiki/Software_as_a_service"
              className="prof-btn"
            >
              Specializing in SaaS
            </a>
            <a
              href="https://en.wikipedia.org/wiki/Enterprise_resource_planning"
              className="prof-btn"
            >
              ERP
            </a>
            <a href="https://www.php.net/" className="prof-btn">
              PHP
            </a>
            <a href="https://www.mysql.com/" className="prof-btn">
              MySQL
            </a>
            <a href="https://laravel.com/" className="prof-btn">
              Laravel
            </a>
            <a href="https://laravel-livewire.com/" className="prof-btn">
              Livewire
            </a>
            <a
              href="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
              className="prof-btn"
            >
              JavaScript
            </a>
            <a href="https://jquery.com/" className="prof-btn">
              jQuery
            </a>
            <a href="https://vuejs.org/" className="prof-btn">
              VueJS
            </a>
            <a href="https://react.dev/" className="prof-btn">
              ReactJS
            </a>
            <a href="https://inertiajs.com/" className="prof-btn">
              InertiaJS
            </a>
            <a href="https://www.typescriptlang.org/" className="prof-btn">
              TypeScript
            </a>
            <a href="https://getbootstrap.com/" className="prof-btn">
              Bootstrap
            </a>
            <a href="https://tailwindcss.com/" className="prof-btn">
              TailwindCSS
            </a>
            <a href="https://git-scm.com/" className="prof-btn">
              Git
            </a>
            <a
              href="https://dev.mysql.com/downloads/workbench/"
              className="prof-btn"
            >
              Database Design
            </a>
            <a
              href="https://laravel.com/docs/12.x/installation#laravel-the-api-backend"
              className="prof-btn"
            >
              API Development
            </a>
            <a href="https://laravel.com/docs/12.x/queues" className="prof-btn">
              Queue
            </a>
            <a
              href="https://laravel.com/docs/12.x/scheduling"
              className="prof-btn"
            >
              Task Scheduling
            </a>
            <a href="https://aws.amazon.com/what-is/vps/" className="prof-btn">
              VPS Server
            </a>
            <a href="https://www.docker.com/" className="prof-btn">
              Docker
            </a>
          </div>
        </div>
      </section>

      {/* my popular medium stories */}
      <section className="section">
        <h2 className="theme-text-color text-xl font-bold">
          Popular Medium Stories
        </h2>
        <div className="mt-6">
          <div className="text-sm flex flex-col gap-4 my-4 text-slate-900">
            <p>
              <a
                href="https://abdulmajidcse.medium.com/mastering-in-docker-and-setup-development-environment-for-reactjs-vuejs-laravel-and-more-5cfe18b8a420"
                className="hover:underline decoration-green-600"
              >
                Mastering in Docker and setup development environment for
                ReactJS, VueJS, Laravel, and more
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/mastering-custom-mail-transport-in-laravel-ba3291a28854"
                className="hover:underline decoration-green-600"
              >
                Mastering Custom Mail Transport in Laravel
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/it-feels-like-a-flipbook-through-a-pdf-when-viewerjs-be55e7549347"
                className="hover:underline decoration-green-600"
              >
                It feels like a flipbook through a PDF when ViewerJS
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/vuejs-form-validation-with-yupjs-b976f79e7f65"
                className="hover:underline decoration-green-600"
              >
                VueJS form validation with YupJS
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/setup-laravel-and-vuejs-application-544adb9074f4"
                className="hover:underline decoration-green-600"
              >
                Setup Laravel and VueJS application
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/laravel-custom-pagination-for-orm-query-builder-collection-or-array-e797259cade6"
                className="hover:underline decoration-green-600"
              >
                Laravel Custom Pagination for ORM, Query Builder, Collection, or
                Array
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/detect-bot-visit-in-your-laravel-application-1c9b1cb7117d"
                className="hover:underline decoration-green-600"
              >
                Detect “Bot Visit” in your Laravel application
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* my github learning resources */}
      <section className="section">
        <h2 className="theme-text-color text-xl font-bold">
          Github Learning Resources
        </h2>
        <div className="mt-6">
          <div className="text-sm flex flex-col gap-4 my-4 text-slate-900">
            <p>
              <a
                href="https://github.com/abdulmajidcse/data-structure-and-algorithm"
                className="hover:underline decoration-green-600"
              >
                Data Structure and Algorithm
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/docker-practice"
                className="hover:underline decoration-green-600"
              >
                Docker Practice for your development (PHP, NodeJS, Python,
                Laravel, Wordpress, ReactJS, VueJS, and more)
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/covid-vaccine"
                className="hover:underline decoration-green-600"
              >
                A Simple COVID Vaccine Registration System where people can
                register, get vaccine and so more (Laravel & VueJS)
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/tiny-ecommerce"
                className="hover:underline decoration-green-600"
              >
                A small ecommerce website where user can place an order and also
                admin can manage order. It&apos;s a very small but full
                ecommerce business management
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/talktoapi"
                className="hover:underline decoration-green-600"
              >
                TalktoAPI is an open-source API provider like JSON Placeholder.
                TalktoAPI provides you several kinds of API, such as CRUD, Blog
                and eCommerce
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/expressjs-practice"
                className="hover:underline decoration-green-600"
              >
                A Simple ExpressJS practice resource where you may get idea
                about CRUD, Authentication, Validation, File upload and more
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/multi-auth-laravel-7"
                className="hover:underline decoration-green-600"
              >
                Multi Authentication System using different guard in Laravel
              </a>
            </p>
          </div>
        </div>
      </section>
      {/* my learning screencasts */}
      <section className="section">
        <h2 className="theme-text-color text-xl font-bold">Screencasts</h2>
        <div className="mt-6">
          <div className="text-sm flex flex-col gap-10 my-4 text-slate-900">
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/3ofzoX-AV5Y?si=k-NP_Cx9HD5MdtBD"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/4l0OgHQin1w?si=2gT_vxhp0aqFnd5-"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
            <div>
              <iframe
                width="100%"
                height="315"
                src="https://www.youtube-nocookie.com/embed/eja2Tl5zQc8?si=PTXcYXjUq59dVYyo"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
