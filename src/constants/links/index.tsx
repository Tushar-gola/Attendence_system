import DashboardCustomizeIcon from '@mui/icons-material/DashboardCustomize';
import MoreTimeIcon from '@mui/icons-material/MoreTime';
import AddBusinessIcon from '@mui/icons-material/AddBusiness';
import CabinIcon from '@mui/icons-material/Cabin';
export interface LinksType {
  label: string;
  route?: string;
  icon: JSX.Element;
  subRoute?: LinksType[];
}
export const Links: LinksType[] = [
  { label: 'DashBoard', route: '/dashboard', icon: <DashboardCustomizeIcon /> },
  {
    label: 'Shift Setting',
    icon: <MoreTimeIcon />,
    subRoute: [
      {
        label: 'Shift Master',
        route: '/shift-master',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Shift Group',
        route: '/shift-group',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Shift Roster',
        route: '/shift-roster',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Roster Scheduler',
        route: '/roster-scheduler',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Import Roster',
        route: '/import-roster',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Report(+)',
        route: '/report',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'DB Utility',
        route: '/db-utility',
        icon: <DashboardCustomizeIcon />,
      },
    ],
  },
  {
    label: 'Report ( - )',
    icon: <DashboardCustomizeIcon />,
    subRoute: [
      {
        label: 'Daily Report',
        route: '/shift-master',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Monthly Report',
        route: '/shift-group',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Salary Report',
        route: '/shift-roster',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Employee Info',
        route: '/roster-scheduler',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Leave Report',
        route: '/import-roster',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'On-Duty Report',
        route: '/report',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Shift Report',
        route: '/db-utility',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Master Report',
        route: '/db-utility',
        icon: <DashboardCustomizeIcon />,
      },
    ],
  },
  {
    label: 'User Setting',
    icon: <DashboardCustomizeIcon />,
    subRoute: [
      {
        label: 'User Info',
        route: '/shift-master',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Role Master',
        route: '/shift-group',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'User Rights',
        route: '/shift-roster',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Allowed Master',
        route: '/roster-scheduler',
        icon: <DashboardCustomizeIcon />,
      },
    ],
  },
  {
    label: 'Master',
    icon: <DashboardCustomizeIcon />,
    subRoute: [
      {
        label: 'Company',
        route: '/company',
        icon: <AddBusinessIcon color="primary" />,
      },
      {
        label: 'Employee Group',
        route: '/shift-master',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Department',
        route: '/department',
        icon: <CabinIcon color="primary" />,
      },
      {
        label: 'Designation',
        route: '/designation',
        icon: <DashboardCustomizeIcon color="primary" />,
      },
      {
        label: 'Grade',
        route: '/roster-scheduler',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Branch',
        route: '/branch',
        icon: <DashboardCustomizeIcon color="primary" />,
      },
      {
        label: 'Qualification',
        route: '/report',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Approved',
        route: '/db-utility',
        icon: <DashboardCustomizeIcon />,
      },
      {
        label: 'Employee Master',
        route: '/db-utility',
        icon: <DashboardCustomizeIcon />,
      },
    ],
  },
];
