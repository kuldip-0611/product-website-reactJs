import * as yup from "yup";

export const Registrationvalidation = yup.object().shape({
    fname: yup.string().required("please enter your name"),
    email: yup
        .string()
        .required("please enter mail")
        .email("please enter valid email"),
    password: yup
        .string()
        .required("please enter password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    repeatpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),

    mobile: yup
        .string()
        .matches(/^[0-9]+$/, "Mobile number can only contain numeric characters")
        .min(10, "Mobile number must be at least 10 digits")
        .max(12, "Mobile number cannot be more than 12 digits")
        .required("Mobile Number is required"),
});

export const Loginvalidation = yup.object().shape({
    email: yup
        .string()
        .required("please enter email")
        .email("please enter valid email"),
    password: yup
        .string()
        .required("please enter password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
});

export const Change_Passwordvalidation = yup.object().shape({
    current_password: yup
        .string()
        .required("please enter password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    edit_password: yup
        .string()
        .required("please enter password")
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            "Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character"
        ),
    confirm_edit_password: yup
        .string()
        .oneOf([yup.ref("edit_password"), null], "Passwords must match"),
});
export const Edit_profilevalidation = yup.object().shape({
    fname: yup.string().required("fname is can't empty"),
    lname: yup.string().required("lname is can't empty"),
    email: yup
        .string()
        .required("please enter mail")
        .email("please enter valid email"),
    mobile: yup
        .string()
        .matches(/^[0-9]+$/, "Mobile number can only contain numeric characters")
        .min(10, "Mobile number must be at least 10 digits")
        .max(12, "Mobile number cannot be more than 12 digits")
        .required("Mobile Number is required"),
});

