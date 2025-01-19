import Image from "next/image";
import type { Metadata } from "next";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

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
              className="theme-text-color font-black hover:underline"
            >
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
            <Link href="/about" className="theme-text-color underline">
              read more
            </Link>
          </p>
        </div>
      </section>

      {/* my popular medium stories */}
      <section className="section">
        <h2 className="theme-text-color font-playfair-display text-3xl font-bold">
          My Popular Medium Stories
        </h2>
        <div className="mt-8">
          <div className="flex flex-col gap-4 my-4 font-lato text-xl font-semibold text-slate-600">
            <p>
              <a
                href="https://abdulmajidcse.medium.com/mastering-in-docker-and-setup-development-environment-for-reactjs-vuejs-laravel-and-more-5cfe18b8a420"
                className="hover:underline decoration-purple-800"
              >
                Mastering in Docker and setup development environment for
                ReactJS, VueJS, Laravel, and more
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/mastering-custom-mail-transport-in-laravel-ba3291a28854"
                className="hover:underline decoration-purple-800"
              >
                Mastering Custom Mail Transport in Laravel
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/it-feels-like-a-flipbook-through-a-pdf-when-viewerjs-be55e7549347"
                className="hover:underline decoration-purple-800"
              >
                It feels like a flipbook through a PDF when ViewerJS
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/vuejs-form-validation-with-yupjs-b976f79e7f65"
                className="hover:underline decoration-purple-800"
              >
                VueJS form validation with YupJS
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/setup-laravel-and-vuejs-application-544adb9074f4"
                className="hover:underline decoration-purple-800"
              >
                Setup Laravel and VueJS application
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/laravel-custom-pagination-for-orm-query-builder-collection-or-array-e797259cade6"
                className="hover:underline decoration-purple-800"
              >
                Laravel Custom Pagination for ORM, Query Builder, Collection, or
                Array
              </a>
            </p>

            <p>
              <a
                href="https://abdulmajidcse.medium.com/detect-bot-visit-in-your-laravel-application-1c9b1cb7117d"
                className="hover:underline decoration-purple-800"
              >
                Detect “Bot Visit” in your Laravel application
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8">
            <a
              href="https://abdulmajidcse.medium.com/"
              className="theme-button w-full font-libre-baskerville font-bold"
            >
              See All My Medium Stories
            </a>
          </div>
        </div>
      </section>

      {/* my github learning resources */}
      <section className="section">
        <h2 className="theme-text-color font-playfair-display text-3xl font-bold">
          My Github Learning Resources
        </h2>
        <div className="mt-8">
          <div className="flex flex-col gap-4 my-4 font-lato text-xl font-semibold text-slate-600">
            <p>
              <a
                href="https://github.com/abdulmajidcse/data-structure-and-algorithm"
                className="hover:underline decoration-purple-800"
              >
                Data Structure and Algorithm (PHP, NodeJS, and Python)
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/docker-practice"
                className="hover:underline decoration-purple-800"
              >
                Docker Practice for your development (PHP, NodeJS, Python,
                Laravel, Wordpress, ReactJS, VueJS, and more)
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/covid-vaccine"
                className="hover:underline decoration-purple-800"
              >
                A Simple COVID Vaccine Registration System where people can
                register, get vaccine and so more (Laravel & VueJS)
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/tiny-ecommerce"
                className="hover:underline decoration-purple-800"
              >
                A small ecommerce website where user can place an order and also
                admin can manage order. It&apos;s a very small but full
                ecommerce business management
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/talktoapi"
                className="hover:underline decoration-purple-800"
              >
                TalktoAPI is an open-source API provider like JSON Placeholder.
                TalktoAPI provides you several kinds of API, such as CRUD, Blog
                and eCommerce
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/expressjs-practice"
                className="hover:underline decoration-purple-800"
              >
                A Simple ExpressJS practice resource where you may get idea
                about CRUD, Authentication, Validation, File upload and more
              </a>
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/multi-auth-laravel-7"
                className="hover:underline decoration-purple-800"
              >
                Multi Authentication System using different guard in Laravel
              </a>
            </p>
          </div>

          <div className="flex justify-center mt-8 mb-5">
            <a
              href="https://github.com/abdulmajidcse?tab=repositories"
              className="theme-button w-full font-libre-baskerville font-bold"
            >
              See All My Github Public Repositories
            </a>
          </div>
        </div>
      </section>

      {/* my learning screencasts */}
      <section className="section">
        <h2 className="theme-text-color font-playfair-display text-3xl font-bold">
          My Youtube Learning Screencasts
        </h2>
        <div className="mt-8">
          <div className="flex flex-col gap-10 my-4 font-lato text-xl font-semibold text-slate-600">
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

          <div className="flex justify-center mt-8">
            <a
              href="https://www.youtube.com/@AbdulMajidCSE"
              className="theme-button w-full font-libre-baskerville font-bold"
            >
              See All My Youtube Learning Screencasts
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
