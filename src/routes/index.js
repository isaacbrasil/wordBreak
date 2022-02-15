import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";

import { ROUTES } from "./routes";

export const MyRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
};
