import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home, HomeLayout } from "./Component";
import { NotFoundPage } from "./Component/Error/NotfoundPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
