import { Link, Navigate, Route, Routes } from 'react-router-dom';
import { LazyPage1, LazyPage2, LazyPage3 } from '../pages';

export const LazyLayout = () => {
  return (
    <>
      <div>LazyLayout</div>
      <ul>
        <Link to={'lazy1'}>Lazy 1</Link>
        <Link to={'lazy2'}>Lazy 2</Link>
        <Link to={'lazy3'}>Lazy 3</Link>
      </ul>

      <Routes>
        <Route path="/lazy1" element={<LazyPage1 />} />
        <Route path="/lazy2" element={<LazyPage2 />} />
        <Route path="/lazy3" element={<LazyPage3 />} />

        <Route path="/*" element={<Navigate to={'/lazy-layout/lazy1'} replace />} />
      </Routes>
    </>
  );
};

export default LazyLayout;
