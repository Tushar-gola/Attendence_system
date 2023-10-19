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
// import { fakeApi } from '@/utils';
import { ModalEvents, TableColums } from '@/hooks';
import { DesignationSchema } from '@/schemas';
import { DesignationtSubmit, DesignationInit } from '@/utils';
import { useFormik } from 'formik';
// import { PostApi } from '@/hooks/PostApi';
export const DesignationPage = React.memo(() => {
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  const { Designation } = TableColums();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: DesignationInit,
      validationSchema: DesignationSchema,
      onSubmit: DesignationtSubmit,
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
  // const { mutation } = PostApi(PostData);
  // // const { data } = GetAPi('hello', fakeApi);
  // // console.log(data);
  // const handle = () => {
  //   const formData = { name: 'Tushar ' };
  //   mutation.mutate(formData);
  //   console.log(mutation);
  // };
  return (
    <>
      <Row>
        <Column>
          <Modal
            buttonText={'Designation'}
            heading="Add Designation"
            handleClose={handleClose}
            open={open}
            handleOpen={handleOpen}
            handleCloseScreen={handleCloseScreen}
            form="designation"
            maxWidth="sm"
          >
            <Form
              onSubmit={handleSubmit}
              id="designation"
              rowSpacing={2}
              columnSpacing={2}
              about="Designation Details"
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
          <SearchFilter placeholder="Search on Designation name" />
        </Column>
        <Column xs={12}>
          <CustomTable column={Designation} />
        </Column>
      </Row>
      {/* <button onClick={handle}>hj\asfdahhsjaklsjhkggh</button> */}
    </>
  );
});
