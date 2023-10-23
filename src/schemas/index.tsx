import * as Yup from 'yup';

export const SigninValid = Yup.object().shape({
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  password: Yup.string().required('Password is required'),
});

export const companySchema = Yup.object().shape({
  company_code: Yup.string().required('Company code is required'),
  company_name: Yup.string().required('Company name is required'),
  address: Yup.string().required('Address is required'),
  phone: Yup.string().required('Phone is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  website: Yup.string()
    // .url('Invalid website URL')
    .required('Website is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  pinCode: Yup.string().required('Pin code is required'),
  tin_no: Yup.string().required('TIN number is required'),
  pan_no: Yup.string().required('PAN number is required'),
});

export const DepartmentSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  remark: Yup.string().required('Remarks is required'),
});

export const DesignationSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  remark: Yup.string().required('Remarks is required'),
});
export const BranchSchema = Yup.object().shape({
  name: Yup.string().required('Name is required'),
  address: Yup.string().required('Address is required'),
  country: Yup.string().required('Country is required'),
  state: Yup.string().required('State is required'),
  city: Yup.string().required('City is required'),
  pinCode: Yup.string()
    .matches(/^[0-9]{6}$/, 'Must be a 6-digit PIN code')
    .required('PIN code is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a 10-digit phone number')
    .required('Phone is required'),
  email: Yup.string()
    .email('Invalid email format')
    .required('Email is required'),
  mobile: Yup.string()
    .matches(/^[0-9]{10}$/, 'Must be a 10-digit mobile number')
    .required('Mobile is required'),
  remarks: Yup.string(),
});
