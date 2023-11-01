/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React, { useEffect } from 'react';
import { Column, Form, Modal, Row, Input, CustomTable, SearchFilter } from '@/components';
import { GetTableData, ModalEvents, usePostApi } from '@/hooks';
import { DesignationSchema } from '@/schemas';
import { DesignationGetApi, DesignationInit, DesignationPost, DesignationPut } from '@/utils';
import { useFormik } from 'formik';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useQuery } from 'react-query';
import { isAppendRow } from '@/functions';
export const DesignationPage = React.memo(() => {
  const [row, setRow] = React.useState(null);
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  const { editData, handleSetData } = GetTableData();
  const { data } = useQuery('designation', DesignationGetApi, { retry:1 });
  const { mutation, postData } = usePostApi(editData ? DesignationPut : DesignationPost);
  if (data && !row) {
    setRow(data?.data?.data);
  } 
  useEffect(()=>{
    postData && isAppendRow(setRow, postData.data);
  }, [postData]);
  const { handleChange, handleBlur, handleSubmit, values, errors, touched, setValues } = useFormik({
    initialValues: DesignationInit,
    validationSchema: DesignationSchema,
    onSubmit: async (values, action) => {
      mutation.mutate(values);      
      handleClose();
      action.resetForm();
    },
  });  
  const Designation = [
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
            <IconButton color="primary">{/* <HighlightOffIcon /> */}</IconButton>
          </>
        );
      },
    },
  ];
  const inputData = [
    {
      name: 'name',
      label: 'Name',
      placeholder: 'Enter Name',
      half: true,
      values: values.name,
      required: true,
      error: errors.name && touched.name ? errors.name : undefined,
    },
    {
      name: 'remark',
      label: 'Remarks',
      placeholder: 'Enter Remarks',
      half: true,
      values: values.remark,
      required: true,
      error: errors.remark && touched.remark ? errors.remark : undefined,
    },
  ];
  React.useEffect(() => {
    editData && setValues(editData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData]);
  const memoizedCustomTable = React.useMemo(() => <MemoizedCustomTable column={Designation} row={row} />, [row]);
  const memoizedCustomSearch = React.useMemo(() => <MemoizedCustomSearch  />, []);
  return (
    <>
      <Row>
        <Column>
          <Modal buttonText={'Designation'} heading="Add Designation" handleClose={handleClose} open={open} handleOpen={handleOpen} handleCloseScreen={handleCloseScreen} form="designation" maxWidth="sm">
            <Form onSubmit={handleSubmit} id="designation" rowSpacing={2} columnSpacing={2} about="Designation Details">
              {inputData.map(({ name, label, placeholder, half, values, required, error }) => {
                return <Input name={name} label={label} onChange={handleChange} onBlur={handleBlur} value={values} placeholder={placeholder} required={required} half={half} error={error || undefined} key={name} />;
              })}
            </Form>
          </Modal>
        </Column>
        <Column xs={3}>
          {memoizedCustomSearch}
        </Column>
        <Column xs={12}>
          {memoizedCustomTable}
        </Column>
      </Row>
    </>
  );
});
const MemoizedCustomTable = React.memo(({ column, row }) => {
  return <CustomTable column={column} row={row} />;
});
const MemoizedCustomSearch = React.memo(()=>{
  return <SearchFilter placeholder="Search on Designation name" />;
});