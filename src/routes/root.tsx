import { Route, Routes } from 'react-router-dom';
import { ProtectedRoute, PublicRoute } from '@/helpers';
import { Navigate } from 'react-router-dom';
import { SignIn } from '@/pages';
import { Urls } from '.';
export function Routers() {
  return (
    <>
      <Routes>
        <Route path="/" element={<PublicRoute />}>
          <Route path="/" element={<Navigate replace to="/signIn" />} />
          <Route path="/signIn" element={<SignIn />} />
        </Route>
        <Route path="/" element={<ProtectedRoute />}>
          {Urls.map(({ path, page }) => {
            return <Route path={path} element={page} key={path} />;
          })}
        </Route>
      </Routes>
    </>
  );
}
