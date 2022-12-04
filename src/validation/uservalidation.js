import * as Yup from "yup";

const schema = Yup.object({
    email: Yup.string().email("Invalid email format").required("Required!"),
    password: Yup.string().min(8, "Minimum 8 characters").required("Required!"),
})
export default schema;