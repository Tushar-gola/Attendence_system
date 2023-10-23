/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import React from 'react';
import { Column, Form, Modal, Row, Input, CustomTable, SearchFilter } from '@/components';
import { GetAPi, GetTableData, ModalEvents, usePostApi } from '@/hooks';
import { DesignationSchema } from '@/schemas';
import { DesignationGetApi, DesignationInit, DesignationPost, DesignationPut } from '@/utils';
import { useFormik } from 'formik';
import { IconButton } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
export const DesignationPage = React.memo(() => {
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  const { editData, handleSetData } = GetTableData();
  const { data } = GetAPi('designation', DesignationGetApi);
  const row = data?.data?.data;
  const { mutation } = usePostApi(editData ? DesignationPut : DesignationPost);
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
  const { handleChange, handleBlur, handleSubmit, values, errors, touched, setValues } = useFormik({
    initialValues: DesignationInit,
    validationSchema: DesignationSchema,
    onSubmit: (values, action) => {
      mutation.mutate(values);
      handleClose();
      action.resetForm();
    },
  });

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
          <SearchFilter placeholder="Search on Designation name" />
        </Column>
        <Column xs={12}>
          <CustomTable column={Designation} row={row} />
        </Column>
      </Row>
      {/* <button onClick={handle}>hj\asfdahhsjaklsjhkggh</button> */}
    </>
  );
});
