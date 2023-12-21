import style from "./ContactPage.module.css";

export function ContactPage() {
  function sendEmail() {
    window.location.reload();
  }
  return (
    <>
      <div className={style.contactPagecontainer}>
        <div className={style.headertext}>
          <h1 className={style.header}>Contact Luna Link</h1>
          <p>
            We would love to hear from you! Whether you have a question,
            feedback, or just want to say hello, feel free to reach out to us
            using the contact form below.
          </p>
        </div>
        <div className={style.contactformcontainer}>
          <form className={style.contactform} onSubmit={sendEmail}>
            <label className={style.formlabel} htmlFor="name">
              Name:
            </label>
            <input
              className={style.forminput}
              type="text"
              id="name"
              name="name"
              placeholder="Your Name"
              required
            />

            <label htmlFor="email">Email:</label>
            <input
              className={style.forminput}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />

            <label htmlFor="message"> message:</label>
            <textarea
              className={style.formtextarea}
              id="message"
              name="message"
              placeholder="Your Message"
              rows="6"
              required
            ></textarea>

            <button className={style.sendbutton} type="submit">
              Send
            </button>
          </form>
        </div>
        <div className={style.socialMedia}>
          <ul>
            <li>Twitter: @LunaLink</li>
            <li>Facebook: /LunaLinkPage</li>
            <li>Instagram: @LunaLinkGram</li>
          </ul>
        </div>
      </div>
    </>
  );
}
