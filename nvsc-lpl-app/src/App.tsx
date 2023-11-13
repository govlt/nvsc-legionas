import './App.css';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ImportantInfo } from './pages/ImportantInfo';
import { PreventionInfo } from './pages/PreventionInfo';
import { LegionellosisInfo } from './pages/LegionellosisInfo';
import { RightsAndObligationsInfo } from './pages/RightsAndObligationsInfo';
import { ContactsInfo } from './pages/ContactsInfo';
import { WaterTestingInfo } from './pages/WaterTestingInfo';
import { FAQ } from './pages/FAQ';
import { SafetyInfo } from './pages/SafetyInfo';

export const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/svarbu-zinoti" element={<ImportantInfo />} />
        <Route path="/prevencija" element={<PreventionInfo />} />
        <Route path="/legionelioze" element={<LegionellosisInfo />} />
        <Route path="/teises-atsakomybes" element={<RightsAndObligationsInfo />} />
        <Route path="/kontaktai" element={<ContactsInfo />} />
        <Route path="/geriamojo-vandens-tyrimu-programos" element={<WaterTestingInfo />} />
        <Route path="/duk" element={<FAQ />} />
        <Route path="/kaip-apsisaugoti" element={<SafetyInfo/>} />
      </Routes>
    </HashRouter>
  );
};
