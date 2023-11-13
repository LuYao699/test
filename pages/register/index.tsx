import React, { use, useCallback } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

type FormData = {
  username?: string;
  password: string;
};

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    unregister,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = useCallback(data => {
    alert(JSON.stringify(data));
    // 这里的data代表着提交表单时，所有的值
    console.log(data);
  }, []);

  const handleUnregister = useCallback(() => {
    unregister("username");
  }, [unregister]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Register the "username" field */}
      <label htmlFor="username">Username:</label>
      <input type="text" id="username" {...register("username")} name="username" />
      {/* Display the error message if there is one */}
      <span>{errors.username && errors.username.message}</span>

      {/* Register the "password" field */}
      <label htmlFor="password">Password:</label>
      {/*
          register：使用useForm中的register属性来注册表单字段
          required：true，代表着必填。
          maxLength：input框输入字符不能超过maxLength。
          Pattern：包含一个正则表达式值，它将根据表单中输入的数据进行检查。
      */}

      <input type="password" id="password" {...register("password", { required: "Password is required" })} />
      {/* Display the error message if there is one */}
      <span>{errors.password && errors.password.message}</span>
      <button type="button" onClick={handleUnregister}>
        unregister
      </button>
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
