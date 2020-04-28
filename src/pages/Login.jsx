import React, { useState } from 'react';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });
  const updateField = (e) => {
    setForm({
      ...form,
      [e.target.id]: e.target.value,
    });
  };
  return (
    <form className="Login">
      <div className="Email">
        <input
          type="text"
          value={form.email}
          id="email"
          onChange={updateField}
        />
      </div>
      <div className="Password">
        <input
          type="password"
          value={form.password}
          id="password"
          onChange={updateField}
        />
      </div>
    </form>
  );
};

export default Login;
