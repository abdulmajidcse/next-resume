export default function Contact() {
  return (
    <>
      <section className="section">
        <h2 className="font-playfair-display text-slate-900 text-3xl uppercase font-bold">
          Contact
        </h2>
        <div className="font-libre-baskerville text-lg text-slate-900 mt-7 mb-10">
          <p className="mb-5">
            Feel free to contact with me. I am available for hire.
          </p>
          <p className="mb-5">
            If you want to hire me or need a consultant, send a message to my
            <a
              href="https://facebook.com/abdulmajidcse"
              target="_blank"
              className="underline font-extrabold"
            >
              Facebook
            </a>
            or
            <a
              href="https://www.linkedin.com/in/abdulmajidcse"
              target="_blank"
              className="underline font-extrabold"
            >
              LinkedIn
            </a>
            inbox.
          </p>
          <p>
            I am very glad you are interested about me.
            <span className="before:block before:absolute before:-inset-1 before:-skew-y-3 before:bg-slate-800 relative inline-block">
              <span className="relative text-white">Thank you</span>
            </span>
            so much for your time!
          </p>
        </div>
      </section>
    </>
  );
}
