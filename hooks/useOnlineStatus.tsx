import { useEffect, useState, useSyncExternalStore } from "react";

//自定义hook： 判断电脑的网络状态

// 1.第一种：当浏览器已将这些数据加载完了，但是断网了，就会返回false

// export const useOnlineStatus = () => {
//   const [isOnline, setIsOnline] = useState(true);
//   useEffect(() => {
//     const handleOnline = () => {
//       setIsOnline(true);
//     };
//     const handleOffline = () => {
//       setIsOnline(false);
//     };
//     window.addEventListener("online", handleOnline);
//     window.addEventListener("offline", handleOffline);
//     return () => {
//       window.removeEventListener("online", handleOnline);
//       window.removeEventListener("offline", handleOffline);
//     };
//   }, []);
//   return isOnline;
// };

//
function subscribe(callback: () => void) {
  window.addEventListener("online", callback);
  window.addEventListener("offline", callback);
  return () => {
    window.removeEventListener("online", callback);
    window.removeEventListener("offline", callback);
  };
}

export function useOnlineStatus() {
  return useSyncExternalStore(
    subscribe,
    () => navigator.onLine, // 如何在客户端获取值
    () => true // 如何在服务端获取值
  );
}
