import Vue from "vue";
import Vuex from "vuex";
import usersAPI from "./../apis/users";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentUser: {
      id: -1,
      name: "",
      email: "",
      image: "",
      isAdmin: false,
    },
    isAuthenticated: false,
  },
  getters: {},
  // mutations 是用來修改 state 的方法，有點類似 methods
  mutations: {
    setCurrentUser(state, currentUser) {
      (state.currentUser = {
        ...state.currentUser,
        //透過 api 取得的 currentUser
        ...currentUser,
      }),
        (state.isAuthenticated = true);
    },
  },
  // actions：透過 api 請求資料
  actions: {
    async fetchCurrentUser({ commit }) {
      try {
        const { data } = await usersAPI.getCurrentUser();
        if (data.status === "error") {
          throw new Error(data.message);
        }

        const { id, name, email, image, isAdmin } = data;

        commit("setCurrentUser", {
          id,
          name,
          email,
          image,
          isAdmin,
        });
      } catch (error) {
        console.log(error.message);
        return false;
      }
    },
  },
  // modules：等於是自成一個 store，裡面自己也會有它的 state 和 mutations 等等的
  modules: {},
});
