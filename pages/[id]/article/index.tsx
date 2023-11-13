import React from "react";
import { useReduceContext } from "../../../hooks/useReduceContext";
// 练习：useReducer+useContext

export const Article: React.FC = () => {
  const { width, setState } = useReduceContext();
  return (
    <div>
      <p>这是文章详情页面</p>
      <p>reducer-width:{width}</p>
      <button
        onClick={() => {
          setState && setState({ type: "Open" });
        }}
      >
        打开
      </button>
      <button
        onClick={() => {
          setState && setState({ type: "Close" });
        }}
      >
        关闭
      </button>
    </div>
  );
};
export default Article;
