import * as yup from "yup";

export const inputschema = yup.object().shape({
	text: yup.string().required("Please provide a valid todo text"),
});
