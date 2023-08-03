import { Home } from "./pages/home";
import { Routes, Route, Outlet, Link, BrowserRouter } from "react-router-dom";
import { Layout } from "./pages/layout";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>

  );
}

export default App;
