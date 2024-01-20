import Box from "@mui/material/Box"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Form } from "formik"
import { object, string } from "yup"

export const registerSchema = object({
    email: string()
        .email("Email must be a valid email!")
        .required("Email is a required field!"),
    password: string()
        .required("Password is a required field!")
        .min(8, "Password must be at least 8 characters !")
        .max(16, "Password must be at most 16 characters !")
        .matches(/\d+/, "The password must contain at least one number!")
        .matches(
            /[a-z]/,
            "Password must contains at least one lowercase letter!"
        )
        .matches(
            /[A-Z]/,
            "Password must contains at least one uppercase letter!"
        )
        .matches(/[!/[@$!%*?&]+/,
            "Password must contain at least one special character! (@ / $ / ! / % / * / ? / & )"
        ),
    username: string().required("Username is a required field!").max(20," Username must contains maximum 20 character."),
    firstName: string().required("First Name is a required field!").max(20,"First Name must contains maximum 20 character."),
    lastName: string().required("Last Name is a required field!").max(20,"Last Name must contains maximum 20 character."),
});

const RegisterForm = ({values,handleChange,errors,touched,handleBlur}) => {
  return (
    <Form>
    <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
        }}
    >
        <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="filled"
            color="warning"
            value={values.username}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.username && Boolean(errors.username)}
            helperText={touched.username && errors.username  }
        />
        <TextField
            label="First Name"
            name="firstName"
            id="firstName"
            type="text"
            variant="filled"
            color="warning"
            value={values.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.firstName && Boolean(errors.firstName)}
            helperText={touched.firstName && errors.firstName}
        />
        <TextField
            label="Last Name"
            name="lastName"
            id="last_name"
            type="text"
            variant="filled"
            color="warning"
            value={values.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.lastName && Boolean(errors.lastName)}
            helperText={touched.lastName  && errors.lastName}
        />
        <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="filled"
            color="warning"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.email && Boolean(errors.email)}
            helperText={touched.email  && errors.email}
        />
        <TextField
            label="Password"
            name="password"
            id="password"
            type="password"
            variant="filled"
            color="warning"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            error={touched.password && Boolean(errors.password)}
            helperText={touched.password  && errors.password}
        />
        <Button
            type="submit"
            variant="contained"
            size="large"
            color="warning"
        >
            Submit
        </Button>
    </Box>
</Form>
  )
}

export default RegisterForm