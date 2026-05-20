import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/react";
import PortfolioSite from "./components/PortfolioSite";

function App() {
  return (
    <>
      <PortfolioSite />
      <Analytics />
      <SpeedInsights />
    </>
  );
}

export default App;
