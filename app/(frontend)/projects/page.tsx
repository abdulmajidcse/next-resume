import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Md Abdul Majid - Software Engineer",
};

export default function Projects() {
  return (
    <>
      <section className="section">
        <h2 className="font-playfair-display text-slate-900 text-3xl uppercase font-bold">
          Projects
        </h2>
        <div className="font-libre-baskerville text-lg text-slate-900 mt-7 mb-10">
          <p className="mb-5">
            {"I'm"} a Software Engineer. Mostly, {"I'm"} working with Laravel,
            VueJS, ReactJS, Livewire, jQuery, AlpinJS, and more.
          </p>
          <p className="mb-5">
            Here you can find some of projects where {"I'm"} a developer of
            these projects.
          </p>
          <ul className="list-disc list-inside font-libre-baskerville text-lg leading-10 marker:text-slate-300">
            <li>
              <a href="https://aosed.org/" className="font-bold underline">
                Aosed
              </a>
            </li>
            <li>
              <a href="https://cricket97.com" className="font-bold underline">
                Cricket97
              </a>
            </li>
            <li>
              <a
                href="https://stage.netoglasi.net/"
                className="font-bold underline"
              >
                Netoglasi - An ad agency website like Bikroy.com
              </a>
            </li>
            <li>
              <a
                href="http://essenceonlinebd.com/"
                className="font-bold underline"
              >
                Essence Online BD - A complete E-commerce website
              </a>
            </li>
            <li>
              <a
                href="https://studio23.com.bd/"
                className="font-bold underline"
              >
                Studio23 - A boutique hotel website
              </a>
            </li>
            <li>
              <a href="https://examcare24.com/" className="font-bold underline">
                Examcare24 - Online Examination System
              </a>
            </li>
          </ul>
        </div>
      </section>
    </>
  );
}
