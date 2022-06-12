import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectedRoutes from "./components/auth/ProtectedRoute";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PageLayout from "./components/PageLayout";

import logo from "./public/logo.svg";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />

        {/* <PageLayout> */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/" element={<Dashboard />} />
        </Route>
        {/* </PageLayout> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
