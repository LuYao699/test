import React, { useCallback, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input, FormControl } from "@chakra-ui/react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type FormData = {
  username: string;
  password: string;
  favlanguage: string;
};

const MyForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    watch,
    unregister,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(
      z.object({
        username: z.string().min(1, { message: "至少要填一个数字" }),
        password: z.string().min(1, { message: "至少要填一个数字" }),
        favlanguage: z.string(),
      })
    ),
  });

  const onSubmit: SubmitHandler<FormData> = useCallback(data => {
    alert(JSON.stringify(data));
    // 这里的data代表着提交表单时，所有的值
    watch();
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
      <input type="radio" id="css" value="CSS" {...register("favlanguage")} />
      <label htmlFor="css">CSS</label>
      <br />
      <input type="radio" id="javascript" value="JavaScript" {...register("favlanguage")} />
      <label htmlFor="javascript">JavaScript</label>
      <span>{errors.favlanguage && errors.favlanguage.message}</span>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default MyForm;
