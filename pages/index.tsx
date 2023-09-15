import React from "react";
import { useRouter } from "next/router";
export const Index: React.FC = () => {
  const router = useRouter();
  console.log(router);
  const id = "3";
  return (
    <div>
      <p>hello world</p>
      <div
        onClick={() => {
          router.push(`/${id}/article`);
        }}
        style={{
          width: "200px",
          height: "20px",
          textAlign: "center",
          backgroundColor: "blue",
          cursor: "pointer",
        }}
      >
        点击，跳转到文章详情页面
      </div>
    </div>
  );
};
export default Index;
