import React, { useState } from "react";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // التحقق من الحقول
    if (!formData.username || !formData.email || !formData.password) {
      setError("الرجاء ملء جميع الحقول");
      return;
    }

    setError("");

    // محاكاة إرسال البيانات إلى API
    console.log("تم تسجيل المستخدم:", formData);
    alert(`تم تسجيل ${formData.username} بنجاح!`);
  };

  return (
    <div className="form-container">
      <h2>نموذج التسجيل (بطريقة Controlled)</h2>
      <form onSubmit={handleSubmit}>
        <label>اسم المستخدم:</label>
        <input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleChange}
        />

        <label>البريد الإلكتروني:</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <label>كلمة المرور:</label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        {error && <p style={{ color: "red" }}>{error}</p>}

        <button type="submit">تسجيل</button>
      </form>
    </div>
  );
};

export default RegistrationForm;
