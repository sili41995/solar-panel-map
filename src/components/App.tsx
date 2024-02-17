import HomePage from '@/pages/HomePage';
import { Route, Routes } from 'react-router-dom';
import SharedLayout from '@/components/SharedLayout';
import { PagePaths } from '@/constants';
import EntryDetailsPage from '@/pages/EntryDetailsPage';

const App = () => {
  return (
    <Routes>
      <Route path={PagePaths.homePath} element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route
          path={`${PagePaths.homePath}:${PagePaths.dynamicParam}`}
          element={<EntryDetailsPage />}
        ></Route>
        <Route path='*' element={<div>notFound</div>} />
      </Route>
    </Routes>
  );
};

export default App;