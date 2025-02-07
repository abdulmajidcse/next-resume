import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Md Abdul Majid - Software Engineer",
};

export default function Contact() {
  return (
    <>
      <section className="section">
        <h2 className="text-slate-900 text-3xl uppercase font-bold">Contact</h2>
        <div className="text-lg text-slate-900 mt-7 mb-10">
          <p className="mb-5">
            Feel free to contact with me. I am available for hire.
          </p>
          <p className="mb-5">
            If you want to hire me or need a consultant, send a message to my{" "}
            <a
              href="https://x.com/abdulmajidcse"
              className="underline font-extrabold"
            >
              X,
            </a>{" "}
            or{" "}
            <a
              href="https://www.linkedin.com/in/abdulmajidcse"
              className="underline font-extrabold"
            >
              LinkedIn
            </a>{" "}
            inbox.
          </p>
          <p>
            I am very glad you are interested about me.{" "}
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-800 relative inline-block">
              <span className="relative text-white">Thank you</span>
            </span>{" "}
            so much for your time!
          </p>
        </div>
      </section>
    </>
  );
}
