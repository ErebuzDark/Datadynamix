// Pagees from route nga niii!!!
import { Homepage } from "./routes/route";
import MainLayout from "@components/layouts/MainLayout";

import { Routes, Route } from "react-router-dom";

const routes = [{ name: <Homepage />, path: "/" }];

function App() {
  return (
    <Routes>
      {routes.map((route, index) => (
        <Route key={index} path={route.path} element={<MainLayout>{route.name}</MainLayout>} />
      ))}
    </Routes>
  );
}

export default App;
