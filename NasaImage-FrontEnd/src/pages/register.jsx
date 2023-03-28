import { Link } from "react-router-dom";
import Button from "../components/Button";
import IconButton from "../components/IconButton";
import Input from "../components/Input";
import Google from "../assets/Google.svg";
import { useFormik } from "formik";
import { registerSchema } from "../utils/yup";
import { useUserRegister } from "../hooks/mutations/register-user";
import { successToaster, errorToaster } from "../utils/toast";
import React from "react";

export default function Register() {
  const { mutate: userRegister } = useUserRegister();

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      confirm_password: "",
    },
    validationSchema: registerSchema,
    onSubmit: (values) => {
      userRegister({
        values:values
      },
        {
          onSuccess: () => {
            successToaster("Register Successfully!");

            setTimeout(() => (window.location = "/login"), 3000);
          },
          onError: () => {
            errorToaster("Invalid Credentials");
          },
        }
      );
    },
  });

  return (
    <>
      <div className="flex min-h-full  flex-col justify-center bg-gray-300 mx-auto px-6  py-8 sm:px-6 lg:px-8">
        <div className="mt-6 sm:mx-auto sm:w-full sm:max-w-md">
          <div className=" py-8  shadow rounded-lg px-6 sm:px-10 bg-white">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
              <h2 className="mt-2 text-center text-2xl font-bold tracking-tight ">
                Sign Up
              </h2>
            </div>
            <form className="space-y-6 my-12 " onSubmit={formik.handleSubmit}>
              <div className="">
                <Input
                  onBlur={formik.handleBlur}
                  value={formik.values.name}
                  onChange={formik.handleChange}
                  id="name"
                  name="name"
                  type="text"
                  autoComplete="name"
                  placeholder="Enter your name"
                  isInvalid={"name" in formik.errors && formik.touched.name}
                  errorMessage={formik.errors.name}
                />
              </div>
              <div className="">
                <Input
                  onBlur={formik.handleBlur}
                  value={formik.values.email}
                  onChange={formik.handleChange}
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  isInvalid={"email" in formik.errors && formik.touched.email}
                  errorMessage={formik.errors.email}
                />
              </div>

              <div>
                <div className="">
                  <Input
                    onBlur={formik.handleBlur}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    placeholder="Enter your password"
                    isInvalid={
                      "password" in formik.errors && formik.touched.password
                    }
                    errorMessage={formik.errors.password}
                  />
                </div>
              </div>
              <div>
                <div className="">
                  <Input
                    onBlur={formik.handleBlur}
                    value={formik.values.confirm_password}
                    onChange={formik.handleChange}
                    id="confirmPassword"
                    name="confirm_password"
                    type="password"
                    autoComplete="confirm-password"
                    placeholder="confirm password"
                    isInvalid={
                      "confirm_password" in formik.errors &&
                      formik.touched.confirm_password
                    }
                    errorMessage={formik.errors.confirm_password}
                  />
                </div>
              </div>

              <div className="pt-8">
                <Button title={"Signup"} className="w-full " />
              </div>
            </form>

            <div className="mt-6">
              <div className="mt-6 ">
                <IconButton icon={Google} label={"Sign up with Google"} />
              </div>
            </div>
            <div className="mt-4 text-sm flex justify-center">
              <a href="#" className="font-normal  ">
                Already have account ?
                <Link to="/login">
                  <span className="text-dark-purple hover:text-light-purple">
                    login
                  </span>
                </Link>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
