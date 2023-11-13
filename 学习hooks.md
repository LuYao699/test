1. 自定义hook共享的是状态逻辑，而不是状态本身（对hook的每一个调用完全独立于对同一个hook的其他调用，相当于react hook useState，每一次调用都是重新一个新的状态）；


2.usereducer:
有点像useState:一个状态，一个动作；
const [state,dispatch]=useReducer(reducer:如何处理状态,initialState: 初始状态);
定义一个reducer=（state：typeof iniitialState，action：TAction）

3.useImperativeHandle:
将子组件的ref暴露出来，方便父组件使用
一般用于弹窗，input（比如网上很火的请假，老板只能点击同意的那个弹窗按钮）

4.useOptimistic:
在发送网络请求时，立即更新用户界面，而不等待服务器响应的方法，这种方法可以提高用户体验，但是需要小心处理可能的错误情况。

5.useTransition：
useTransition 是一个帮助你在不阻塞 UI 的情况下更新状态的 React Hook。
可以做加载中的效果，主要作用是：减少该优先级，减少ui堵塞
