import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomeLayout } from "./Component";
import { NotFoundPage } from "./Component/Error/NotfoundPage";
import WithLazyComponet from "./Component/LazyLoading/LazyLoading";
const LazyHome = WithLazyComponet(() => import("./Component/Home/Home"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<LazyHome />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
