import { Link } from "react-router-dom";

export function About() {
  return (
    <>
      <main className="AboutContainer">
        <h1>About page</h1>
        <Link to="/ForumMain">Go to ForumMain</Link>
      </main>
    </>
  );
}
