import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BangaloreBranding, HomeLayout, Loading } from "./Component";
import { NotFoundPage } from "./Component/Error/NotfoundPage";
import Home from "./Component/Home/Home";

function App() {
  const [loading, setloading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1600);
  }, []);

  if (loading) return <Loading />;
  return (
    <>
      <Routes>
        <Route path="/" element={<HomeLayout />}>
          <Route index element={<Home />} />
        </Route>

        <Route path="/service" element={<HomeLayout />}>
          <Route
            path="best-branding-agency-services-in-bangalore"
            element={<BangaloreBranding />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
