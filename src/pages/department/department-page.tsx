import React from 'react';
import {
  Column,
  Form,
  Modal,
  Row,
  Input,
  CustomTable,
  SearchFilter,
} from '@/components';
import { ModalEvents, TableColums } from '@/hooks';
import { DepartmentSchema } from '@/schemas';
import { DepartmentSubmit, DepartmentInit } from '@/utils';
import { useFormik } from 'formik';
export const DepartmentPage = React.memo(() => {
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  const { Department } = TableColums();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: DepartmentInit,
      validationSchema: DepartmentSchema,
      onSubmit: DepartmentSubmit,
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

  return (
    <>
      <Row>
        <Column>
          <Modal
            buttonText={'Department'}
            heading="Add Deparment"
            handleClose={handleClose}
            open={open}
            handleOpen={handleOpen}
            handleCloseScreen={handleCloseScreen}
            form="department"
            maxWidth="sm"
          >
            <Form
              onSubmit={handleSubmit}
              id="department"
              rowSpacing={2}
              columnSpacing={2}
              about="Department Details"
            >
              {inputData.map(
                ({
                  name,
                  label,
                  placeholder,
                  half,
                  values,
                  required,
                  error,
                }) => {
                  return (
                    <Input
                      name={name}
                      label={label}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values}
                      placeholder={placeholder}
                      required={required}
                      half={half}
                      error={error || undefined}
                      key={name}
                    />
                  );
                },
              )}
            </Form>
          </Modal>
        </Column>
        <Column xs={3}>
          <SearchFilter placeholder="Search on Department name" />
        </Column>
        <Column xs={12}>
          <CustomTable column={Department} />
        </Column>
      </Row>
    </>
  );
});
