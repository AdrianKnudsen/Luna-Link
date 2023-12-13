import { Link } from "react-router-dom";

export function ForumMain() {
  return (
    <>
      <main className="ForumMainContainer">
        <h1>Forums main page</h1>
        <Link to="/About">Go to about</Link>
      </main>
    </>
  );
}
