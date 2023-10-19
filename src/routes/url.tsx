import {
  BranchPage,
  CompanyPage,
  Dashboard,
  DepartmentPage,
  DesignationPage,
} from '@/pages';
interface URLS {
  path: string;
  page: React.ReactNode;
}
export const Urls: URLS[] = [
  { path: '/dashboard', page: <Dashboard /> },
  { path: '/company', page: <CompanyPage /> },
  { path: '/company/:toggle', page: <CompanyPage /> },
  { path: '/department/:toggle', page: <DepartmentPage /> },
  { path: '/department', page: <DepartmentPage /> },
  { path: '/department/:toggle', page: <DepartmentPage /> },
  { path: '/designation', page: <DesignationPage /> },
  { path: '/designation/:toggle', page: <DesignationPage /> },
  { path: '/branch', page: <BranchPage /> },
  { path: '/branch/:toggle', page: <BranchPage /> },
];
