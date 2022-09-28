import Layout from "./components/Layout";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import Home from "./pages/Home";
import DashBoard from "./pages/DashBoard";
import PageTwo from "./pages/PageTwo";
import PageThree from "./pages/PageThree";
import PageCTA from "./pages/PageCTA";
const theme = {
  dark: 'rgb(34, 71, 34)',
  light: 'rgb(242, 230, 195)',
  primary: 'rgb(196, 222, 169)',
  background: 'rgb(231, 237, 222)',
};

function App() {
  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
}

export default App;
