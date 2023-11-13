import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";
// 该文件在服务器端渲染时被调用，而不是在客户端
// Next.js 是一个基于React 的服务端渲染框架，其主要的特点是支持预渲染
// "_document.ts"是一个常见的自定义点，用于处理全局性的内容（例：添加全局脚本或全局样式）
export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body>
        <Main />
        <NextScript />
        {/* 引入google one tap api的客户端库 */}
        {/* 这是为了确保在渲染整个应用程序时，该脚本将包括在生成的html文档中，以便在浏览器加载页面时，也可以直接使用google one tap api */}
        <script src="https://accounts.google.com/gsi/client"></script>
      </body>
    </Html>
  );
}
