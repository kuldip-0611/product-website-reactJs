import * as yup from "yup";
import { yup_validation_messages} from "./messages";

export const Registrationvalidation = yup.object().shape({
    fname: yup.string().required(yup_validation_messages.fname_required),
    email: yup
        .string()
        .required(yup_validation_messages.email_required)
        .email(yup_validation_messages.email_valid),
    password: yup
        .string()
        .required(yup_validation_messages.password_required)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            yup_validation_messages.password_valid
        ),
    repeatpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], yup_validation_messages.confirm_password_valid),

    mobile: yup
        .string()
        .matches(/^[0-9]+$/, yup_validation_messages.phone_have_numbers)
        .min(yup_validation_messages.phone_min_value, yup_validation_messages.phone_min_length)
        .max(yup_validation_messages.phone_max_value, yup_validation_messages.phone_max_length)
        .required(yup_validation_messages.phone_required),
});

export const Loginvalidation = yup.object().shape({
    email: yup
        .string()
        .required(yup_validation_messages.email_required)
        .email(yup_validation_messages.email_valid),
    password: yup
        .string()
        .required(yup_validation_messages.password_required)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            yup_validation_messages.password_valid
        ),
});

export const Change_Passwordvalidation = yup.object().shape({
    current_password: yup
        .string()
        .required(yup_validation_messages.password_required)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            yup_validation_messages.password_valid
        ),
    edit_password: yup
        .string()
        .required(yup_validation_messages.password_required)
        .matches(
            /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\\$%\\^&\\*])(?=.{8,})/,
            yup_validation_messages.password_valid
        ),
    confirm_edit_password: yup
        .string()
        .oneOf([yup.ref("edit_password"), null], yup_validation_messages.confirm_password_valid),
});
export const Edit_profilevalidation = yup.object().shape({
    fname: yup.string().required(yup_validation_messages.fname_required),
    lname: yup.string().required(yup_validation_messages.lname_required),
    email: yup
        .string()
        .required(yup_validation_messages.email_required)
        .email(yup_validation_messages.email_valid),
    mobile: yup
    .string()
    .matches(/^[0-9]+$/, yup_validation_messages.phone_have_numbers)
    .min(yup_validation_messages.phone_min_value, yup_validation_messages.phone_min_length)
    .max(yup_validation_messages.phone_max_value, yup_validation_messages.phone_max_length)
    .required(yup_validation_messages.phone_required),
});