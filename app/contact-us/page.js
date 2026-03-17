import { PageHero } from "../../components/PageHero";

export const metadata = {
  title: "Contact Us | LookyLooky Photography",
};

const hours = [
  ["Monday", "10AM - 5PM"],
  ["Tuesday", "10AM - 5PM"],
  ["Wednesday", "Closed"],
  ["Thursday", "Closed"],
  ["Friday", "10AM - 5PM"],
  ["Saturday", "10AM - 5PM"],
  ["Sunday", "10AM - 5PM"],
];

const referralOptions = [
  "Google",
  "naver",
  "magazine",
  "word of mouth",
  "kids spot",
  "bubhub",
  "Facebook",
  "other",
];

export default function ContactUsPage() {
  return (
    <>
      <PageHero
        image="/assets/contact-road.jpg"
        alt="Road to LookyLooky studio"
        title="Contact Us"
        subtitle="Booking or Inquiry"
        compact
      />

      <section className="container section-gap contact-layout">
        <div className="content-card prose-block">
          <h2>Booking or Inquiry</h2>
          <form className="contact-form">
            <label>
              Name *
              <input type="text" name="name" />
            </label>
            <label>
              Email *
              <input type="email" name="email" />
            </label>
            <label>
              Phone *
              <input type="tel" name="phone" />
            </label>
            <fieldset className="contact-fieldset">
              <legend>How did you arrive at this website? *</legend>
              <div className="contact-options-grid">
                {referralOptions.map((option) => (
                  <label key={option} className="contact-option">
                    <input type="checkbox" name="arrival" value={option} />
                    <span>{option}</span>
                  </label>
                ))}
              </div>
            </fieldset>
            <label>
              Please specify your need
              <textarea name="need" rows="6" />
            </label>
            <label>
              Please enter any two digits *
              <input type="text" name="verification" placeholder="Example: 12" />
            </label>
            <button type="button" className="button-link">
              Submit
            </button>
          </form>
        </div>

        <aside className="content-card contact-sidebar">
          <h2>Office Information</h2>
          <dl className="info-list">
            <div>
              <dt>+ Office Tel</dt>
              <dd>02 8014 8866</dd>
              <dd>0425 874 690</dd>
            </div>
            <div>
              <dt>+ Email</dt>
              <dd>babylookylooky@gmail.com</dd>
            </div>
            <div>
              <dt>+ Opening Hours</dt>
            </div>
          </dl>
          <table className="hours-table">
            <tbody>
              {hours.map(([day, time]) => (
                <tr key={day}>
                  <td>{day}</td>
                  <td>{time}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <dl className="info-list">
            <div>
              <dt>+ Location</dt>
              <dd>Unit 22, 33-37 College st. Gladesville, NSW 2111</dd>
            </div>
          </dl>
        </aside>
      </section>

      <section className="container section-gap">
        <div className="content-card map-stack">
          <img src="/assets/contact-road.jpg" alt="Road directions" />
          <iframe
            title="LookyLooky map"
            src="https://maps.google.com.au/maps?f=q&source=s_q&hl=en&geocode=&q=Unit+22,+33-37+College+st.+Gladesville,+NSW+2111&aq=&ie=UTF8&hq=&hnear=22%2F33-37+College+St,+Gladesville+New+South+Wales+2111&t=m&z=14&ll=-33.820907,151.122213&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
          <img src="/assets/contact-map.gif" alt="Complex access map" />
        </div>
      </section>
    </>
  );
}
