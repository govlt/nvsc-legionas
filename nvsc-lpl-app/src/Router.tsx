import {
    createBrowserRouter,
} from "react-router-dom";
import { Home } from "./pages/Home";
import { ImportantInfo } from "./pages/ImportantInfo";
import { PreventionInfo } from "./pages/PreventionInfo";
import { LegionellosisInfo } from "./pages/LegionellosisInfo";
import { RightsAndObligationsInfo } from "./pages/RightsAndObligationsInfo";
import { ContactsInfo } from "./pages/ContactsInfo";
import { WaterTestingInfo } from "./pages/WaterTestingInfo";
import { FAQ } from "./pages/FAQ";

export const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/svarbu-zinoti",
      element: <ImportantInfo />
    },
    {
      path: "/prevencija",
      element: <PreventionInfo />
    },
    {
      path: "/legionelioze",
      element: <LegionellosisInfo />
    },
    {
      path: "/teises-atsakomybes",
      element: <RightsAndObligationsInfo />
    },
    {
      path: "/kontaktai",
      element: <ContactsInfo />
    },
    {
      path: "/geriamojo-vandens-tyrimu-programos",
      element: <WaterTestingInfo />
    },
    {
      path: "/duk",
      element: <FAQ />
    },
], {basename:'/nvsc-lpl'});
