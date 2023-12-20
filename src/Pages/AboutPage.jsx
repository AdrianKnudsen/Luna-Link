import styles from "./About.module.css";

export function About() {
  return (
    <>
      <div className={styles.aboutPage}>
        <h1 className={styles.headText}>About Luna Link</h1>
        <p className={styles.introText}>
          At Luna Link were more than just a forum. We are a thriving community
          built on shared interests, open discussions, and the passion for
          connecting with others.
        </p>

        <div className={styles.section}>
          <h2>Our Mission</h2>
          <p className={styles.introText}>
            Luna Link was founded with a simple yet powerful mission: to create
            a space where individuals from diverse backgrounds can come
            together, share their experiences, and engage in meaningful
            conversations. We believe in fostering a sense of belonging and
            encouraging the exchange of ideas.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Our Vision</h2>
          <p className={styles.introText}>
            Looking forward, we envision Luna Link as a dynamic hub where
            friendships are forged, knowledge is shared, and collaborative
            projects take shape. Join us on this exciting journey as we continue
            to evolve and grow together.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Meet the Team</h2>
          <p className={styles.introText}>
            Behind every successful community is a dedicated team. Get to know
            the passionate individuals who work tirelessly to make Luna Link a
            vibrant and welcoming space.
          </p>
        </div>

        <div className={styles.section}>
          <h2>Get Involved</h2>
          <p className={styles.introText}>
            Ready to dive in? Become a part of Luna Link today! Register,
            explore the forums, start discussions, and connect with fellow
            community members. Your voice matters, and were excited to have you
            as part of our community.
          </p>
        </div>

        <p className={styles.endingText}>
          Thank you for being a crucial part of Luna Link. Lets make this space
          a home for engaging discussions, shared experiences, and lasting
          connections.
        </p>

        <p className={styles.seeYouText}>See you around the forums! </p>
      </div>
    </>
  );
}
