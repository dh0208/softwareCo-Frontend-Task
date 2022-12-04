import * as Yup from "yup";

const schema = Yup.object({
  productName: Yup.string()
    .min(4, "Minimum 4 characters")
    .required("Required!"),
  stockQty: Yup.number().min(2, "Minimum 2 characters").required("Required!"),
  price: Yup.number().min(2, "Minimum 2 characters").required("Required!"),
});
export default schema;
