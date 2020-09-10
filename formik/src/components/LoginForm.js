import React from "react";
import { Formik } from "formik";

const LoginForm = () => {
  return (
    <section>
      <form>
        <label htmlFor="login">Login:</label>
        <input type="text" id="login" name="login" />

        <label htmlFor="password">Passowrd:</label>
        <input type="password" name="password" />

        <button>Submit</button>
      </form>
    </section>
  );
};

export default LoginForm;
