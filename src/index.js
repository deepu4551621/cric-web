import * as ReactDomClient from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Services from "./pages/Services";
// import Ham from './components/hamburger.js'
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="About" element={<About />} />
          <Route path="Blog" element={<Blog />} />
          <Route path="services" element={<Services />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDomClient.createRoot(document.getElementById('root'));
root.render(<App />);