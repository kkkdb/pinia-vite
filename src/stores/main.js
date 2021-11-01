// 用来声明store
import { defineStore } from "pinia";

export const useMainStore = defineStore("main", {
  //声明state
  state: () => ({
    count: 0,
    name: "ddb",
  }),
  //声明getters
  getters: {
    doubleCount(state) {
      return state.count * 2;
    },
    doubleCountPlus() {
      return (num) => {
        return this.doubleCount + num;
      };
    },
  },
  //声明actions
  actions: {
    addCount(num) {
      this.count += num;
    },
    addCountSync(num) {
      setTimeout(() => {
        this.count += num;
      }, 1000);
    },
  },
});
