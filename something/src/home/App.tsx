import '../../css/home/main.scss';

import { Navigate, Route, Routes } from 'react-router-dom';

import { App as AvailableRelics } from '../available-relics/App';
import { App as RelicFinder } from '../relic-finder/App';
import Nav from './Nav';

const App = () => {
  return (
    <Routes>
      {/* 旧URLでアクセスされた時のRedirect用 */}
      <Route path="/RelicFinder" element={<Navigate to="/relic-finder" />} />

      <Route path="/" element={<Nav />}>
        <Route index element={<Navigate to="/relic-finder" />} />
        <Route path="/relic-finder" element={<RelicFinder />} />
        <Route path="/available-relics" element={<AvailableRelics />} />
      </Route>

      {/* 404 */}
      <Route path="*" element={<p style={{ color: 'white' }}>Not found</p>} />
    </Routes>
  );
};

export default App;
