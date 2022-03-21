import { defineAsyncComponent, h } from "vue";
import Error from "../components/Error.vue";
import Loading from "../components/Loading.vue";
import "nprogress/nprogress.css";
import NProgress from "nprogress";
NProgress.configure({
  trickleSpeed: 50,
  showSpinner: false,
});

// 延迟函数，为了模拟请求的延迟
export function delay(duration) {
  if (!duration) {
    duration = random(1000, 5000);
  }

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, duration);
  });
}

// 随机函数
export function random(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

// 得到一个异步页面
export function getAsyncPage(path) {
  // 为了模拟请求才用的下面的方式
  // return defineAsyncComponent({
  //   loader: () => import(path),
  //   loadingComponent: Loading,  
  // });
  return defineAsyncComponent({
    loader: async () => {
      NProgress.start();
      await delay();
      const comp = await import(path);
      NProgress.done();
      return comp;
    },
    loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
  });
}

// 得到一个异步组件
export function getAsyncComponent(path) {
  return defineAsyncComponent({
    loader: async () => {
      await delay();
      if (Math.random() < 0.5) {
        throw new TypeError();
      }
      return import(path);
    },
    loadingComponent: Loading, // 当promise在pending状态时，将显示这里的组件
    errorComponent: { //加载错误
      render() {
        return h(Error, "出错了！！！");
      },
    },
  });
}
