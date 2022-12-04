import * as Yup from "yup";

const schema = Yup.object({
  firstName: Yup.string()
    // .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(9)
    .required("Required!"),
  lastName: Yup.string()
    // .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
    .max(9)
    .required("Required!"),
  email: Yup.string().email("Invalid email format").required("Required!"),
  password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
});
export default schema;
