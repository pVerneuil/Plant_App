import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/DashBoard" element={<DashBoard />} />
          <Route path="/page-two" element={<PageTwo />} />
          <Route path="/page-three" element={<PageThree />} />
          <Route path="/page-cta" element={<PageCTA />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
