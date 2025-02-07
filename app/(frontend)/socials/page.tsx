import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Socials | Md Abdul Majid - Software Engineer",
};

export default function Socials() {
  return (
    <>
      <section className="section">
        <h2 className="text-slate-900 text-3xl uppercase font-bold">Socials</h2>
        <div className="text-lg text-slate-900 mt-7 mb-10">
          <p className="mb-5">
            Welcome to my {"social's"} page! Here you can find all of my social
            media links and connect with me online.
          </p>
          <p className="mb-5">
            So, go ahead and click around, and {"let's"} stay connected!
          </p>
          <ul className="list-disc list-inside text-lg leading-10 marker:text-slate-300">
            <li>
              LinkedIn:{" "}
              <a
                href="https://linkedin.com/in/abdulmajidcse"
                className="font-bold underline"
              >
                linkedin.com/in/abdulmajidcse
              </a>
            </li>
            <li>
              GitHub:{" "}
              <a
                href="https://github.com/abdulmajidcse"
                className="font-bold underline"
              >
                github.com/abdulmajidcse
              </a>
            </li>
            <li>
              Hackerrank:{" "}
              <a
                href="https://hackerrank.com/profile/abdulmajidcse"
                className="font-bold underline"
              >
                hackerrank.com/profile/abdulmajidcse
              </a>
            </li>
            <li>
              Medium:{" "}
              <a
                href="https://medium.com/@abdulmajidcse"
                className="font-bold underline"
              >
                medium.com/@abdulmajidcse
              </a>
            </li>
            <li>
              Packagist:{" "}
              <a
                href="https://packagist.org/packages/abdulmajidcse"
                className="font-bold underline"
              >
                packagist.org/packages/abdulmajidcse
              </a>
            </li>
            <li>
              Facebook:{" "}
              <a
                href="https://facebook.com/abdulmajidcse"
                className="font-bold underline"
              >
                facebook.com/abdulmajidcse
              </a>
            </li>
            <li>
              YouTube:{" "}
              <a
                href="https://youtube.com/@abdulmajidcse"
                className="font-bold underline"
              >
                youtube.com/@abdulmajidcse
              </a>
            </li>
            <li>
              X:{" "}
              <a
                href="https://x.com/abdulmajidcse"
                className="font-bold underline"
              >
                x.com/abdulmajidcse
              </a>
            </li>

            <li>
              Pinkary:{" "}
              <a
                href="https://pinkary.com/@abdulmajidcse"
                className="font-bold underline"
              >
                pinkary.com/@abdulmajidcse
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
