import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BangaloreAppDevelopment,
  BangaloreBranding,
  BangaloreDigitalMarketingStrategyDevelopemnt,
  BangaloreInnfluencerMarketing,
  BangaloreLogoDesign,
  BangaloreSEO,
  BangaloreWebdevelopment,
  HomeLayout,
  Loading,
} from "./Component";
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
          <Route
            path="best-web-developemnt-agency-services-in-bangalore"
            element={<BangaloreWebdevelopment />}
          />
          <Route
            path="best-app-developemnt-agency-services-in-bangalore"
            element={<BangaloreAppDevelopment />}
          />
          <Route
            path="best-influencer-marketing-agency-services-in-bangalore"
            element={<BangaloreInnfluencerMarketing />}
          />
          <Route
            path="best-seo-agency-services-in-bangalore"
            element={<BangaloreSEO />}
          />
          <Route
            path="best-social-media-maketing-agency-services-in-bangalore"
            element={<BangaloreSEO />}
          />
          <Route
            path="best-logo-design-agency-services-in-bangalore"
            element={<BangaloreLogoDesign />}
          />
          <Route
            path="best-digital-marketing-strategy-developemnt-agency-services-in-bangalore"
            element={<BangaloreDigitalMarketingStrategyDevelopemnt />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
