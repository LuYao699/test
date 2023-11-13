// App.tsx

import React from "react";
import GoogleOneTapButton from "../../components/UI/GoogleOneTapButton";

const Index: React.FC = () => {
  const handleLoginSuccess = (credential: any) => {
    console.log("用户信息：", credential);
    alert("登录成功！");
  };

  const handleLoginFailure = () => {
    console.error("登录失败");
    alert("登录失败！");
  };

  return (
    <div>
      <h1>My App</h1>
      <GoogleOneTapButton onLoginSuccess={handleLoginSuccess} onLoginFailure={handleLoginFailure} />
    </div>
  );
};

export default Index;
