import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "../pages";
import ProtectedRoutes from "../layout/protected-routes";

const PageRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default PageRoutes;
