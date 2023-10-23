import React, { useEffect } from 'react';
import EditIcon from '@mui/icons-material/Edit';
import {
  Column,
  Form,
  Modal,
  Row,
  Input,
  CustomTable,
  SearchFilter,
} from '@/components';
import {
  GetAPi,
  GetTableData,
  ModalEvents,
  // TableColums,
  usePostApi,
} from '@/hooks';
import { companySchema } from '@/schemas';
import { CompanyGetApi, CompanyPost, companyInit } from '@/utils';
import { useFormik } from 'formik';
import { IconButton } from '@mui/material';
export const CompanyPage = React.memo(() => {
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  // const { Company } = TableColums();
  const Company = [
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
              {/* <HighlightOffIcon /> */}
            </IconButton>
          </>
        );
      },
    },
  ];
  const { mutation } = usePostApi(CompanyPost);
  const { editData, handleSetData } = GetTableData();
  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    errors,
    touched,
    setValues,
  } = useFormik({
    initialValues: companyInit,
    validationSchema: companySchema,
    onSubmit: () => {
      mutation.mutate(values);
    },
  });
  const inputData = [
    {
      name: 'company_code',
      label: 'Company Code',
      placeholder: 'Enter Company Code',
      half: true,
      values: values?.company_code,
      required: true,
      error:
        errors.company_code && touched.company_code
          ? errors.company_code
          : undefined,
    },
    {
      name: 'company_name',
      label: 'Company Name',
      placeholder: 'Enter Company Name',
      half: true,
      values: values?.company_name,
      required: true,
      error:
        errors.company_name && touched.company_name
          ? errors.company_name
          : undefined,
    },
    {
      name: 'address',
      label: 'Address',
      placeholder: 'Enter Address',
      half: true,
      values: values?.address,
      required: true,
      error: errors.address && touched.address ? errors.address : undefined,
    },
    {
      name: 'phone',
      label: 'Phone',
      placeholder: 'Enter Phone Number',
      half: true,
      values: values?.phone,
      required: true,
      error: errors.phone && touched.phone ? errors.phone : undefined,
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      half: false,
      values: values?.email,
      required: true,
      error: errors.email && touched.email ? errors.email : undefined,
    },
    {
      name: 'website',
      label: 'Website',
      placeholder: 'Enter Website url',
      half: false,
      values: values?.website,
      required: false,
      error: errors.website && touched.website ? errors.website : undefined,
    },
    {
      name: 'country',
      label: 'Country',
      placeholder: 'Enter Country name',
      half: false,
      values: values?.country,
      required: true,
      error: errors.country && touched.country ? errors.country : undefined,
    },
    {
      name: 'state',
      label: 'State',
      placeholder: 'Enter State name',
      half: false,
      values: values?.state,
      required: true,
      error: errors.state && touched.state ? errors.state : undefined,
    },
    {
      name: 'city',
      label: 'City',
      placeholder: 'Enter City name',
      half: false,
      values: values?.city,
      required: true,
      error: errors.city && touched.city ? errors.city : undefined,
    },
    {
      name: 'pinCode',
      label: 'pinCode',
      placeholder: 'Enter PinCode',
      half: false,
      values: values?.pinCode,
      required: true,
      error: errors.pinCode && touched.pinCode ? errors.pinCode : undefined,
    },
    {
      name: 'tin_no',
      label: 'Tin No',
      placeholder: 'Enter Tin number',
      half: false,
      values: values?.tin_no,
      required: true,
      error: errors.tin_no && touched.tin_no ? errors.tin_no : undefined,
    },
    {
      name: 'pan_no',
      label: 'PanCard number',
      placeholder: 'Enter PanCard number',
      half: false,
      values: values?.pan_no,
      required: true,
      error: errors.pan_no && touched.pan_no ? errors.pan_no : undefined,
    },
  ];
  const { data } = GetAPi('company', CompanyGetApi);
  const row = data?.data?.data;
  console.log(editData);
  // if (editData) {
  //   setValues(editData);
  // }
  React.useEffect(() => {
    setValues(editData);
  }, [editData]);

  return (
    <>
      <Row>
        <Column>
          <Modal
            buttonText={'Company'}
            heading="Add Company"
            handleClose={handleClose}
            open={open}
            handleOpen={handleOpen}
            handleCloseScreen={handleCloseScreen}
            form="company"
            maxWidth="md"
          >
            <Form
              onSubmit={handleSubmit}
              id="company"
              rowSpacing={2}
              columnSpacing={2}
              about="Company Details"
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
          <SearchFilter placeholder="Search Code" />
        </Column>
        <Column xs={12}>
          <CustomTable column={Company} row={row} />
        </Column>
      </Row>
    </>
  );
});
