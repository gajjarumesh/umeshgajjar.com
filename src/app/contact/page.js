"use client";
import { Field, Form, Formik } from "formik";
import React from "react";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  firstname: Yup.string().required("Required"),
  lastname: Yup.string().required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
});

const Contact = () => {
  return (
    <React.Fragment>
      <div className="container m-auto py-30">
        <h1 className="text-6xl ug-playfair-semi-bold">Contact Me</h1>
        <h2 className="mt-5 text-3xl ug-raleway-bold">
          Let&#39;s Talk About Your Web or App Project Today
        </h2>
        <p className="mt-2 text-xl ug-raleway-medium">
          Looking to build a website or app that stands out? I&#39;d love to
          hear about your idea. Reach out for a free consultation, project
          quote, or just to say hello &mdash; let&#39;s create something
          impactful together.
        </p>
      </div>
      <div className="bg-indigo-100/50">
        <div className="container m-auto py-30">
          <div className="flex justify-center w-full">
            <div className="text-3xl ug-raleway-medium w-1/4">
              Work Inquiries
            </div>
            <div className="w-3/4">
              <Formik
                initialValues={{
                  firstname: "",
                  lastname: "",
                  email: "",
                }}
                validationSchema={SignupSchema}
                onSubmit={(values) => {
                  console.log(values);
                }}
              >
                {({ errors, touched }) => (
                  <Form className="flex flex-wrap w-full">
                    <div className="flex flex-col w-1/3 pr-5">
                      <label
                        htmlFor="firstname"
                        className="text-[15px] text-slate-800 ug-raleway-medium"
                      >
                        Firstname (required)
                      </label>
                      <Field
                        name="firstname"
                        id="firstname"
                        placeholder="Your first name"
                        className="bg-slate-200 rounded-md min-h-[48px] px-4 text-[14px]"
                      />
                      {errors.firstname && touched.firstname ? (
                        <div className="text-red-500 text-xl">
                          {errors.firstname}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-1/3 pr-5">
                      <label
                        htmlFor="lastname"
                        className="text-[15px] text-slate-800 ug-raleway-medium"
                      >
                        Lastname (required)
                      </label>
                      <Field
                        name="lastname"
                        id="lastname"
                        placeholder="Your last name"
                        className="bg-slate-200 rounded-md min-h-[48px] px-4 text-[14px]"
                      />
                      {errors.lastname && touched.lastname ? (
                        <div className="text-red-500 text-xl">
                          {errors.lastname}
                        </div>
                      ) : null}
                    </div>
                    <div className="flex flex-col w-1/3 pr-5">
                      <label
                        htmlFor="email"
                        className="text-[15px] text-slate-800 ug-raleway-medium"
                      >
                        Email (required)
                      </label>
                      <Field
                        name="email"
                        id="email"
                        placeholder="Your email"
                        className="bg-slate-200 rounded-md min-h-[48px] px-4 text-[14px]"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500 text-xl">
                          {errors.email}
                        </div>
                      ) : null}
                    </div>
                    <Field name="email" type="email" />
                    {errors.email && touched.email ? (
                      <div>{errors.email}</div>
                    ) : null}
                    <button type="submit">Submit</button>
                  </Form>
                )}
              </Formik>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Contact;
