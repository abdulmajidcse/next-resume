import type { Metadata } from "next";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faGithub,
  faHackerrank,
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
          <p className="text-sm">Software Engineer</p>
          <p>
            <a
              href="https://nogorsolutions.com"
              className="theme-text-color font-black hover:underline text-sm"
            >
              @Nogor Solutions Limited
            </a>
          </p>
        </div>
        <div className="text-slate-900 mt-7">
          <div>
            Find me on{" "}
            <a
              href="https://github.com/abdulmajidcse"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faGithub} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://linkedin.com/in/abdulmajidcse"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faLinkedin} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://x.com/abdulmajidcse"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faXTwitter} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://abdulmajidcse.medium.com"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faMedium} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://www.youtube.com/@AbdulMajidCSE"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faYoutube} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://www.hackerrank.com/profile/abdulmajidcse"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faHackerrank} className="w-4 inline" />
            </a>
            ,{" "}
            <a
              href="https://leetcode.com/u/abdulmajidcse"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faCode} className="w-4 inline" />
            </a>
            , and{" "}
            <a
              href="https://facebook.com/abdulmajidcse"
              className="hover:theme-text-color"
            >
              <FontAwesomeIcon icon={faFacebook} className="w-4 inline" />
            </a>
            .
          </div>
        </div>
      </section>

      {/* Projects */}
      <section className="section">
        <h2 className="theme-text-color text-xl font-bold">Projects</h2>
        <div className="mt-6">
          <div className="text-sm flex flex-col gap-4 my-4 text-slate-900">
            <p>
              <a
                href="https://lib.bim.gov.bd"
                className="underline hover:theme-text-color decoration-green-600"
              >
                BIM Library
              </a>
              : It&apos;s a Library Management System. It is also a smart LMS
              System where you may simplify your workflow, easy cataloging to
              seamless eBook migration and all! It is a automated, RFID &
              barcode system, instant & various types of reports, cataloging,
              patron management, migration of eBook from Koha, circulation
              management, integration with e-content library and more.
            </p>

            <p>
              <a
                href="http://203.82.196.38"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Naasa Group ERP
              </a>
              : A modern and reliable ERP for{" "}
              <a
                href="https://nassa.com.bd"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Naasa Group
              </a>{" "}
              where they work on Garment Manufacturing, Banking, Real Estate,
              Stock Brokering, Education and Travel and most importantly
              Corporate Social Responsibility.
            </p>

            <p>
              <a
                href="https://aosed.org"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Aosed
              </a>
              : A modern and smart website & HRM management system for Aosed. It
              has a content management system and HRM management.
            </p>

            <p>
              <a
                href="https://cricket97.com"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Cricket97
              </a>
              : An online newspaper website based on Cricket. It has a modern,
              reliable and & effecient CMS for newspaper.
            </p>

            <p>
              <a
                href="https://fulyco.us"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Fulyco
              </a>
              : It is a on demand gas delivery service and based on USA.
            </p>

            <p>
              <a
                href="https://examcare24.com"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Examcare24
              </a>
              : An online based exam management system and fully automated,
              exam, results, reports, payment system and more.
            </p>

            <p>
              <a
                href="https://studio23.com.bd"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Studio23
              </a>
              : A hotel website where it represents about hotel, services,
              simple booking feature, and more.
            </p>
          </div>
        </div>
      </section>

      {/* Contributions */}
      <section className="section">
        <h2 className="theme-text-color text-xl font-bold">Contributions</h2>
        <div className="mt-6">
          <div className="text-sm flex flex-col gap-4 my-4 text-slate-900">
            <p>
              <a
                href="https://packagist.org/packages/abdulmajidcse/code-mask"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Code Mask
              </a>
              : This is a simple PHP library that help you to manipulate your
              data. It has also a Laravel package called{" "}
              <a
                href="https://packagist.org/packages/abdulmajidcse/laravel-code-mask"
                className="underline hover:theme-text-color decoration-green-600"
              >
                Laravel Code Mask
              </a>
              .
            </p>

            <p>
              <a
                href="https://github.com/abdulmajidcse/talktoapi"
                className="underline hover:theme-text-color decoration-green-600"
              >
                TalktoAPI
              </a>
              : TalktoAPI is an open-source API provider like{" "}
              <a
                href="https://jsonplaceholder.typicode.com/"
                className="underline hover:theme-text-color decoration-green-600"
              >
                JSON Placeholder
              </a>
              . TalktoAPI provides you several kinds of API, such as CRUD, Blog
              and eCommerce. The main goal of TalktoAPI is to provide API to
              beginners when they learn the frontend frameworks like (VUE,
              React, Angular). So that they don&apos;t need to create API in
              learning time.
            </p>
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
