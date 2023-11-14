// GoogleOneTapButton.tsx

import React, { useEffect } from "react";

// 接收两个回调函数作为props
// 登录成功和登录失败
interface GoogleOneTapButtonProps {
  // 当用户成功登录时调用，传递用户的凭证信息。
  onLoginSuccess: (credential: any) => void;
  // 当用户登录失败或发生错误时调用。
  onLoginFailure: () => void;
}

// 全局声明
// 因为ts不知道window对象中是否有google属性，所以对其进行显式声明
// 使用declare global 来扩展全局作用域，以声明Window.google的类型为any。
declare global {
  interface Window {
    google: any;
  }
}

const GoogleOneTapButton: React.FC<GoogleOneTapButtonProps> = ({ onLoginSuccess, onLoginFailure }) => {
  const showGoogleOneTap = () => {
    // 显示google one tap界面
    window.google.accounts.id.prompt();
  };

  // 处理google one tap登录响应的函数，它根据响应中是否存在凭证信息来调用成功或失败的回调函数
  const handleCredentialResponse = (response: any) => {
    if (response.credential) {
      onLoginSuccess(response.credential);
    } else {
      onLoginFailure();
    }
  };

  useEffect(() => {
    // 初始化google one tap，配置客户端id和回调函数
    window.google.accounts.id.initialize({
      // client_id: "YOUR_GOOGLE_API_KEY",
      // 客户端id
      client_id: "68512282149-bvsssdkjk4q2fr444k7a8kv93h2obusv.apps.googleusercontent.com",
      callback: handleCredentialResponse,
    });
  }, []);

  return <button onClick={showGoogleOneTap}>登录</button>;
};

export default GoogleOneTapButton;
