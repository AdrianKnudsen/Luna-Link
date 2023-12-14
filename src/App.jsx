import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LayoutBase } from "./Pages/LayoutBase";
import { LandingPage } from "./Pages/LandingPage";
import { ForumMain } from "./Pages/ForumsPage/ForumMain";
import { About } from "./Pages/AboutPage";
import { ContactPage } from "./Pages/ContactPage";

export function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/About" element={<About />} />
          <Route path="/ForumMain" element={<ForumMain />} />
          <Route path="/Contact" element={<ContactPage />} />
          <Route path="/" element={<LayoutBase />}>
            <Route index element={<LandingPage />} />
            <Route path="*" element={<h1>404 Not Found</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}
