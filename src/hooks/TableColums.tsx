import EditIcon from '@mui/icons-material/Edit';
import { IconButton } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { GetTableData, ModalEvents } from '@/hooks';

type Item = {
  id: string;
  label: string;
  renderCell?: (data: string | object) => React.ReactNode;
};
export const TableColums = () => {
  const { handleSetData } = GetTableData(); // Use the hook and destructure the values
  const { handleOpen } = ModalEvents();
  const Company: Item[] = [
    { id: 'id', label: '#id', renderCell: undefined },
    { id: 'company_code', label: 'Company Code', renderCell: undefined },
    { id: 'company_name', label: 'Company Name', renderCell: undefined },
    { id: 'address', label: 'Address', renderCell: undefined },
    { id: 'phone', label: 'Phone no', renderCell: undefined },
    { id: 'email', label: 'Email id', renderCell: undefined },
    { id: 'website', label: 'Website', renderCell: undefined },
    { id: 'tin_no', label: 'Tin No', renderCell: undefined },
    { id: 'city', label: 'City', renderCell: undefined },
    { id: 'country', label: 'Country', renderCell: undefined },
    { id: 'state', label: 'State', renderCell: undefined },
    { id: 'pancard', label: 'PanCard No', renderCell: undefined },
    { id: 'pincode', label: 'PinCode', renderCell: undefined },
    {
      id: 'action',
      label: 'Action',
      renderCell: (data) => {
        return (
          <>
            <IconButton
              color="primary"
              onClick={() => {
                handleSetData(data);
                handleOpen();
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton color="primary">
              <HighlightOffIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const Department: Item[] = [
    { id: 'name', label: 'Name', renderCell: undefined },
    { id: 'remark', label: 'Remarks', renderCell: undefined },
    {
      id: 'action',
      label: 'Action',
      renderCell: (data) => {
        return (
          <>
            <IconButton
              color="primary"
              onClick={() => {
                handleSetData(data);
                handleOpen();
              }}
            >
              <EditIcon />
            </IconButton>
            <IconButton color="primary">
              <HighlightOffIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const Designation: Item[] = [
    { id: 'name', label: 'Name', renderCell: undefined },
    { id: 'remark', label: 'Remarks', renderCell: undefined },
    {
      id: 'action',
      label: 'Action',
      renderCell: () => {
        return (
          <>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton color="primary">
              <HighlightOffIcon />
            </IconButton>
          </>
        );
      },
    },
  ];
  const Branch: Item[] = [
    { id: 'name', label: 'Name', renderCell: undefined },
    { id: 'address', label: 'Address', renderCell: undefined },
    { id: 'country', label: 'Contry', renderCell: undefined },
    { id: 'state', label: 'State', renderCell: undefined },
    { id: 'city', label: 'City', renderCell: undefined },
    { id: 'pincode', label: 'PinCode', renderCell: undefined },
    { id: 'phone', label: 'Phone no', renderCell: undefined },
    { id: 'email', label: 'Email id', renderCell: undefined },
    { id: 'remark', label: 'Remarks', renderCell: undefined },
    {
      id: 'action',
      label: 'Action',
      renderCell: () => {
        return (
          <>
            <IconButton color="primary">
              <EditIcon />
            </IconButton>
            <IconButton color="primary">
              <HighlightOffIcon />
            </IconButton>
          </>
        );
      },
    },
  ];

  return { Company, Branch, Designation, Department };
};
