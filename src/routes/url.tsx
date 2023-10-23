import {
  Dashboard,
  CompanyPage,
  DepartmentPage,
  DesignationPage,
  BranchPage,
} from '@/pages';
interface URLS {
  path: string;
  page: React.ReactNode;
}
export const Urls: URLS[] = [
  { path: '/dashboard', page: <Dashboard /> },
  { path: '/company', page: <CompanyPage /> },
  { path: '/department', page: <DepartmentPage /> },
  { path: '/designation', page: <DesignationPage /> },
  { path: '/branch', page: <BranchPage /> },
];
