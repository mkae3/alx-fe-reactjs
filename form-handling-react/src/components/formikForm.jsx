import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const initialValues = {
    username: "",
    email: "",
    password: ""
  };

  const validationSchema = Yup.object({
    username: Yup.string().required("اسم المستخدم مطلوب"),
    email: Yup.string()
      .email("صيغة البريد غير صحيحة")
      .required("البريد الإلكتروني مطلوب"),
    password: Yup.string()
      .min(6, "يجب أن تكون كلمة المرور 6 أحرف على الأقل")
      .required("كلمة المرور مطلوبة")
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("تم إرسال البيانات:", values);
    alert(`تم تسجيل ${values.username} بنجاح!`);
    resetForm();
  };

  return (
    <div className="form-container">
      <h2>نموذج التسجيل (باستخدام Formik)</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <Form>
          <label>اسم المستخدم:</label>
          <Field type="text" name="username" />
          <ErrorMessage name="username" component="p" style={{ color: "red" }} />

          <label>البريد الإلكتروني:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="p" style={{ color: "red" }} />

          <label>كلمة المرور:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="p" style={{ color: "red" }} />

          <button type="submit">تسجيل</button>
        </Form>
      </Formik>
    </div>
  );
};

export default FormikForm;
