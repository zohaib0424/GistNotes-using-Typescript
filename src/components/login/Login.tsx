import React, { useCallback, useContext, useState } from "react";
import { FormWrapper } from "./style";
import { GistContext } from "../../context/GistContext";
import { Button } from "antd";
import { loginAuth, loginInputFormRules } from "../../utils/loginUtils";
import { Form, Input } from 'formik-antd';
import { Formik } from "formik";
import * as Yup from 'yup';

const Login = () => {
  const [name, setName] = useState<any>("");
  const { dispatch } = useContext(GistContext);

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>): void => {
    setName(e.currentTarget.value);
  };
  const handleFinish = useCallback((values) =>{
    //  loginAuth(values, dispatch)
    console.log(values)
    },[]);
  

  return (
    <FormWrapper>
      <Formik initialValues={name} onSubmit={handleFinish} >
        <Form>
          <Form.Item
            name="username"
            rules={loginInputFormRules(true, "username")}
          >
            <Input
              size="large"
              placeholder="Enter username"
              value={name}
              onChange={handleInputChange}
              name="username"
            />
          </Form.Item>
          <Button type="primary" size="large" htmlType="submit">
            Login
          </Button>
        </Form>
      </Formik>
    </FormWrapper>
  );
};

export default Login;
