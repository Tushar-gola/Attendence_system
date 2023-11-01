/* eslint-disable no-extra-parens */
/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { Column, Form, Modal, Row, Input, CustomTable, SearchFilter } from '@/components';
import { GetTableData, ModalEvents, usePostApi } from '@/hooks';
import { DepartmentSchema } from '@/schemas';
import { DepartmentGetApi, DepartmentInit, DepartmentPost, DepartmentPut } from '@/utils';
import { useFormik } from 'formik';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import { useQuery } from 'react-query';
// import { isAppendRow } from '@/functions';
const DepartmentForm = React.memo(({ handleSubmit, values, errors, touched, handleChange, handleBlur }) => {
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
  return (
    <Form onSubmit={handleSubmit} id="department" rowSpacing={2} columnSpacing={2} about="Department Details">
      {inputData.map(({ name, label, placeholder, half, values, required, error }) => (
        <Input
          name={name}
          label={label}
          onChange={handleChange}
          onBlur={handleBlur}
          value={values[name]}
          placeholder={placeholder}
          required={required}
          half={half}
          error={error}
          key={name}
        />
      ))}
    </Form>
  );
});

export const DepartmentPage = React.memo(() => {
  const [row, setRow] = React.useState(null);
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  const { editData, handleSetData } = GetTableData();
  const { data } = useQuery('department', DepartmentGetApi, {retry:1});
  const { mutation } = usePostApi(editData ? DepartmentPut : DepartmentPost, 'department');
  // const row = data?.data?.data;
  if (data && !row) {
    setRow(data?.data?.data);
  } 
  // React.useEffect(()=>{
  //   postData && isAppendRow(setRow, postData.data);
  // }, [postData]);
  const { handleChange, handleBlur, handleSubmit, values, errors, touched, setValues } = useFormik({
    initialValues: DepartmentInit,
    validationSchema: DepartmentSchema,
    onSubmit: (values, action) => {
      mutation.mutate(values);
      handleClose();
      action.resetForm();
    },
  });
  const Department = [
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
  React.useEffect(() => {
    editData && setValues(editData);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editData]);  
  const memoizedCustomTable = React.useMemo(() => <MemoizedCustomTable column={Department} row={row} />, [row]);
  return (
    <>
      <Row>
        <Column>
          <Modal buttonText={'Department'} heading="Add Deparment" handleClose={handleClose} open={open} handleOpen={handleOpen} handleCloseScreen={handleCloseScreen} form="department" maxWidth="sm">
           <DepartmentForm handleSubmit={handleSubmit} values={values} errors={errors} touched={touched} handleChange={handleChange} handleBlur={handleBlur} />
          </Modal>
        </Column>
        <Column xs={3}>
          <SearchFilter placeholder="Search on Department name" />
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