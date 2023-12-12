import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { LayoutBase } from './Pages/LayoutBase';
import { LandingPage } from './Pages/LandingPage';

export function App() {
  return (
    <>
        <BrowserRouter>
          <Routes>
            <Route path="/" element = {<LayoutBase/>}>
              <Route index element= {<LandingPage/>}/>
              <Route path='*' element={<h1>404 Not Found</h1>}/>
            </Route>
          </Routes>
        </BrowserRouter>
    </>
  );
}
