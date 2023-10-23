/* eslint-disable no-extra-parens */
// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { SelectBar } from '@/components';
// function handle(event: { target: { value: any } }) {
//   console.log(event.target.value);
// }
// export const BranchPage = () => {
//   return (
//     <div>
//       <SelectBar
//         placeholder="Serach Bar"
//         option={[
//           { id: 'hello', label: 'ksahgs' },
//           { id: 'hello1', label: 'ksahgs' },
//         ]}
//         onChange={handle}
//       />
//     </div>
//   );
// };
import React from 'react';
import {
  Column,
  Form,
  Modal,
  Row,
  Input,
  CustomTable,
  SearchFilter,
  SelectBar,
} from '@/components';
import { ModalEvents, TableColums } from '@/hooks';
import { BranchSchema } from '@/schemas';
import { DepartmentSubmit, BranchInit } from '@/utils';
import { useFormik } from 'formik';
// import { Branch } from '@/constants';
export const BranchPage = React.memo(() => {
  const { open, handleClose, handleOpen, handleCloseScreen } = ModalEvents();
  const { Branch } = TableColums();
  const { handleChange, handleBlur, handleSubmit, values, errors, touched } =
    useFormik({
      initialValues: BranchInit,
      validationSchema: BranchSchema,
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
      name: 'address',
      label: 'Address',
      placeholder: 'Enter Address',
      half: true,
      values: values.address,
      required: true,
      error: errors.address && touched.address ? errors.address : undefined,
    },
    {
      name: 'city',
      label: 'City',
      placeholder: 'Enter City',
      half: true,
      values: values.city,
      required: true,
      error: errors.city && touched.city ? errors.city : undefined,
      Option: [
        { id: 'hello', label: 'ksahgs' },
        { id: 'hello1', label: 'ksasadsadsadsadashgs' },
      ],
    },
    {
      name: 'country',
      label: 'Country',
      placeholder: 'Enter Country',
      half: false,
      values: values.country,
      required: true,
      error: errors.country && touched.country ? errors.country : undefined,
      Option: [
        { id: 'hello', label: 'ksahgs' },
        { id: 'hello1', label: 'ksasadsadsadsadashgs' },
      ],
    },
    {
      name: 'state',
      label: 'State',
      placeholder: 'Enter State',
      half: false,
      values: values.state,
      required: true,
      error: errors.state && touched.state ? errors.state : undefined,
      Option: [
        { id: 'hello', label: 'ksahgs' },
        { id: 'hello1', label: 'ksasadsadsadsadashgs' },
      ],
    },
    {
      name: 'pinCode',
      label: 'PinCode',
      placeholder: 'Enter Pincode',
      half: false,
      values: values.pinCode,
      required: true,
      error: errors.pinCode && touched.pinCode ? errors.pinCode : undefined,
    },
    {
      name: 'phone',
      label: 'Phone',
      placeholder: 'Enter Phone',
      half: false,
      values: values.phone,
      required: true,
      error: errors.phone && touched.phone ? errors.phone : undefined,
    },
    {
      name: 'email',
      label: 'Email',
      placeholder: 'Enter Email',
      half: false,
      values: values.email,
      required: true,
      error: errors.email && touched.email ? errors.email : undefined,
    },
    {
      name: 'mobile',
      label: 'Mobile',
      placeholder: 'Enter Mobile',
      half: false,
      values: values.mobile,
      required: true,
      error: errors.mobile && touched.mobile ? errors.mobile : undefined,
    },
    {
      name: 'remark',
      label: 'Remarks',
      placeholder: 'Enter Remarks',
      half: false,
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
            buttonText={'Branch'}
            heading="Add Branch"
            handleClose={handleClose}
            open={open}
            handleOpen={handleOpen}
            handleCloseScreen={handleCloseScreen}
            form="branch" // Write Page route name
            maxWidth="md"
          >
            <Form
              onSubmit={handleSubmit}
              id="branch"
              rowSpacing={2}
              columnSpacing={2}
              about="Branch Details"
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
                  Option,
                }) => {
                  return (
                    // <>
                    !Option ? (
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
                    ) : (
                      <SelectBar
                        placeholder="Serach Bar"
                        option={Option}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        label={label}
                        name={name}
                        value={values}
                        required={required}
                        key={name}
                        half={half}
                      />
                    )
                    // </>
                  );
                },
              )}
            </Form>
          </Modal>
        </Column>
        <Column xs={3}>
          <SearchFilter placeholder="Search on Branch name" />
        </Column>
        <Column xs={12}>
          <CustomTable column={Branch} />
        </Column>
      </Row>
    </>
  );
});
