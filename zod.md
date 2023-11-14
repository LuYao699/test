<!--zod -->
Zod 是一个以 TypeScript 为首的模式声明和验证库。我使用术语 "模式 "来广义地指任何数据类型，从简单的 字符串 到复杂的嵌套对象。

Zod 被设计成对开发者尽可能友好。其目的是消除重复的类型声明。使用 Zod，你只需声明 一次 验证器，Zod 就会自动推断出静态 TypeScript 类型。它很容易将较简单的类型组成复杂的数据结构

安装：

必要条件：
1.TypeScript 4.5+!
2.你必须在你的tsconfig.json中启用strict模式。这是所有 TypeScript 项目的最佳实践。

文档链接：https://zod.dev/README_ZH