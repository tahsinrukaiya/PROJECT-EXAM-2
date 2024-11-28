import * as yup from "yup";

export const registerCustomerSchema = yup.object().shape({
    name: yup
        .string()
        .required("Name is required")
        .min(3, "Name must be at least 3 characters long")
        .max(50, "Name cannot exceed 50 characters"),
    email: yup
        .string()
        .email("Enter a valid email address")
        .matches(
            /^[a-zA-Z0-9._%+-]+@stud\.noroff\.no$/,
            "Email must end with @stud.noroff.no"
        )
        .required("Email is required"),
    password: yup
        .string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long"),
});
