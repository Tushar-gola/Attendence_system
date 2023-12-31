/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-extra-parens */
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import { styled } from '@mui/material';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(() => ({
  '&:nth-of-type(odd)': {
    backgroundColor: '#1b998a10',
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));
type Column = {
  id: string;
  label: string;
  renderCell?: (data: string | object) => React.ReactNode;
};

interface Props {
  column: Column[];
  row: [key: string];
}

export const CustomTable =  React.memo(({ column, row }: Props) => {  
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (_event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: '2rem' }}>
      <TableContainer sx={{ maxHeight: 500 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {column.map((column) => (
                <TableCell key={column.id} style={{ fontSize: '.8rem' }}>
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {row && row?.map((row, index) => {
              return (
                <StyledTableRow
                  // hover
                  role="checkbox"
                  tabIndex={-1}
                  key={index}
                >
                  {column.map((column) => {
                    const value = (row as any)[column?.id];
                    return <StyledTableCell key={column.id}>{column.renderCell ? column.renderCell(row) : value ? value : 'N/A'}</StyledTableCell>;
                  })}
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination rowsPerPageOptions={[10, 25, 100]} component="div" count={row?.length || 0} rowsPerPage={rowsPerPage} page={page} onPageChange={handleChangePage} onRowsPerPageChange={handleChangeRowsPerPage} />
    </Paper>
  );
});
