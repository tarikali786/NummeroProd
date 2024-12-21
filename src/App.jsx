import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import {
  BangaloreBrandingData,
  BangloreSocialData,
  ContentWrintingData,
  digitalmarketingData,
  HeaderServic,
  HomeLayout,
  InfluencersMarketingData,
  Loading,
  LogodesignData,
  Seodata,
  WebDevlopmentData,
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
            element={<HeaderServic data={BangaloreBrandingData} />}
          />
          <Route
            path="best-web-developemnt-agency-services-in-bangalore"
            element={<HeaderServic data={WebDevlopmentData} />}
          />
          <Route
            path="best-content-writing-agency-services-in-bangalore"
            element={<HeaderServic data={ContentWrintingData} />}
          />
          <Route
            path="best-influencer-marketing-agency-services-in-bangalore"
            element={<HeaderServic data={InfluencersMarketingData} />}
          />
          <Route
            path="best-seo-agency-services-in-bangalore"
            element={<HeaderServic data={Seodata} />}
          />
          <Route
            path="best-social-media-maketing-agency-services-in-bangalore"
            element={<HeaderServic data={BangloreSocialData} />}
          />
          <Route
            path="best-logo-design-agency-services-in-bangalore"
            element={<HeaderServic data={LogodesignData} />}
          />
          <Route
            path="best-digital-marketing-strategy-developemnt-agency-services-in-bangalore"
            element={<HeaderServic data={digitalmarketingData} />}
          />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
